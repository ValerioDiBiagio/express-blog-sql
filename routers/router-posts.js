// express
const express = require('express');

// Router
const router = express.Router();

//controller
const controllerPosts = require('../controllers/controller-posts');

// rotte CRUD

// index
router.get('/', controllerPosts.index);

// show
router.get('/:id', controllerPosts.show);

// store
router.post('/', controllerPosts.store);

// update
router.put('/:id', controllerPosts.update);

// modify
router.patch('/:id', controllerPosts.modify);

// destroy
router.delete('/:id', controllerPosts.destroy);

// esportare router
module.exports = router