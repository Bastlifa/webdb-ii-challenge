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

router.get('/:id', (req, res) =>
{
    const id = Number(req.params.id)
    db('cars').where({id})
        .then(response =>
            {
                if(response && response.length > 0)
                {
                    res.status(200).json(response)
                }
                else
                {
                    res.status(404).json({ errorMessage: "no such car found" })
                }
            })
        .catch(err =>
            {
                res.status(500).json({ errorMessage: `Could not get car` })
            })
})

router.post('/', (req, res) =>
{
    if(!req.body.VIN || !req.body.make || !req.body.model || !req.body.mileage)
    {
        res.status(400).json({ errorMessage: "Please provide VIN, make, model, and mileage" })
    }
    else
    {
        db('cars').insert(req.body)
            .then(response =>
                {
                    res.status(201).json(response)
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: `Internal Error: Could not create car` })
                })
    }
})

router.put('/:id', (req, res) =>
{
    const id = req.params.id
    const changes = req.body
    db('cars')
        .where({id})
        .update(changes)
            .then(response =>
                {
                    if(response)
                    {
                        res.status(200).json({ message: `updated ${response} accounts` })
                    }
                    else
                    {
                        res.status(404).json({ errorMessage: `Could not update car with id ${id}`})
                    }
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: "Internal Error: Could not update car" })
                })
})

router.delete('/:id', (req, res) =>
{
    const id = req.params.id
    const changes = req.body
    db('cars')
        .where({id})
        .del()
            .then(response =>
                {
                    if(response)
                    {
                        res.status(200).json({ message: `deleted ${response} accounts` })
                    }
                    else
                    {
                        res.status(404).json({ errorMessage: `Could not delete car with id ${id}`})
                    }
                })
            .catch(error =>
                {
                    res.status(500).json({ errorMessage: "Internal Error: Could not delete car" })
                })
})

module.exports = router