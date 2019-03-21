const handler = {
    home: (req, res) => {
        return res.json(res.setData({ ok: true }));
    },
};

module.exports = handler;
