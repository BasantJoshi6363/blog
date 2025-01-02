import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { connectDB } from "./src/database/db.js";
import userRouter from "./src/routes/user.route.js";
import blogRouter from "./src/routes/blog.route.js";
process.loadEnvFile();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use("/",userRouter)
app.use("/blog",blogRouter)
app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server is running on port ${process.env.PORT}`);
});

