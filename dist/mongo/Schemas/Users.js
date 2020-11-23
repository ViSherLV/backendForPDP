"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSchema = void 0;
const mongoose = require("mongoose");
exports.TestSchema = new mongoose.Schema({
    name: { type: String, required: false },
    phoneNumber: { type: Number, required: true },
    chatId: { type: Number, required: true },
});
const Users = mongoose.model("Book", exports.TestSchema);
exports.default = Users;
//# sourceMappingURL=Users.js.map