const availableLangs = ['en', 'ar'];

let obj = { devBot: require(`./lyra/bot.json`), devWeb: require(`./lyra/website.json`) };

for (lang of availableLangs) obj[lang] = {
    bot: require(`./${lang}/bot.json`),
    web: require(`./${lang}/website.json`)
}

module.exports = obj;