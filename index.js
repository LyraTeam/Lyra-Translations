const availableLangs = ['en', 'ar'];

let obj = {};
for (lang of availableLangs) obj[lang] = {
    bot: require(`./${lang}/bot.json`),
    web: require(`./${lang}/website.json`)
}

module.exports = obj;