
import { Media } from '../models/Media.js';
import fs from 'fs';
import path from 'path';

export const uploadMedia = async (req, res) => {
  try {
    const { mimetype, size, path: filepath, filename } = req.file;
    const type = mimetype.startsWith('image') ? 'image' : 'video';

    const media = new Media({ filename, path: filepath, mimetype, size, type });
    await media.save();

    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllMedia = async (req, res) => {
  try {
    const media = await Media.find().sort({ uploadedAt: -1 });
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Not found' });
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMedia = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (!media) return res.status(404).json({ message: 'Not found' });

    fs.unlinkSync(media.path); // delete old file

    const { mimetype, size, path: filepath, filename } = req.file;
    const type = mimetype.startsWith('image') ? 'image' : 'video';

    media.filename = filename;
    media.path = filepath;
    media.mimetype = mimetype;
    media.size = size;
    media.type = type;
    await media.save();

    res.json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) return res.status(404).json({ message: 'Not found' });

    fs.unlinkSync(media.path); // remove file from disk
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
