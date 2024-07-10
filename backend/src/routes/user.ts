import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign , verify } from "hono/jwt"
import { Hono } from "hono";
import { signupInput , signinInput } from "@rahulv1130/medium-common"

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    }
}>();


userRouter.post("/signup" , async (c)=> {                // Route for SignUp
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({ message: "Inputs are incorrect" })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  
    
  try{
    const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name
            }
    })
  
    const jwt = await sign({id: user.id} , c.env.JWT_SECRET)
    return c.json({msg: "User Created Successfully" , jwt: jwt})

  } catch(e){
      c.status(400)
      return c.json({ error: "Cannot Proceed. Something is Wrong" })
    }
})
  
  
userRouter.post("/signin" , async (c)=> {                // Route for SignIn
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if(!success){
    c.status(411)
    return c.json({ message: "Inputs are incorrect" })
  }
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())
  
    
  
  try{
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password
      }
    })
  
    if(!user){
      c.status(401)
      return c.json({ error: "Invalid credentials" })
    }
  
    const jwt = await sign({ id: user.id } , c.env.JWT_SECRET )
    return c.json({ jwt: jwt })
  } catch(e){
      c.status(400)
      return c.json({ error: "Something went wrong" })
    }

})

