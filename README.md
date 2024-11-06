# Url Shortener 

A simple minimilist url shortner made in **Nextjs** with  **Typescript**, **Tailwind** and **postgres** as database with **prisma** 



 ## Tech stack

 - **Next**
 - **Typescript**
 - **Tailwind**
 - **Postgres**

 

## Run Locally

1.Create a .env
```.env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb?schema=public"
NEXT_PUBLIC_BASE_URL="http://localhost:3000/"
```

 
2.Build the Docker image

```bash
 docker-compose build
```
3.Start the Docker containers

```bash
docker-compose up
```
4.Try to access app on your localhost:3000
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.