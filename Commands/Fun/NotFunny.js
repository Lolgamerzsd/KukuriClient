const { readFileSync } = require('fs');
const path = require('path');

module.exports = {
    name: 'notfunny',
    description: 'Send a random not funny message',
    category: 'Fun',
    execute(message, args) {
        const messageData = JSON.parse(
            readFileSync(path.join(__dirname, '../../data/Message.json'))
        );

        const wy = messageData.NotFunny.Message;
        const ms = wy[Math.floor(Math.random() * wy.length)];
        message.channel.send(ms);
    },
};
