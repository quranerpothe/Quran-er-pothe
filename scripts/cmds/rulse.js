module.exports = {
  config: {
    name: "rulse",
    version: "1.0",
    author: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★", // real modified by B4D9L-B9T-007
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "Admin",
    category: "auto 📟",
  },

  onStart: async function() {},

  onStart: async function({ event, message, getLang, usersData, threadsData }) {

    const data = await usersData.get(event.senderID);

    const name = data.name;

    const thread = (await threadsData.get(event.threadID))

    const threadName = thread.threadName;

    return message.reply({
      body: `╔╝❮❮-${name}-❯❯╚╗\n\n▬▬▬▬▬▬▬▬▬▬▬▬\n\n❤আসসালামু আলাইকুম কেমন আছেন সবাই❤

🟢গ্রুপ এর কিছু রুলস আছে, এগুলো হয়তো অনেকেই জানেন না যারা জানে না তারা জেনে রাখেন🟢

▬▬▬▬▬▬▬▬▬▬▬▬

🟡১) কোন প্রকার বাঝে কথা বলা যাবে না🟡

🟡২) ইসলাম এর বিরুদ্ধে কোনো কথা বলা জাবে নাহ🟡

🟡৩) কোন পর্ণ স্ক্রিনশট কিংবা লিংক দেওয়া  যাবে না🟡

🟡৪) এখানে সবাই প্রিয় ভাই বন তো এখানে খারাপ কথা থেকে বিরত থাকেন🟡

🟡৫)আপনি রোবটের ব্যবহার করা না জানলে help চান আডমিন এর থেকে তাও বাজে কমান্ড কইরেন নাহ🟡

🟡৬) spam করা যাবে না🟡

🟡৭) বট নিয়ে কোন প্রকার ফালতু টেক্সট করা যাবে না.. আর /help ফাইলে এ যেই গুলা  আসে এইগুলা শুধু ব্যাবাহর করবেন🟡

🟡৮)এই গ্রুপে কোন বট এড করা যাবে না🟡

🟡৯)  গ্রুপে আড্ডা দেওয়া যাবে এখানে সবাই ভাই ব্রাদার হয়ে থাকবেন🟡

🟡১০) এই বট অন্য কোন গ্রুপে এড করতে চাইলে অবশ্যই এডমিনের পারমিশন নিতে হবে🟡

🟡১১)আর  গ্রুপে কোন কিছু ইনফরমেশন পরিবর্তন করা যাবে না ..without permission🟡

▬▬▬▬▬▬▬▬▬▬▬▬

🟥•—»যারা এই রুলস  গুলা মেনে চলতে পারবেন তারা group থাকেন 🌺আর যারা মানতে পারবেন না লিফট নিবেন, আর রুলস না মানলে সম্মান এর সাথে ব্যান & কিক দেওয়া হবে 🌸༅༎•─🟥

▬▬▬▬▬▬▬▬▬▬▬▬

🟥•—»যারা বট সম্পক  বুঝেন না, তারা এডমিন কে মেনশন দিয়ে বলবেন🌸༅༎•─🟥

🟥এডমিন এর ফেসবুক আইডি কোনো হেল্প লাগলে নক দিতে পারেন🟥

https://m.me/MBC.K1NG.007

m.me/100001381266797

𝐁𝐎𝐓-𝐎𝐖𝐍𝐄𝐑: (𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃-𝐁𝐀𝐃𝐎𝐋)

▬▬▬▬▬▬▬▬▬▬▬▬`,
      attachment: await global.utils.getStreamFromURL("https://i.imgur.com/mkEYPZW.gif")
    });
  }
};
