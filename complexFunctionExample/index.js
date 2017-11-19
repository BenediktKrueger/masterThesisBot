const leftPad = require("left-pad")

var watson = require('watson-developer-cloud');


function myAction(args) {

    var conversation = watson.conversation({
        username: args.conversationUsername,
        password: args.conversationPassword,
        version: 'v1',
        version_date: args.version_date
    });

    const lines = args.lines || [];
    //return { (padded: lines.map(l => leftPad(l, 30, "."))) + msg.conversationKey }
    return { padded: args.conversationUsername }

}

exports.main = myAction;