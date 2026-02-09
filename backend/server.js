import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config({path:"backend/config/config.env"});
const PORT = process.env.PORT || 3000;

connectDB();

// Uncaught Exception Error Handling
process.on("uncaughtException",(err) =>{
    console.log(`Error : ${err.message}`);
    console.log(`Server is Shutting Down, Due to Uncaught Exception`);
    
    process.exit(1);
});

const servr = app.listen(3000, () => {
    console.log(`Server Is Running on http://localhost:${PORT}`);
});

// Unhandled Exception
process.on("unhandledRejection", (err) => {
    console.log(`Error : ${err.message}`);
    console.log(`Server is Shutting Down, Due to Unhandled Rejection`);

    server.close(() => {
        process.exit(1);
    });
});