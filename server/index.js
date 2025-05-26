import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import mediaRoutes from './routes/mediaRoutes.js'
import serviceRoutes from './routes/service.route.js'
import cookieParser from 'cookie-parser';
import path from 'path';
import connectDB from './utils/db.js';

dotenv.config();
const app = express();

const __dirname = path.resolve();

const PORT = process.env.PORT;



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const corsOption = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  credentials: true,
};

// Middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/media', mediaRoutes); // Adjust path if your route file name changes
app.use('/api/service', serviceRoutes);

app.listen(PORT, ()=>{
  connectDB();
  console.log(`http://localhost:${PORT}`);
})