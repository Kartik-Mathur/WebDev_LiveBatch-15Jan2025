const express = require('express');
const Todos = require('../models/Todos.model');
const router = express.Router();

router.post('/', async (req, res) => {
    const { task } = req.body;

    try {
        await Todos.create({ task }); // To make async functions act in a sync way

        res.status(200).json({
            message: "Task added successfully",
        });
    } catch (error) {
        res.status(503).json({
            message: "Not able to add task currently",
            error: error.message
        });
    }
})

router.get('/', async (req, res) => {
    try {
        let todos = await Todos.find();
        res.status(200).json({
            message: "Tasks fetched successfully",
            todos
        });

    } catch (error) {
        res.status(503).json({
            message: "Not able to fetch tasks!!!",
            error: error.message
        });
    }
})


module.exports = router;