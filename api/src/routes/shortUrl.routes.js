const router = require("express").Router();
const shortUrl = require("../models/shortUrl.models");
const shortId = require("shortid");

router.get("/all", async (req, res) => {
  try {
    const shortUrls = await shortUrl.find();
    res.status(200).json({ shortUrls: shortUrls });
  } catch (error) {
    console.error(`Internal Error in GET: ${error}`);
    res.status(500).json({ "Internal Error in GET": error });
  }
});

router.post("/shorten", async (req, res) => {
  try {
    const { url } = await req.body;
    if (!url) {
      return res
        .status(400)
        .json({ error: "url is required, please enter a url" });
    }
    const shortenId = shortId.generate();

    const shortenUrl = await shortUrl.create({
      url: url,
      shortUrl: shortenId,
    });

    res.status(200).json({ message: "url stored", shortenUrl });
  } catch (error) {
    console.error(`Internal Error in POST: ${error}`);
    res.status(500).json({ "Internal Error in POST": error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const shortenUrl = await shortUrl.findById(id);
    if (!shortenUrl)
      return res
        .status(404)
        .json({ error: "no short url found with the given id" });

    await shortUrl.findByIdAndDelete(id);

    return res.status(200).json({
      message: "short url deleted successfully",
      "short url": shortenUrl,
    });
  } catch (error) {
    console.error(`Internal Error in DELETE: ${error}`);
    res.status(500).json({ "Internal Error in DELETE": error });
  }
});

router.get("/:redirectId", async (req, res) => {
  try {
    const { redirectId } = req.params;
    const redirectUrl = await shortUrl.findOne({ shortUrl: redirectId });

    if (!redirectUrl) {
      return res
        .status(404)
        .json({ error: "No URL found for the given short URL" });
    }

    res.redirect(redirectUrl.url);
  } catch (error) {
    console.error(`Internal Error in (redirect short url) GET: ${error}`);
    res
      .status(500)
      .json({ "Internal Error in (redirect short url) GET": error });
  }
});

module.exports = router;
