import express from "express";
import { prisma } from "./utils/prisma";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const allTodo = await prisma.todo.findMany({});
  res.send(allTodo);
});

app.post("/", async (req, res) => {
  const title = await req.body.title;
  const newTodo = await prisma.todo.create({
    data: { title },
  });
  res.send(newTodo);
});

app.delete("/:id", async (req, res) => {
  const deleteTodo = await prisma.todo.delete({
    where: { id: Number(req.params.id) },
  });
  res.send(deleteTodo);
});

app.listen(5000, () => {
  console.log(`Server is running on ${PORT}`);
});
