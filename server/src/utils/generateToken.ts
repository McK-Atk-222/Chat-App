import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: String, res: Response ) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET!,{
        expiresIn: "1d"
    })

    res.cookie("jwt", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development" //HTTPS
    })

    return token;
};

export default generateToken
