const axios = require("axios");

const groupNames = {
  goatbot: "7040622742634726",
};

module.exports = {
  config: {
    name: "post",
    version: "1.0",
    role: 2,
    author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
    shortDescription: "See the posts of the goatbotUsers group",
    longDescription: "See the recent posts of the goatbot users group.",
    category: "fb",
    guide: "{p}post goatbot [search_keyword] or post [goatbot] to see 10 recent posts",
    dependencies: {
      axios: "",
    },
  },

  onStart: async function ({ api, event, args }) {
  const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
    try {
      if (!args.length || !groupNames[args[0]]) {
        return api.sendMessage(this.config.guide, event.threadID, event.messageID);
      }

      const groupName = args[0].toLowerCase();
      const searchKeyword = args.slice(1).join(" ");

      const groupId = groupNames[groupName];
      const accessToken = "EAAD6V7os0gc... put your own token";// add your 6v7 token here
      const apiVersion = "v18.0";
      let groupUrl = `https://graph.facebook.com/${apiVersion}/${groupId}/feed?access_token=${accessToken}&fields=attachments{url,type},source,from,message,created_time`;

      if (!searchKeyword) {
        groupUrl += "&limit=10";
      }

      const response = await axios.get(groupUrl);
      const posts = response.data.data || [];

      if (posts.length === 0) {
        return api.sendMessage(`No recent posts found in the group ${groupName}.`, event.threadID, event.messageID);
      } else {
        let filteredPosts = posts;

        if (searchKeyword) {
          filteredPosts = posts.filter(post => post.message && post.message.toLowerCase().includes(searchKeyword.toLowerCase()));
        }

        if (filteredPosts.length === 0) {
          return api.sendMessage(`No posts found related to ${searchKeyword}".`, event.threadID, event.messageID);
        }

        let postList = '';
        for (let i = 0; i < filteredPosts.length; i++) {
          const post = filteredPosts[i];
          const userName = post.from && post.from.name ? post.from.name : "Unknown";
          const message = post.message || "(No message)";
          postList += `${i + 1}. ${userName}: ${message}\n\n`;
        }

        api.sendMessage({ body: postList }, event.threadID, async (err, info) => {
          if (err) {
            console.error("Error sending post list:", err);
            await api.sendMessage("An error occurred while sending the posts.", event.threadID, event.messageID);
            return;
          }

          global.GoatBot.onReply.set(info.messageID, {
            commandName: "post",
            messageID: info.messageID,
            author: event.senderID,
            posts: filteredPosts,
          });
        });
      }
    } catch (error) {
      console.error("Error retrieving posts:", error);
      await api.sendMessage("An error occurred while retrieving posts.", event.threadID, event.messageID);
    }
  },

  onReply: async function ({ api, event, Reply, args }) {
    try {
      const { author, posts } = Reply;

      if (event.senderID !== author || !posts) {
        return;
      }

      const postIndex = parseInt(args[0], 10);

      if (isNaN(postIndex) || postIndex <= 0 || postIndex > posts.length) {
        await api.sendMessage({ body: "Invalid input.\nPlease provide a valid number." }, event.threadID);
        return;
      }

      const selectedPost = posts[postIndex - 1];
      const userName = selectedPost.from ? selectedPost.from.name : "Unknown";
      const message = selectedPost.message || "(No message)";

      const postInfo = `Post from ${userName}:\n${message}`;
      await api.sendMessage({ body: postInfo }, event.threadID, event.messageID);

      global.GoatBot.onReply.delete(event.messageID);
    } catch (error) {
      console.error("Error in onReply:", error);
      await api.sendMessage("An error occurred while processing your request.", event.threadID);
    }
  },
};
