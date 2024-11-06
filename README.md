# Url Shortener 

A simple minimilist url shortner made in **Nextjs** with  **Typescript**, **Tailwind** and **postgres** as database with **prisma** 

 ## Tech stack

 - **Next**
 - **Typescript**
 - **Tailwind**
 - **Postgres**

 

## Docker(Local)
 
Run a postgres container
```bash
 docker run -e POSTGRES_PASSWORD=password-d -p 5432:5432 postgres
```
Create a .env
```.env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb?schema=public"
NEXT_PUBLIC_BASE_URL="http://localhost:3000/"
```

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm i 
```
```bash
npm run dev 
```
Or
```bash
yarn i 
```
```bash
yarn run dev 
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.