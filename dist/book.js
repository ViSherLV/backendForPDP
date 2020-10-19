"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSchema = void 0;
const mongoose = require("mongoose");
const uri = "mongodb+srv://visher:chatbot@cluster0.mxirp.mongodb.net/testdb?retryWrites=true&w=majority";
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully Connected to MingoDB");
    }
});
exports.TestSchema = new mongoose.Schema({
    phoneNumber: { type: Number, required: true }
});
const Users = mongoose.model('Book', exports.TestSchema);
exports.default = Users;
//# sourceMappingURL=book.js.map