import express from "express";
import { createTestimonial, getAllTestimonial, deleteTestimonial } from "../controllers/testimonial.controller.js";
import cloudUplaod from '../middleware/cloudinaryUpload.js';


const router = express.Router();

router.route('/create').post(cloudUplaod.single('image'),  createTestimonial);
router.route('/all-testimonials').get(getAllTestimonial);
router.route('/delete/:id').delete(deleteTestimonial);

export default router;