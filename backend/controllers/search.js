exports.search = async (req, res ) => {
    const searchKey = req.query.keyword

    return res.json({ success: true, S_results: searchKey });
}