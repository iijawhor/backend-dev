import dotenv from "dotenv";
import connectDB from "./db/index.js";

//first approach to connect
dotenv.config({ path: "/.env" });
connectDB();

// this is second approach to connect db
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${processs.env.MONGODB_URI}/ ${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERROR: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log(" in db connect", error);
//     throw error;
//   }
// })();
