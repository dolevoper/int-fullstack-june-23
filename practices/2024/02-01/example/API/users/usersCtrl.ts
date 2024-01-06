import express from "express"
import bcrypt from "bcrypt"
import UserModel from "./userModel";
import jwt from "jwt-simple"

const saltRounds = 10

export async function register(req:express.Request, res:express.Response) {
    try {
        const {email, password} = req.body; 
        if (!email || !password) throw new Error("on FILE usersCtrl on function register: missing information");

        const hash = await bcrypt.hash(password, saltRounds);

        // const salt = bcrypt.getSaltSync(saltRounds);
        // const hash = bcrypt.hashSync(password, salt)

        const userDB = new UserModel({email, password: hash})
        await userDB.save();

        //sending cookie
        const cookie = {userId: userDB._id};
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("on FILE usersCtrl on function register: no secret");

        const JWTCookie = jwt.encode(cookie, secret);

        res.cookie("ID", JWTCookie);
        userDB.password = null;
        res.send({register: true, userDB})

    } catch (error) {
        res.send({register: false, error: error.messgae})
    }
}

// decoding cookie example - backend

export async function getUser(req: express.Request, res: express.Response) {
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");
  
        const { userID } = req.cookies;
        if (!userID) throw new Error("Couldn't find user from cookies");
  
        const decodedUserId = jwt.decode(userID, secret);
        const { userId } = decodedUserId;
  
        const userDB = await UserModel.findById(userId);
        if (!userDB) throw new Error(`Couldn't find user id with the id: ${userId}`);
        
        res.send({ userDB });
    } catch (error) {
        res.send({ error: error.message })
    }
  }