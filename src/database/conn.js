import mongoose from "mongoose";

const mongo = process.env.MONGO_URI;

const connectMongo = async () => {
  console.log(mongo);
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://randyh252:YeGQOXRNw38vjdku@employeemanagement.bpfqh8a.mongodb.net/?retryWrites=true&w=majority"
    );

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
