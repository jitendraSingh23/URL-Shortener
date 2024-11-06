# Url Shortener 

A simple minimilist url shortner made in **Nextjs** with  **Typescript**, **Tailwind** and **postgres** as database with **prisma** 

![Screenshot 2024-11-05 200709](https://github.com/user-attachments/assets/0cda3ded-2f75-4330-adb4-e447aef5774b)


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
[localhost](http://localhost:3000/).
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
