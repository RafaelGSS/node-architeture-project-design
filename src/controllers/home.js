const controller = {
    home: (req, res) => {
        console.log('Chegou aqui', res.data)
        return res.json(res.setData({ ok: true }))
    }
}

module.exports = controller