import mongoose from 'mongoose';
const moduleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: String,
    lessons: { type: Array, default: [] },
  },
  { collection: 'modules' }
);
export default moduleSchema;
