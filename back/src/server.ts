import express from "express";
import cors from "cors";
import routerUsers from "./routers/users";
import routerTest from "./routers/test";

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use('/api/routers/users', routerUsers);
app.use('/api/routers/test', routerTest);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});