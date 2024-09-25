module.exports.config = {
	name: "all",
	version: "1.0.1",
	role: 0,
	author: "RB-BADOL-KHAN",
	description: "tag all",
   category: "media",
	usages: "tegall",
	countDowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.onStart = async function({ api, event, args }) {
	try {
		const botID = api.getCurrentUserID();
		const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : "@everyone", mentions = [], index = 0;
		
		for(const idUser of listUserID) {
			body = "‎" + body;
			mentions.push({ id: idUser, tag: "‎", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
                           }
