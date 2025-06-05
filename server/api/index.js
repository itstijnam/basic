// /api/index.js
import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from '../utils/db.js';
import authRoutes from '../routes/authRoutes.js';
import mediaRoutes from '../routes/mediaRoutes.js';
import serviceRoutes from '../routes/service.route.js';
import testimonialRoutes from '../routes/testimonialRoute.js';

dotenv.config();
connectDB(); // Connect once during cold start

const app = express();

// __dirname workaround for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

const corsOption = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/service', serviceRoutes);
app.use('/testimonials', testimonialRoutes);

export default app;
