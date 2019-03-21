const handler = {
    // Home
    home: () => {
        return [
            (req, res, next) => {
                // JOI or another validation HERE
                next();
            },
            (req, res) => {
                return res.json(res.setData({ ok: true }));
            },
        ];
    },
};

module.exports = handler;
