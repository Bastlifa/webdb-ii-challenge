const express = require('express')

const db = require('../data/db-config.js')

const router = express.Router()

router.get('/', (req, res) =>
{
    db('cars')
        .then(response =>
            {
                res.status(200).json(response)
            })
        .catch(error =>
            {
                res.status(500).json({ errorMessage: "error string" })
            })
})

module.exports = router