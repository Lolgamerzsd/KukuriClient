module.exports = {
    name: 'srpc',
    description: 'Samsung RPC Generator',
    execute(message, args, client) {
        let type = args[0];
        let appID = args[1];
        if (!appID) {
            return message.reply('Please provide an appID');
            //appID = 'com.YostarJP.BlueArchive'; // I love Blue Archive
        }
        if (type === 'stop') {
            message.reply(`Stopping \`${appID}\` RPC`);
            client.user.setSamsungActivity(appID, 'STOP');
        } else if (type === 'start') {
            message.reply(`Starting \`${appID}\` RPC`);
            client.user.setSamsungActivity(appID, 'START');
        } else if (type === "update") {
            message.reply(`Updating \`${appID}\` RPC`);
            client.user.setSamsungActivity(appID, 'UPDATE');
        } else {
            return message.reply('Please provide a valid type (start, stop, update)');
        }

    },
};