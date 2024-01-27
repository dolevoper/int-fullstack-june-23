import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        requierd: [true, "user must have email"],
    },
    password: String
})

const UserModel = mongoose.model("users", UserSchema)

export default UserModel