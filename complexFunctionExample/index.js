const leftPad = require("left-pad")

var watson = require('watson-developer-cloud');


function myAction(args) {

	//args.text


    return new Promise(function(resolve, reject) {

    var conversation = watson.conversation({
        username: args.conversationUsername,
        password: args.conversationPassword,
        version: 'v1',
        version_date: args.version_date
    });

    conversation.listWorkspaces(function(err, response) {
    if (err) {
        console.error(err);
    } else {
        //console.log(JSON.stringify(response, null, 2));
        return resolve({ padded: JSON.stringify(response, null, 2) });
    }
    });

    });

}

exports.main = myAction;