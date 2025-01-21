import express from 'express';

const app = express();

// gives syntax highlighting for strings containing html. For example, html`<p>hello, world!</p>`
const html = String.raw;

app.get('/', (req, res) => {
  res.send(html`
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
</head>

<body>
  <!--
  This script is all that's necessary to get htmx working on this page! Note
  that you'll need to include this script on every page that uses htmx.
  -->
  <script
    src="https://unpkg.com/htmx.org@1.9.3"
    crossorigin="anonymous"
  ></script>
  
  Hello world
</body>

</html>
`);
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
