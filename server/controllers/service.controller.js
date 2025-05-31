import { Service } from "../models/service.model.js";
import { User } from "../models/User.js";
import sharp from "sharp"
import cloudinary from "../utils/cloudinary.js";


export const createService = async (req, res) => {
    try {

        const { heading, short_desc, desc } = req.body;
        const  image  = req.file;
        // const { id } = req.user;

        if (!heading) return res.status(400).json({ success: false, message: 'image required' })
        if (!short_desc) return res.status(400).json({ success: false, message: 'Quick Lines are required' });

        if (!image) return res.status(400).json({ success: false, message: 'Image is requried' });

        // const currentUser = await User.findById(id);
        // if (!currentUser) return res.status(400).json({ success: false, message: 'No user found' })
        // if (currentUser?.role !== 'admin') return res.status(400).json({ success: false, message: 'Only Admin can add.' })

        const optimizedImageBuffer = await sharp(image.buffer)
            .toFormat('jpeg', { quality: 80 })
            .toBuffer();

        const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString('base64')}`;
        const cloudResponse = await cloudinary.uploader.upload(fileUri);

        const service = await Service.create({
            heading,
            image: cloudResponse.secure_url,
            short_desc,
            // author: id,
            desc
        })

        return res.status(201).json({
            success: true,
            message: `${heading} has been created`,
            service
        })

    } catch (error) {
        console.log(`Error: controller/service_controller/createService: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong. Maybe image format is not accepted.'
        });
    }
}

export const allService = async (req, res) => {
    try {

        const services = await Service.find()
            .populate('author');
        
        return res.status(200).json({
            success: true,
            services
        })

    } catch (error) {
        console.log(`Error: controller/service_controller/allService: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong. Maybe image format is not accepted.'
        });
    }
}

export const getService = async(req, res)=>{}

export const editService = async (req, res) => {
    try {
        const { id } = req.params;
        const { heading, short_desc, desc } = req.body;
        let updateData = { heading, short_desc, desc };

        // If image is provided (e.g., via multer), handle image update
        if (req.file) {
            const optimizedImageBuffer = await sharp(req.file.buffer)
                .toFormat('jpeg', { quality: 80 })
                .toBuffer();
            const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString('base64')}`;
            const cloudResponse = await cloudinary.uploader.upload(fileUri);
            updateData.image = cloudResponse.secure_url;
        }

        const updatedService = await Service.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        return res.status(200).json({ success: true, message: 'Service updated', service: updatedService });
    } catch (error) {
        console.log(`Error: controller/service_controller/editService: ${error}`);
        return res.status(500).json({ success: false, message: 'Failed to update service' });
    }
}

export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await Service.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        return res.status(200).json({ success: true, message: 'Service deleted' });
    } catch (error) {
        console.log(`Error: controller/service_controller/deleteService: ${error}`);
        return res.status(500).json({ success: false, message: 'Failed to delete service' });
    }
}