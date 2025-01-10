import asyncHandler from 'express-async-handler';
import User from './../models/userModel';
import generateToken from "../config/generateToken";

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic} = req.body;
    if( !name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all the fields');
    }
    const userExist = await User.findOne({email});
    if (userExist) {
        res.status(400);
        throw new Error('The user already exists');
    }
    const user = await User.create({
        name, email, password, pic
    });
    if (user) {
        res.status(201).json({
            _id: _id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Failed to create the User');
    }
});
module.exports = {registerUser};
