"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSchema = void 0;
const mongoose = require("mongoose");
exports.TestSchema = new mongoose.Schema({
    phoneNumber: { type: Number, required: true }
});
const Users = mongoose.model('Book', exports.TestSchema);
exports.default = Users;
//# sourceMappingURL=Users.js.map