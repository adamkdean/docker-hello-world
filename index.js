var koa = require('koa'),
    logger = require('koa-logger'),
    port = process.env.PORT || 8000,
    app = koa();

app.use(logger());

app.use(function *(){
    this.body = 'Hello World';
});

app.listen(port, function () {
    console.log('Listening on port %s', port);
});
