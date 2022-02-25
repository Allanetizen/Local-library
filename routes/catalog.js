var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/',(req, res, )=> {book_controller.index});

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', (req, res, )=>{book_controller.book_create_get});

// POST request for creating Book.
router.post('/book/create', (req, res, )=>{book_controller.book_create_post});

// GET request to delete Book.
router.get('/book/:id/delete', (req, res, )=>{book_controller.book_delete_get});

// POST request to delete Book.
router.post('/book/:id/delete',(req, res, )=>{ book_controller.book_delete_post});

// GET request to update Book.
router.get('/book/:id/update', (req, res, )=>{book_controller.book_update_get});

// POST request to update Book.
router.post('/book/:id/update', (req, res, )=>{book_controller.book_update_post});

// GET request for one Book.
router.get('/book/:id', (req, res, )=>{book_controller.book_detail});

// GET request for list of all Book items.
router.get('/books', (req, res, )=>{book_controller.book_list});

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create',(req, res, )=>{ author_controller.author_create_get});

// POST request for creating Author.
router.post('/author/create', (req, res, )=>{author_controller.author_create_post});

// GET request to delete Author.
router.get('/author/:id/delete', (req, res, )=>{author_controller.author_delete_get});

// POST request to delete Author.
router.post('/author/:id/delete', (req, res, )=>{author_controller.author_delete_post});

// GET request to update Author.
router.get('/author/:id/update', (req, res, )=>{author_controller.author_update_get});

// POST request to update Author.
router.post('/author/:id/update', (req, res, )=>{author_controller.author_update_post});

// GET request for one Author.
router.get('/author/:id', (req, res, )=>{author_controller.author_detail});

// GET request for list of all Authors.
router.get('/authors', (req, res, )=>{author_controller.author_list});

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', (req, res, )=>{genre_controller.genre_create_get});

//POST request for creating Genre.
router.post('/genre/create', (req, res, )=>{genre_controller.genre_create_post});

// GET request to delete Genre.
router.get('/genre/:id/delete', (req, res, )=>{genre_controller.genre_delete_get});

// POST request to delete Genre.
router.post('/genre/:id/delete', (req, res, )=>{genre_controller.genre_delete_post});

// GET request to update Genre.
router.get('/genre/:id/update', (req, res, )=>{genre_controller.genre_update_get});

// POST request to update Genre.
router.post('/genre/:id/update', (req, res, )=>{genre_controller.genre_update_post});

// GET request for one Genre.
router.get('/genre/:id', (req, res, )=>{genre_controller.genre_detail});

// GET request for list of all Genre.
router.get('/genres',(req, res, )=>{ genre_controller.genre_list});

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', (req, res, )=>{book_instance_controller.bookinstance_create_get});

// POST request for creating BookInstance.
router.post('/bookinstance/create', (req, res, )=>{book_instance_controller.bookinstance_create_post});

// GET request to delete BookInstance.
router.get('/bookinstance/:id/delete', (req, res, )=>{book_instance_controller.bookinstance_delete_get});

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', (req, res, )=>{book_instance_controller.bookinstance_delete_post});

// GET request to update BookInstance.
router.get('/bookinstance/:id/update', (req, res, )=>{book_instance_controller.bookinstance_update_get});

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', (req, res, )=>{book_instance_controller.bookinstance_update_post});

// GET request for one BookInstance.
router.get('/bookinstance/:id', (req, res, )=>{book_instance_controller.bookinstance_detail});

// GET request for list of all BookInstance.
router.get('/bookinstances', (req, res, )=>{book_instance_controller.bookinstance_list});

module.exports = router;
