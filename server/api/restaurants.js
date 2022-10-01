const router = require('express').Router()

const {
    models: { User, Restaurant },
  } = require("../db");


router.get('/', async(req, res, next) => {
    try {
        const restaurants = await Restaurant.findAll()
        res.json(restaurants)
    } catch (error){
        next(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id, {include: User})
        res.json(restaurant)
    } catch (error){
        next(error)
    }
})

router.post('/', async(req, res, next) => {
    try {
        res.status(201).send(await Restaurant.create(req.body))
    } catch (error){
        next(error)
    }
})  

router.put('/:id', async(req, res, next) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id)
        res.send(await restaurant.update(req.body))
    } catch (error){
        next(error)
    }
})

router.put('/:restaurantId/user', async(req, res, next) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.restaurantId, {include: User})
        const restaurantWithoutUser = await restaurant.removeUser(req.params.userId)
        res.send(restaurantWithoutUser)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id)
        await restaurant.destroy()
        res.send(restaurant)
    } catch (error) {
        next(error)
    }
})

module.exports = router