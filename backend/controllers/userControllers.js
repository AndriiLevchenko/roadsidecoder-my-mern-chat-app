import asyncHandler from "express-async-handler";
import Userroads from "./../models/userModel.js";
import generateToken from "../config/generateToken.js";
import bcrypt from "bcryptjs";

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic} = req.body;
    if( !name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }
    const userExist = await Userroads.findOne({email});
    console.log("email = ", email);
    if (userExist) {
        res.status(400);
        throw new Error("The user already exists");
    }
    const user = await Userroads.create({
        name, email, password, pic
    });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create the Userrr");
    }
});

const authUser = async (req, res) => {
    const { email, password} = req.body;
    console.log("email login = ", email);
    const user  = await Userroads.findOne({email});
    console.log("user login = ", user);
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');
    if (user && isPasswordCorrect) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid credentials");
    }
};
//module.exports = {registerUser};
// export default registerUser;
export {registerUser, authUser};
