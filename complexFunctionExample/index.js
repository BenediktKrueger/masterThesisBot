const leftPad = require("left-pad")

function myAction(args) {
    const lines = args.lines || [];
    //return { (padded: lines.map(l => leftPad(l, 30, "."))) + msg.conversationKey }
    return { args.conversationKey }

}

exports.main = myAction;