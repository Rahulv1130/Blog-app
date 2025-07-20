# Blog - app
This project is a full-stack web application that replicates core features of Medium, built using React and Hono ( Cloudfare Workers ).

A full-stack Medium-like web application that enables clients to create an account and then post and edit blogs.

## To run the Code :
--> First clone the repository 
```bash
https://github.com/Rahulv1130/Blog-app.git
```
```bash
cd Blog-app
```
--> Then Setup the Backend Folder :


```bash 
cd backend
npm install
```
- Now in the Backend folder create a .env file that has 2 variables:  `JWT_SECRET=secret` ,  `DATABASE_URL=postgresDBurl`
- Then start the server using :

```
node server.js
```

--> Now the frontend part :
```bash 
cd frontend
npm install
```
- Create a .env file in the frontend folder with the variable `VITE_BACKEND_URL=http://127.0.0.1:8787/api/v1`
```bash 
npm run dev
```
<img width="959" height="539" alt="1" src="https://github.com/user-attachments/assets/5797b531-b44a-471c-8c95-8be2755c7a4e" />
<img width="948" height="498" alt="2" src="https://github.com/user-attachments/assets/bb805893-1658-454a-9d31-d5ea6173abcd" />
<img width="959" height="487" alt="3" src="https://github.com/user-attachments/assets/568b5799-145c-4b4e-85c7-8eaf20bf9c4f" />
<img width="959" height="457" alt="4" src="https://github.com/user-attachments/assets/df127ba5-a38c-48ca-a733-e460209fa7e1" />






