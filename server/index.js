import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/connectDb.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import notesRouter from "./routes/genrate.route.js";
import pdfRouter from "./routes/pdf.route.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;



app.use(
cors({
origin: "http://localhost:5173",
credentials: true,
methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
})
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
res.json({ message: "ExamNotes AI Backend Running 🚀" });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);
app.use("/api/pdf", pdfRouter);

const startServer = async () => {
try {
await connectDb();

    app.listen(PORT, () => {
        console.log(`✅ Server running on port ${PORT}`);
    });
} catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
}

};

startServer();