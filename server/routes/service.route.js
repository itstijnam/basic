import express from 'express';
import { allService, createService, getService } from '../controllers/service.controller.js';
import { verifyAdmin, verifyToken } from '../middleware/authMiddleware.js';
import cloudUplaod from '../middleware/cloudinaryUpload.js';

const router = express.Router();

// router.route('/add').post(verifyToken, verifyAdmin, cloudUplaod.single('image') , createService);
router.route('/add').post(cloudUplaod.single('image') , createService);
router.route('/get-services').get(allService);

export default router;