import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({

});

export default mongoose.models.messages || mongoose.model('messages', messagesSchema);