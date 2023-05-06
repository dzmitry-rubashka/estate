module.exports = function(req, res) {
    const { user } = req.body;

    if (!user) {
        return res.status(404).json({ error: 'Hey, who are you?!' });
    }

    res.json({ message: `Welcome back, ${user}!` });
}