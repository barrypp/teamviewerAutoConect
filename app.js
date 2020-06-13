const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

var argv = require('minimist')(process.argv.slice(2));

const app = new Koa()

app.use(bodyParser())
app.use(async ctx => {

  switch (ctx.method) {
    case 'GET':
      let html = `
        <form method="POST" action="/">
          username : <input type="text" name="username" /><br/>
          password : <input type="password" name="password" /><br/>
          <button type="submit">submit</button>
        </form>
      `
      ctx.body = html
      break
    case 'POST':
      // ctx.body = `
      //   <script>
      //     window.close()
      //   </script>
      // `
      ctx.body = 'running teamviewer'

      const { spawn } = require('child_process');
      spawn(argv.teamviewer_path, ['--quality=2', `--id=${ctx.request.body.username}`, `--PasswordB64=${Buffer.from(ctx.request.body.password).toString('base64')}`], { 'detached': true })
      server.close()
      break
    default:
      ctx.body = 'Unexpected!'
  }

});

const server = app.listen(47653, 'localhost')

