const { readFileSync } = require('fs');
const path = require('path');

module.exports = {
    name: 'commitmessage',
    description: 'Generate a random commit message',
    category: 'Fun',
    execute(message, args) {
        const messageData = JSON.parse(
            readFileSync(path.join(__dirname, '../../data/Message.json'))
        );

        const messages = messageData.CommitMessage.Message;
        const commitMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(`${commitMessage}`);
    },
};
