import sharp from "sharp";
import { Testimonial } from "../models/testimonial.model.js";
import cloudinary from "../utils/cloudinary.js";


export const createTestimonial = async (req, res) => {
    try {

        const { name: testimonial_name, quote, city, country } = req.body;
        const image = req.file;
        // const { id } = req.user;

        if (!testimonial_name) return res.status(400).json({ success: false, message: 'Name is required' });
        if (!quote) return res.status(400).json({ success: false, message: 'Quote is required' });
        if (!city) return res.status(400).json({ success: false, message: 'City is required' });
        if (!country) return res.status(400).json({ success: false, message: 'Country is required' });

        if (!image) return res.status(400).json({ success: false, message: 'Image is requried' });


        // const currentUser = await User.findById(id);
        // if (!currentUser) return res.status(400).json({ success: false, message: 'No user found' })
        // if (currentUser?.role !== 'admin') return res.status(400).json({ success: false, message: 'Only Admin can add.' })

        const optimizedImageBuffer = await sharp(image.buffer)
            .toFormat('jpeg', { quality: 80 })
            .toBuffer();

        const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString('base64')}`;
        const cloudResponse = await cloudinary.uploader.upload(fileUri);

        const createTestimonial = await Testimonial.create({
            testimonial_name,
            image: cloudResponse.secure_url,
            // author: id,
            city,
            country,
            quote
        })

        return res.status(201).json({
            success: true,
            message: `${testimonial_name} has been added`,
            createTestimonial
        })

    } catch (error) {
        console.log(`Error: controller/testimonial_controller/createTestimonial: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong. Maybe image format is not accepted.'
        });
    }
}

export const getAllTestimonial = async (req, res) => {
    try {

        const testimonials = await Testimonial.find()
            .populate('author');

        return res.status(200).json({
            success: true,
            testimonials
        })

    } catch (error) {
        console.log(`Error: controller/testimonial_controller/createTestimonial: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong.'
        });
    }
}

export const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
        if (!deletedTestimonial) {
            return res.status(404).json({ success: false, message: 'Testimonial not found' });
        }
        return res.status(200).json({ success: true, message: 'Testimonial deleted' });
    } catch (error) {
        console.log(`Error: controller/testimonial_controller/deleteTestimonial: ${error}`);
        return res.status(500).json({ success: false, message: 'Failed to delete testimonial' });
    }
}