/**
 * arquivo onde são configurados end-point (rotas)
 * nos tiramos isso do index.js e trazemos para cá
 */


function routes(app) {
    app.use('/usuario', require('./routes/usuario.js'));
    app.use('/tarefas', require('./routes/tarefas.js'));
    return;
}

module.exports = routes;