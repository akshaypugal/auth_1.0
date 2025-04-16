const bcrypt = require('bcrypt');
const User = require('../model/auth-model');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register = async (req, res) => {
    try {
        const { name, email, password, role = 'user' } = req.body;

        const checkUser = await User.findOne({ $or: [{ name }, { email }] });
        if (checkUser) {
            return res.status(409).json({
                success: false,
                message: 'User already exists, kindly login',
                data: checkUser
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User successfully registered, kindly login',
            data: newUser,
        });

    } catch (error) {
        console.error('Unable to register the User:', error);
        return res.status(500).json({
            success: false,
            message: 'Unable to register the User'
        });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found, please register'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign({
             id : user._id,
             name : user.name , 
             email : user.email,
             password : user.password,
             role : user.role
        },process.env.JWT_KEY , {expiresIn : '15m'})
        // const token = jwt.sign({ id: user._id, role: user.role }, 'secretKey', { expiresIn: '1h' });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                id : user._id,
                name : user.name , 
                email : user.email,
                password : user.password,
                token : token
            },
            // token
        });

    } catch (error) {
        console.error('Unable to login the User:', error);
        return res.status(500).json({
            success: false,
            message: 'Unable to login the User'
        });
    }
};



module.exports = {register  , login }