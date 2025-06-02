import express from 'express';
import { allService, createService, getService, editService, deleteService } from '../controllers/service.controller.js';
import { verifyAdmin, verifyToken } from '../middleware/authMiddleware.js';
import cloudUplaod from '../middleware/cloudinaryUpload.js';

const router = express.Router();

// router.route('/add').post(verifyToken, verifyAdmin, cloudUplaod.single('image') , createService);
router.route('/add').post(cloudUplaod.single('image') , createService);
router.route('/get-services').get(allService);

// New routes for edit, delete, and get single service
router.route('/edit/:id').put(verifyToken, verifyAdmin, cloudUplaod.single('image'), editService);
router.route('/delete/:id').delete(deleteService);
router.route('/:id').get(getService);

export default router;