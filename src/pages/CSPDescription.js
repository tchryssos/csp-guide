import React from 'react'
import ContentBlock from 'components/ContentBlock'
import NextPage from 'components/ChangePage/NextPage'

import './CSPDescription.scss'

const CSPDescription = () => (
	<div className="cspDescriptionWrapper">
		<ContentBlock title="What is a Content Security Policy?">
			<p>
				A Content Security Policy is an HTTP response header (e.g. Content-Type) that tells the browser what content should be trusted. Normally, the browser will run any code “returned from the server”, but a CSP restricts code execution to trusted sources.
			</p>
			<code className="headerCode">
				HTTP/1.1 200 OK<br />
				X-Powered-By: Express<br />
				Content-Security-Policy: script-src &apos;nonce-YcXeaCXrNaL657uehvHXnw==&apos;<br />
				Content-Type: text/html; charset=utf-8<br />
				Content-Length: 859<br />
				ETag: W/&quot;35b-n9VxAAoUcqWUou8G0zmPapY/fGw&quot;<br />
				Date: Wed, 10 Apr 2019 18:06:56 GMT<br />
				Connection: keep-alive<br />
			</code>
		</ContentBlock>
		<ContentBlock title="Why is this important?">
			<p>
				CSP is used as a defense against Cross-Site Scripting, or XSS attacks.
			</p>
		</ContentBlock>
		<NextPage nextPageUrl="/" />
	</div>
)

export default CSPDescription
