import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: { type: 'String', required: true },
  email: { type: 'String', required: true },
  phone: { type: 'String', required: true },
  message: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Message', messageSchema);
