# Middleware login
## **Description:**
A simple app consisting of a register page and a login page. Once you login you will be greated with a page that has a button `Test`. If you click it, the middleware will do its work and verify your `user.token`. If your token is valid, the console will log it and send user's `ID` and `username`, go to the next endpoint, and send a `Hello World` in the console.
The middleware can be found in the route `/back/src/middleware`

## **Usefulness:**
You can setup this middleware verification in your project to allow user actions that modify the database, such as patch requests.

### **Technologies:**
Made with `React`, `Prisma` and `Express`
