const router = require('express').Router()
const { models: { User, Restaurant }} = require('../db')
module.exports = router

router.get('/', async(req, res, next) => {
    try {
        const users= await User.findAll()
        res.json(users)
    } catch (error){
        next(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id, {include: Restaurant});
        res.json(user)
    } catch (error){
        next(error)
    }
})

router.post('/', async(req, res, next) => {
    try {
        res.status(201).send(await User.create(req.body))
    } catch (error){
        next(error)
    }
})

router.put('/:id', async(req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id)
        res.send(await user.update(req.body))
    } catch (error){
        next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id)
        await user.destroy()
        res.send(user)
    } catch (error){
        next(error)
    }
})



