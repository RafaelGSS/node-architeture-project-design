const rescue = require("express-rescue");

const handler = {
    // Home
    home: () => {
        return [
            (req, res, next) => {
                // JOI or another validation HERE
                next();
            },
            // rescue(async (req, res) => {
            //     throw new Error("Error of test");
            //     res.json(res.setData({ ok: true }));
            // }),
            rescue(async (req, res) => {
                await new Promise(function(resolve, reject) {
                    throw new Error("Error of implementation");
                    res.json(res.setData({ok: true}));
                });
            }),
            (error, req, res, next) => {
                // tslint:disable-next-line:no-console
                console.log(error);
                res.json(
                    res.setErrorMessage("A error ocurred"),
                );
            },
        ];
    },
};

module.exports = handler;
