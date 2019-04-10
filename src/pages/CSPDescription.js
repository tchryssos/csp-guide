import React from 'react'
import ContentBlock from 'components/ContentBlock'
import NextPage from 'components/ChangePage/NextPage'
import Quote from 'components/Quote'

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
				<span className="cspHiLite">Content-Security-Policy: script-src &apos;nonce-YcXeaCXrNaL657uehvHXnw==&apos;</span><br />
				Content-Type: text/html; charset=utf-8<br />
				Content-Length: 859<br />
				ETag: W/&quot;35b-n9VxAAoUcqWUou8G0zmPapY/fGw&quot;<br />
				Date: Wed, 10 Apr 2019 18:06:56 GMT<br />
				Connection: keep-alive<br />
			</code>
		</ContentBlock>
		<ContentBlock title="Why is this important?">
			<p>
				CSP is used as a defense against Cross-Site Scripting, or XSS attacks. The <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">Open Web Application Security Project defines an XSS attack as</a>:
			</p>
			<Quote>
				... a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.
			</Quote>
		</ContentBlock>
		<NextPage nextPageUrl="/bad-form" />
	</div>
)

export default CSPDescription
