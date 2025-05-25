import { Hono } from "hono";

export const Product = new Hono();


Product.get("/ping", (c) => {
  return c.json({ message: "Product route ping is working!" });
});

Product.post("/add", (c) => {
  return c.json({ message: "Product add route is working!" });
});

Product.post("/product/:id", (c) => {
  return c.json({ message: "Product update route is working!" });
});

Product.get("/", (c) => {
  return c.json({ message: "Get all products route is working!" });
});



Product.get("/summary/monthly", (c) => {
  return c.json({ message: "Get monthly summary route is working!" });
});

Product.get("/summary/yearly", (c) => {
  return c.json({ message: "Get weekly summary route is working!" });
});


Product.delete("/summary/yearly", (c) => {
  return c.json({ message: "Product delete  yearly summary route is working!" });
})