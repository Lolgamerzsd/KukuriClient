const { readFileSync } = require('fs');
const path = require('path');

module.exports = {
    name: 'advice',
    description: 'Send random advice',
    category: 'Fun',
    execute(message, args) {
        const messageData = JSON.parse(
            readFileSync(path.join(__dirname, '../../data/Message.json'))
        );
        
        const advices = messageData.Advice.Message;
        const advice = advices[Math.floor(Math.random() * advices.length)];
        
        message.channel.send(advice);
    },
};