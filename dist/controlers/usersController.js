"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.senMessagesToUsers = exports.updateUser = exports.deleteUser = exports.addUser = exports.getUser = exports.allUsers = void 0;
const Users_1 = require("../mongo/Schemas/Users");
const axios_1 = require("axios");
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
exports.senMessagesToUsers = (req, res) => {
    const users = req.body.users;
    const message = req.body.message;
    const encodeMessage = encodeURI(message);
    try {
        for (let user of users) {
            const route = `https://api.telegram.org/bot1268971736:AAHS6Gyr_KQDZQlxS8LqPH2cA9cu4a_qbks/sendMessage?chat_id=${user}&text=${encodeMessage}`;
            axios_1.default.get(route);
        }
        res.send('Accept');
    }
    catch (_a) {
        res.send('Canst sene messages');
    }
};
//# sourceMappingURL=usersController.js.map