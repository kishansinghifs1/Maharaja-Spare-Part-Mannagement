import { Hono } from "hono";


export const userRouter = new Hono();


//middleware
userRouter.use("*", (c, next) => {
  console.log("User route middleware executed");
  return next();
});

userRouter.get("/ping", (c) => {
  return c.json({ message: "User route is working!" });
});

userRouter.get("/signup", (c) => {
  return c.json({ message: "User signup route is working!" });
});

userRouter.get("/signin", (c) => {
  return c.json({ message: "User login route is working!" });
})

userRouter.get("/password-reset", (c) => {
  return c.json({ message: "User logout route is working!" });
});
