
import express from 'express';
import upload from '../middleware/upload.js'
import { deleteMedia, getAllMedia, getMediaById, updateMedia, uploadMedia } from '../controllers/mediaController.js'



const router = express.Router();

router.route('/upload').post(upload.single('file'), uploadMedia);
router.route('/').get(getAllMedia);
router.route('/:id').get(getMediaById);
router.route('/:id').put(upload.single('file'), updateMedia);
router.route('/:id').delete(deleteMedia);


export default router;
