import express from "express"
import { register, getUser } from "./usersCtrl";


const router = express.Router();

router
.get("/get-user-by-cookie", getUser)
.post("", register) 

//good routing example :/api/users
// .get("") <-- to get ALL users 
// .get("/:id") <-- to get a specific user by the id
// .post("") <-- create a user
// .patch("/:id") <-- update a specific field ot information in a user 
// .put("/:id") <-- update entire user
// .delete(/:id) <-- delete by id


export default router;