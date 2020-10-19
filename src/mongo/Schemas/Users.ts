import * as mongoose from 'mongoose';

export const TestSchema = new mongoose.Schema({
    phoneNumber:{type:Number, required: true}
})
const Users = mongoose.model('Book',TestSchema);
export default Users;