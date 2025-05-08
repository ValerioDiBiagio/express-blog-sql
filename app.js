// express
const express = require('express');
const app = express();

// middleware
const notFound = require('./middlewares/middleware404');
const errorHandler = require('./middlewares/middleware500');

// registrazione body-parser
app.use(express.json());

// router
const router = require('./routers/router-posts');

app.use('/posts', router);

// porta
const port = 4000;


app.listen(port, () => {
    console.log('Sono un server sulla porta ' + port);
})

// pagina iniziale
app.get('/', (req, res) => {
    res.send('Sono nella hompage');
})

// richiamare funzioni middleware
app.use(errorHandler);
app.use(notFound);