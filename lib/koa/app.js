const Koa = require('koa');

const fs = require('fs');

const path = require('path');

const serve = require('koa-static');

const app = new Koa();

// static path

app.use(serve(path.join(__dirname, 'public')));

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response

app.use(async ctx => {
	ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('index.html');
});

// listen port

app.listen(3000, err => {
    if (err) {
        console.error(err);
    } else {
        console.info("==> Listening on port 3000. \n==> Open up http://localhost:3000/ in your browser.");
    }
});
