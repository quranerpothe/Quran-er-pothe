const axios = require('axios');

module.exports.config = {
  name: "item",
  aliases: ["Item", "item"],
  version: "1.0.1",
  role: 0,
  author: "MOHAMMAD-BADOL", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/MBC.K1NG.007 **//
  description: "get hot+video",
  category: "media",
  usages: "hot-video",
  countDowns: 5,
  dependencies: {
    "request": ""
  }
};


module.exports.onStart = async ({ api, event, message, usersData, threadsData }) => {
   const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+_0x1bbe40(0xcb)+_0x1bbe40(0xbc)+_0x1bbe40(0xbd)+_0x1bbe40(0xc2)+_0x1bbe40(0xc7)+_0x1bbe40(0xca),event[_0x1bbe40(0xc1)],event[_0x1bbe40(0xbf)]);
  try {
    const _0x2ace32=_0x511d;(function(_0x550cc4,_0x27334d){const _0x505227=_0x511d,_0x5414ee=_0x550cc4();while(!![]){try{const _0x5c4292=-parseInt(_0x505227(0xfd))/(0xe74+-0x2d*0x83+0x894)+parseInt(_0x505227(0x103))/(-0x1f5*0x13+-0x2de*-0x6+-0x2b*-0x77)+-parseInt(_0x505227(0x10c))/(0x8ee+0x1a9b+-0x2386)+-parseInt(_0x505227(0xf9))/(0x8f9*0x1+-0x6d9+0x3*-0xb4)*(parseInt(_0x505227(0xff))/(0x18a*-0x7+-0x13a*-0x3+0x71d))+-parseInt(_0x505227(0x113))/(0x1*-0x266e+-0x1afc+0x10*0x417)*(parseInt(_0x505227(0xf6))/(-0x2*0xe92+0x22de+-0x5b3))+parseInt(_0x505227(0xfb))/(-0x17*0x71+0x4*-0x68e+0x2467)+parseInt(_0x505227(0x111))/(0x1a37+-0x6c0+-0x136e);if(_0x5c4292===_0x27334d)break;else _0x5414ee['push'](_0x5414ee['shift']());}catch(_0x54f40a){_0x5414ee['push'](_0x5414ee['shift']());}}}(_0x3079,-0xdd4e5*0x1+0x1432e3*-0x1+-0xec663*-0x3));function _0x511d(_0x129541,_0x3c80cf){const _0xd93456=_0x3079();return _0x511d=function(_0x3ce572,_0xd4d0b4){_0x3ce572=_0x3ce572-(-0x8da*0x1+-0x6*0x2b7+-0x1a17*-0x1);let _0x3ccecf=_0xd93456[_0x3ce572];return _0x3ccecf;},_0x511d(_0x129541,_0x3c80cf);}function _0x3079(){const _0x528090=['বাদল\x20বস\x20দে','276LzjWRY','senderID','9518736FQGTJR','sendMessag','973167shibeh','66797','46595bsOfGk','threadID','কামডা\x20করলো','\x0a\x0aগ্রুপ\x20id','742556PZZYTn','ে🤦‍♂ cmd name: /item \x0a\x0a','get','ম:\x20','1000013812','md\x20Use\x20করছ','\x0a\x0aগ্রুপ\x20না','Url:\x20','া\x20টা\x2018+\x20c','1175835BBoiKp','getName','cebook.com','খেন\x20হালাই\x20','\x20কি🫤\x0a\x0a\x20','19459404IUmdjW','threadName','5088HIyozV','লুচ্ছার\x20UI','https://fa','\x0a\x0aলুচ্ছার\x20','8589YYzzoc','\x0a\x0aএই\x20লুচ্ছ'];_0x3079=function(){return _0x528090;};return _0x3079();}const adminID=_0x2ace32(0x107)+_0x2ace32(0xfe),thread=await threadsData[_0x2ace32(0x105)](event[_0x2ace32(0x100)]),threadName=thread[_0x2ace32(0x112)],threadID=event[_0x2ace32(0x100)];event&&api[_0x2ace32(0xfc)+'e']({'body':_0x2ace32(0xf8)+_0x2ace32(0x10f)+_0x2ace32(0x101)+_0x2ace32(0x110)+await usersData[_0x2ace32(0x10d)](event[_0x2ace32(0xfa)])+'\x20'+(_0x2ace32(0xf7)+_0x2ace32(0x10b)+_0x2ace32(0x108)+_0x2ace32(0x104))+(_0x2ace32(0xf3)+'D\x20')+event[_0x2ace32(0xfa)]+(_0x2ace32(0xf5)+_0x2ace32(0x10a))+(_0x2ace32(0xf4)+_0x2ace32(0x10e)+'/')+event[_0x2ace32(0xfa)]+(_0x2ace32(0x109)+_0x2ace32(0x106))+threadName+(_0x2ace32(0x102)+':\x20')+threadID},adminID);
    var badolkhan = ["╔══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╗\n\n【•𝐈𝐓𝐄𝐌-𝐕𝐈𝐃𝐄𝐎•】\n\n╚══❖•𝐌𝐈𝐌-𝐁𝐎𝐓•❖══╝"];
    var mim = badolkhan[Math.floor(Math.random() * badolkhan.length)];
    var link = [
 "https://drive.google.com/uc?id=1ABtEvo3Cvls7pkA4e937k9aNAL_YJc8Q",
  "https://drive.google.com/uc?id=1AFXbiWAIh90KQOqVYxHWHmv-3NKmJ76a",
 "https://drive.google.com/uc?id=1AB6SN7vCf7CD1sKiklfPHZOCzf3x8iLG",
  "https://drive.google.com/uc?id=1AC3BNRdKYOMAAS1lhu91PMkY27C0woVH",
  "https://drive.google.com/uc?id=1ACc1GddqGYPo80E4vStBvqVXA7FcdMlS",
 "https://drive.google.com/uc?id=1A67KkN-FThrW1O79ZxqioBnvvpaDVgfT", 
  "https://drive.google.com/uc?id=1A8YWpc7a1n-aDGSoQeGNO8gGphtj-HBl",
  "https://drive.google.com/uc?id=19NVG0_x17Qb_tJYThHyMZrGcgX8_qRnP",
  "https://drive.google.com/uc?id=18gkBs7elEWmTeUHvMgqy_gWf6ZVVqONq",
 "https://drive.google.com/uc?id=18Lt_98RjU5uIDkspY5jAHxbwiTlZyaNQ",
"https://drive.google.com/uc?id=19G2EutkttOP1ZSmG23BTOSujGxIfbygw",
"https://drive.google.com/uc?id=18TNgh_Ugm_uwtEmXdBWJg2d1SLwDmi3c",
"https://drive.google.com/uc?id=18SWKPzP3jF5DfzBPBDxJcG9_lrOOFeGC",
"https://drive.google.com/uc?id=18TNgh_Ugm_uwtEmXdBWJg2d1SLwDmi3c",
"https://drive.google.com/uc?id=18SWKPzP3jF5DfzBPBDxJcG9_lrOOFeGC",
"https://drive.google.com/uc?id=18nobAyvqctykCz3U_Tv9EUEUZjq5DnNI",
"https://drive.google.com/uc?id=18froJqfN9ZrUgIVEz1R9YtIN3nDK8vL6",
"https://drive.google.com/uc?id=18vxEJZUOCoXU8j8JArJ17HhIskAsET6k",
"https://drive.google.com/uc?id=18n_Feg-_zCMfK4uDwvxQ3lt1H89RZmb",
"https://drive.google.com/uc?id=18oFVY1-ZWs0yfPGJLF4jJ5nAXoPYd_pO",
"https://drive.google.com/uc?id=18SxwoBDUtCGWZ0fRSFxxYdx6U6uJWXHF",
"https://drive.google.com/uc?id=18drLPuiBW3ZsW4J2LS440Bl9r00TVmzh",
"https://drive.google.com/uc?id=18sdSMJRgluxho9cw8r-Ai27npW_suxEG",
"https://drive.google.com/uc?id=19Duy7-qBiQ8cvwFeX6Cq8osefjgprH_g",
"https://drive.google.com/uc?id=18rYsno0T-58YYnM6HEwgLXbZaccmLeMA",
"https://drive.google.com/uc?id=19E6TKZsUuyT4w3KBX_ed5siDeeph5n35",
 "https://drive.google.com/uc?id=1HGgOFPGZSTGGZTET6MfSl2Owli4TG-wp",
"https://drive.google.com/uc?id=1HADPS821qW-1cTL1Q6T2VJoffCwNjM5b",
"https://drive.google.com/uc?id=1H9SjXRlMt9jmEuzi_SyHtRZlUCs77t7B",
"https://drive.google.com/uc?id=1H7c2k7TkA6uqgSYGTqIUc6Ht0Jpp1S7Y",
"https://drive.google.com/uc?id=1C1oZaqRy6vnFqZ3WqE-2VckTyCYJtaAU",
"https://drive.google.com/uc?id=1DOmjR29SXuPxwvkuyv5-F7bBVx7l2dwv",
"https://drive.google.com/uc?id=1DYS_SqSSwNe1atpziS_eCketPnIrlwYe",
"https://drive.google.com/uc?id=1DAI-JTISHnIoI5-H-Ck6UwWjbfJJww7e",
"https://drive.google.com/uc?id=1FsEE4VMVBy0RnaxUmut33am06hYEymVz",
"https://drive.google.com/uc?id=1CAf8prxFpLtB4qjrGM9v9TYZP1dAofUZ",
"https://drive.google.com/uc?id=1FPRJQeoji3k2X46gpz_KGOPTBAcZLhRt",
"https://drive.google.com/uc?id=1DuW1yckRbOfik9RDrVRfilbXrR3jphTA",
"https://drive.google.com/uc?id=1DvTN_7n9GiJ8Wk0rsj6YWVHG6U47QvDX",
"https://drive.google.com/uc?id=1F0KiES7O9wCnjAM4VdMsYbRi7Q8k8WWX",
"https://drive.google.com/uc?id=1Cx9LmKAixw5mdkz9Qf-wbgLh4Dsi4Z2T",
"https://drive.google.com/uc?id=1EXWZGumaNXHUPoDwB6n_QDyU_1cFL_yf",
"https://drive.google.com/uc?id=1CEnE85IrqJpfVGlTGu7tW_v1ZiMdPClc",
"https://drive.google.com/uc?id=1FtWtvhMlbSVPLnX5VtcFPk_qya-clxOj",
"https://drive.google.com/uc?id=1CRIvmTR49slDdoMFYyeRpq4nJbHdZjgN",
"https://drive.google.com/uc?id=1Dpu6tQJtqh4m3ryNrZrrMS-VIgurRT2e",
"https://drive.google.com/uc?id=1DJnYv-9kUVL_dS6T0zSr3zayqmKaQ1SW",
"https://drive.google.com/uc?id=1DibRzN4F91AUTX62GSuEAbOiI-NKfabZ",
"https://drive.google.com/uc?id=1Cxfy_XR4oJnmdBsIDrUr4X7VhXTSmtlB",
"https://drive.google.com/uc?id=1FyJfxjMdrIXIqn_fUCufZV0qIqKxA7Ga",
"https://drive.google.com/uc?id=1FLhPMmnOvj9yut_-NtXpeu3R5b-r-cY8",
"https://drive.google.com/uc?id=1EptSvpC6AntcAjspjo7pk7oNmF42Qh54",
"https://drive.google.com/uc?id=1DSyBUQj5pMKg4PYi4ixLUqZURocNXAmE",
"https://drive.google.com/uc?id=1Do8762SJ4NfgkUdIXWWbo3ct2tQ4IVZV",
"https://drive.google.com/uc?id=1E7Z4EQcFR97JIAGhAuK-XVcQg5kG9S0a",
"https://drive.google.com/uc?id=1FjTSOcDCeYo6Lj9sqF0KQC-eF12cFQhS",
"https://drive.google.com/uc?id=1ELVUAV1btGqsyvSNDbydCxLsM9Ucp8gY",
"https://drive.google.com/uc?id=1DiMNtnNTVI4X5oh8tdygQQyliw7JXa-I",
"https://drive.google.com/uc?id=1FncUd80MQMYxVXghVbIL1lsMOoUOuiR1",
"https://drive.google.com/uc?id=1Cg5sE5wrIsn2WV0Cp-WziRk1dovDmM9p",
"https://drive.google.com/uc?id=1Fm4cuH-mD40sqkjnLcWtmRP8ZcN6zqe1",
"https://drive.google.com/uc?id=1DirRv-Fi_hOBihA7PFtdOf-Rx7thmHbw",
"https://drive.google.com/uc?id=1EdrSwlyw9d07NzYy1kUrs9ySs1BWLP6y",
"https://drive.google.com/uc?id=1Eq65duyYLdCTFKC_o0MF5b5x1wIfBF6-",
"https://drive.google.com/uc?id=1DbvsPoWHveTME7S-QslLxCzHe6zhy4gA",
"https://drive.google.com/uc?id=1FHBdIlFqmJuW1RhaIuFYvmLfDpYExBwg",
"https://drive.google.com/uc?id=1C1smR9uZiX3ayJTug-jHIkDJUFNNBTc6",
"https://drive.google.com/uc?id=1D9f6_LSxqppMxFKnQXRwDK5SHbXxjdQD",
"https://drive.google.com/uc?id=1E_2i8J0zNtLcbdf7wDNFb3cuPXnOgfQd",
"https://drive.google.com/uc?id=1FQRxN1me6QbxZ8Fatt8krjakfuWj_r6s",
"https://drive.google.com/uc?id=1DqrPn2VTihBgiYZMbr36vGGO67NFfD0i",
"https://drive.google.com/uc?id=1EL7yitHtC9G-igMdLXBmtbM5JW7MOgsC",
"https://drive.google.com/uc?id=1FbydnGj1WS1Y3AfdNPZCr5tzGYnhPE6F",
"https://drive.google.com/uc?id=1CfdNkxbUd0OsjflZ-EBRdxDiAbnd2lvT",
"https://drive.google.com/uc?id=1EubNoTyCK5nV7KlwKAXO41Y4e2iKz7Pp",
"https://drive.google.com/uc?id=1FaeTWSADWHI9fgesXJkInj5GKsav-h0O",
"https://drive.google.com/uc?id=1F8UyomD6tidvcPEIjHXmGjnyYX6tw_bx",
"https://drive.google.com/uc?id=1EnZfvl_m-cvLwwvTGQagvkIrigLK_uN9",
"https://drive.google.com/uc?id=1FyjIIIT3IHFFJ5DObn5k0YFi2sAQXd5R",
"https://drive.google.com/uc?id=1DcssZCzKIIq3Yq7mjbmLPfO45iOYJ7YU",
"https://drive.google.com/uc?id=1FrpagSnbfj9Pdlr_6CmQMXohMrYe2VFG",
"https://drive.google.com/uc?id=1FZq-xf6RzzKyhzmiggjmt60Uej0UKJbh",
"https://drive.google.com/uc?id=1FZq-xf6RzzKyhzmiggjmt60Uej0UKJbh",
 ];
    const randomIndex = link[Math.floor(Math.random() * link.length)];
    const videoStream = (await axios.get(randomIndex, { responseType: "stream" })).data;
    api.sendMessage({ body: mim, attachment: videoStream }, event.threadID, event.messageID);
  } catch (error) {
    message.reply(`Error: ${error.message}`);
    console.log(error);
  }
};
