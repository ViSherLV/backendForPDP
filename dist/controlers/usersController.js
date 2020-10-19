"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.addUser = exports.getUser = exports.allUsers = void 0;
const Users_1 = require("../mongo/Schemas/Users");
exports.allUsers = (req, res) => {
    Users_1.default.find((err, users) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(users);
        }
    });
};
exports.getUser = (req, res) => {
    console.log(`req.params.id ${req.params.id}`);
    Users_1.default.findOne({ phoneNumber: req.params.id }, (err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.addUser = (req, res) => {
    let user = new Users_1.default(req.body);
    user.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
exports.deleteUser = (req, res) => {
    Users_1.default.deleteOne({ phoneNumber: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('User deleted');
        }
    });
};
exports.updateUser = (req, res) => {
    Users_1.default.findOneAndUpdate({ phoneNumber: req.params.id }, req.body, (err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send('User updated');
        }
    });
};
//# sourceMappingURL=usersController.js.map