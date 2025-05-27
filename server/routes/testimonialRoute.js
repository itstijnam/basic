import express from "express";
import { createTestimonial, getAllTestimonial } from "../controllers/testimonial.controller.js";


const router = express.Router();

router.route('/create').post(createTestimonial);
router.route('/all-testimonials').get(getAllTestimonial);

export default router;