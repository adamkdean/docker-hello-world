var koa = require('koa'),
    logger = require('koa-logger'),
    funkyname = require('funkyname.js')
    port = process.env.PORT || 8000,
    name = funkyname.getFunkyName(),
    app = koa()

app.use(logger());

app.use(function *(){
    this.body = 'This instance is called ' + name;
});

app.listen(port, function () {
    console.log('Listening on port %s', port);
});
