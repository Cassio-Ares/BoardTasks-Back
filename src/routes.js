/**
 * arquivo onde são configurados end-point (rotas)
 * nos tiramos isso do index.js e trazemos para cá
 */

function routes(app){
    app.use('/users', require('./routes/users.js'));
    return;
}

module.exports = routes;