import React from 'react'
import ContentBlock from 'components/ContentBlock'
import Quote from 'components/Quote'

import './CSPDescription.scss'

const CSPDescription = () => (
	<>
		<ContentBlock headerKey="whatIsCSP">
			<p>
				Content Security Policy is an HTTP response header (e.g. Content-Type) that tells the browser what content should be trusted. Normally, the browser will run any code “returned from the server”, but a CSP restricts code execution to trusted sources.
			</p>
			<code>
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
		<ContentBlock headerKey="whyCSP">
			<p>
				CSP is primarily used as a defense against Cross-Site Scripting, or XSS attacks. The <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)">Open Web Application Security Project defines an XSS attack as</a>:
			</p>
			<Quote>
				... a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user. Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.
			</Quote>
			<p>
				If a malicious user is able to inject their own javascript into your site, they&apos;ll be able to steal user session data from legitimate users, effectively compromising that user&apos;s private data.
			</p>
			<p>
				Be aware: CSP is known as a “defense-in-depth”, meaning it should be treated as a redundancy rather than a first line of defense. XSS is best protected against with good input sanitization and validation.
			</p>
			<p>
				Besides XSS defense, there are other uses for CSP as well. Imagine that a 3rd party plugin is including a bunch of junk scripts with their useful ones. Maybe these other scripts are slowing your app down on load, or maybe they&apos;re a nuisance to users. With Content Security Policy, you&apos;d be able to tell the browser to keep the parts of that plugin you want and forgo running anything you don&apos;t.
			</p>
			<p><a href="/bad-form">Click here</a> to try your own XSS attack!</p>
		</ContentBlock>
	</>
)

export default CSPDescription
