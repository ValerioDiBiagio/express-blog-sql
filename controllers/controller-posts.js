//importare posts
const posts = require('../data/posts');

// importare db
const mysql = require('../data/db');
const connection = require('../data/db');


// funzioni CRUD
function index(req, res) {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Posts non trovati' });
        res.json(results);
    })
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    // status error
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Post non trovato'
        })
    }
    res.json(post);
}


function store(req, res) {

    //stampare i dati in arrivo
    console.log(req.body);

    // creazione del nuovo id incrementando l'id dell'ultimo elemento
    const newId = posts[posts.length - 1].id + 1;

    // creazione del nuovo post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }

    // aggiungere il nuovo post all'array contenente tutti i post
    posts.push(newPost);

    console.log(posts);

    // impostare lo status corretto
    res.status(201)
    // restituire il nuovo post in json
    res.json(newPost)
}

function update(req, res) {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    // status error
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Post non trovato'
        })
    }

    console.log(post)

    // post modificato
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(post)

    // restituire il post modificato 
    res.json(post);
}

function modify(req, res) {

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    // status error
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Post non trovato'
        })
    }

    // modifichiamo il singolo elemento di un post
    if (req.body.title) {
        post.title = req.body.title;
    }

    if (req.body.content) {
        post.content = req.body.content;
    }

    if (req.body.image) {
        post.image = req.body.image;
    }

    if (req.body.tags) {
        post.tags = req.body.tags;
    }

    console.log(post);

    // restituire la modifica del post
    res.json(post);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);


    // status error
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: 'Not found',
            message: 'Post non trovato'
        })
    }

    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    // cancellazione avvenuta con successso
    res.sendStatus(204);
}

// esportare function
module.exports = { index, show, store, update, modify, destroy };