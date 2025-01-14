import express from "express";
import cors from "cors";
import records from "./records";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
