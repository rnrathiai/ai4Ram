exports.dashboard = (req, res) => {
    res.json({
        success: true,
        message: `Welcome ${req.user.username}!`,
        user: req.user
    });
};