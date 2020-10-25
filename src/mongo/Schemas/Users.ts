import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
    name: { type: String, required: false },
    phoneNumber: { type: Number, required: true },
    chatId: { type: Number, required: true }

})
const Users = mongoose.model('Book', TestSchema);
export default Users;