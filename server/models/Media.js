
import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  filename: String,
  path: String,
  mimetype: String,
  size: Number,
  type: { type: String, enum: ['image', 'video'], required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export const Media = mongoose.model('Media', mediaSchema);