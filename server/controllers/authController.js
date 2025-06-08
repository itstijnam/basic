

import { User } from '../models/User.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

// Register a new user  
export const register = async (req, res) => {
  try {
    const { name, email, password, secret_key } = req.body;
    let role = req.body.role; // mutable

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Determine role based on secret_key
    if (secret_key) {
      if (secret_key === process.env.ADMIN_SECRET_KEY) {
        role = 'admin';
      } else {
        role = 'user';
      }
    } else {
      role = 'user';
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await newUser.save();

    return res.status(201).json({ success: true, message: `${role} registered successfully` });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};


// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    const currentUser = {
      _id: user._id,
      name: user.name,
      role: user.role
    }

    return res.status(200).json({
      success: true,
      message: `Logged In successfully`,
      token,
      currentUser
    })
  } catch (error) {
    return res.status(500).json({ message: 'Login failed', error: error.message });
  }
};


export const logout = async (_, res) => {
  try {
    return res.cookie('token', '', { maxAge: 0 }).json({
      success: true,
      message: 'Logged Out successfully',
    })
  } catch (error) {
    console.log(`Error: controllers/logout ${error}`);
  }
}
