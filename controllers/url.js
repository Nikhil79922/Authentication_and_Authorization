const { timeStamp } = require("console");
const URL = require("../models/url")
const generateShortId = require('ssid');

async function handleUrlPost(req, res) {
    const shortID = generateShortId(5, true);
    const url = req.body.url;

    if (!url) {
        res.status(400).json({ status: "Source URL Required" })
    }
    await URL.create({
        ShortId: shortID,
        redirectUrl: url,
    })
    res.status(201).json({ ShortedURL: `${shortID}` })
}

async function handleShortedURl(req, res) {
    const shortID = req.params.urlID;
    const entry = await URL.findOneAndUpdate({ ShortId: shortID }, {
        $push: {
            visitHistory: { timeStamp: Date.now() }
        }
    })
    console.log(entry)
    res.redirect(entry.redirectUrl)
}

async function handleURlClicks(req, res) {
    const urlID = req.params.urlID;
    const entry2 = await URL.findOne({ ShortId: urlID })
    console.log("dwdcwewecwecwecwec")
    res.json({ Totallicks: entry2.visitHistory.length , analytics:entry2.visitHistory })
}

module.exports = {
    handleUrlPost,
    handleShortedURl,
    handleURlClicks,
}
