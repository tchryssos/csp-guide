// The following code is formatted very strangely for display purposes

export const NODE_STRING = (
	// eslint-disable-next-line
`app.get('/*', (req, res, next) => {
  // Set nonce
  const nonce = crypto.randomBytes(16).toString('base64')
  res.setHeader(
    'Content-Security-Policy',
    \`script-src 'nonce-\${nonce}' 'strict-dynamic' https:\`
  )
})`
)

export const FASTLY_STRING = (
	// eslint-disable-next-line
`declare local var.nonce STRING;
set var.nonce = randomstr(16, "abcdefghijklmnopqr...");
set resp.http.Content-Security-Policy = "script-src 'nonce-" var.nonce "'";`
)

export const TEMPLATING_STRING = (
	'<script nonce="<%= nonce %>" type="module" src="/main.js"></script>'
)

export const TEMPLATE_SERVER_STRING = (
	// eslint-disable-next-line
`let nonce

const setCSP = (req, res, next) => {
  nonce = crypto.randomBytes(16).toString('base64');
  res.setHeader(
    'Content-Security-Policy',
    \`script-src 'nonce-\${nonce}'\`
  )
  next()
}

...

app.use(setCSP)

...

app.get('/', (req, res) => {
  res.render('pages/index', {
    nonce,
  });
});`
)

export const FIND_AND_REPLACE_STRING = (
	// eslint-disable-next-line
`app.get('/*', (req, res, next) => {
  // Set nonce
  const nonce = crypto.randomBytes(16).toString('base64');
  res.setHeader(
    'Content-Security-Policy',
    \`script-src 'nonce-\${nonce}' 'strict-dynamic' https:\`
  )

  // Handle navigation
  const reqPath = req.path === '/' ? 'index.html' : req.path
  if (reqPath.includes('.html')) {
    const reqFilePath = path.resolve(__dirname, 'www', reqPath)
    const html = fs
      .readFileSync(reqFilePath, 'utf8')
      .replace('<script ', \`<script nonce="\${nonce}" \`)
    res.send(html)
  } else {
    app.use(express.static(__dirname + '/www'));
    next()
  }
})`
)

export const DANGEROUS_IMAGE = (
	// eslint-disable-next-line quotes
	`<img src='x' onerror='fetch("http://www.google.com")'>`
)
