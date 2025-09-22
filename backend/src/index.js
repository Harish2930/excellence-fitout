// import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
// dotenv.config({ path: path.resolve("./.env") }); // absolute path ensures PM2 can find it

import { app } from "./app.js";
import { connectDB } from "./configs/db.config.js";

/**
 * @module index
 * Entry point of the application.
 *
 * - Loads environment variables from `.env`
 * - Connects to the MongoDB database
 * - Starts the Express server if DB connection is successful
 */

// Load environment variables


// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`🚀 Server is running on port ${port}`);
//   console.log(`📧 Mail service is ready to receive contact forms!`);
// });

// Connect DB with server
connectDB()
  .then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Server failed to start due to database connection issue", {
      stack: err.stack,
    });
  });
