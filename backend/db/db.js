import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Make sure this is called early!

function connect() {
  if (!process.env.MONGODB_URI) {
    console.error("❌ MONGODB_URI not found in .env");
    return;
  }

  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Optional but helpful
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

  // Optional debug
  mongoose.connection.on("error", (err) => {
    console.error("❗ MongoDB runtime error:", err.message);
  });
}

export default connect;
