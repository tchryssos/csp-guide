import React from 'react'

import {
	NODE_STRING,
	FASTLY_STRING,
	TEMPLATING_STRING,
	TEMPLATE_SERVER_STRING,
	FIND_AND_REPLACE_STRING,
	NONCE_GENERATION_AND_B64,
} from 'constants/codeStrings'

import ContentBlock from 'components/ContentBlock'
import Quote from 'components/Quote'
import CodeWord from 'components/CodeWord'

import './Nonces.scss'

const generateNonce = () => {
	// Don't use this to make a real nonce
	const nonce = window.crypto.getRandomValues(new Uint32Array(1))[0]
	const nonceTarget = document.querySelector('.nonceTarget')
	if (nonceTarget.firstChild) {
		nonceTarget.removeChild(nonceTarget.firstChild)
	}
	const nonceDiv = document.createElement('div')
	nonceDiv.innerText = window.btoa(nonce)
	nonceTarget.appendChild(nonceDiv)
}

const Nonces = () => (
	<>
		<ContentBlock headerKey="whatsNonce">
			<p><a href="https://en.wikipedia.org/wiki/Cryptographic_nonce">Wikipedia</a> defines a (cryptographic) nonce as:</p>
			<Quote>
				<p>... an arbitrary number used only once in a cryptographic communication… To ensure that a nonce is used only once, it should be time-variant (including a suitably fine-grained timestamp in its value), or generated with enough random bits to ensure a probabilistically insignificant chance of repeating a previously generated value.</p>
			</Quote>
			<div className="nonceButtonWrapper">
				<button
					className="nonceButton"
					onClick={generateNonce}
				>
					Generate Example Nonce
				</button>
				<div className="nonceTarget" />
			</div>
			<p>While nonces themselves are generally numbers, for CSP they should be base64 encoded. The above example uses the following code to generate the nonce and then convert it to base64:</p>
			<code className="formattedCode">
				<pre>{NONCE_GENERATION_AND_B64}</pre>
			</code>
			<p>
				For more information, please read about <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto"><CodeWord>Window.crypto</CodeWord></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding"><CodeWord>btoa()</CodeWord></a>.
			</p>
		</ContentBlock>
		<ContentBlock headerKey="usingNonces">
			<p>Google’s recommendation is to use nonces with the script-src directive, which they identified as the “primary reason for the insecurity of policies.” This is fairly straightforward to implement on the header side:</p>
			<code>
				Content-Security-Policy: script-src ‘nonce-&#123;nonce&#125;’.
			</code>
			<p>The nonce itself should be generated server-side, but can also be generated by a CDN that allows for custom headers. Please note that the below examples might not be crypographically sound; always do your own research.</p>
			<p>Node.js example</p>
			<code className="formattedCode">
				<pre>{NODE_STRING}</pre>
			</code>
			<p>The above principle should hold true for any server-side code: on each request, generate a new nonce and pass that to your header.</p>
			<p>CDN example (Fastly VCL)</p>
			<code className="formattedCode">
				<pre>{FASTLY_STRING}</pre>
			</code>
			<p>If you&apos;re using Cloudfront, see <a href="https://aws.amazon.com/blogs/networking-and-content-delivery/adding-http-security-headers-using-lambdaedge-and-amazon-cloudfront/">this link</a> for instructions.</p>
			<p>Now, if we try to execute a script that doesn&apos;t include a nonce attribute matching the nonce in the header, we&apos;ll see an error message.</p>
			<code>
				Refused to execute inline event handler because it violates the following Content Security Policy directive: &quot;script-src &apos;nonce-&#123;your_nonce&#125;&apos;&quot;. Either the &apos;unsafe-inline&apos; keyword, a hash (&apos;sha256-...&apos;), or a nonce (&apos;nonce-...&apos;) is required to enable inline execution.
			</code>
			<p>Applying the nonce to each script tag in your code is more challenging, and the implementation depends on the framework of your project.</p>
			<p>The simplest solution is to use a templating engine (<a href="https://ejs.co/">EJS</a>, <a href="https://handlebarsjs.com/">Handlebars</a>, <a href="http://jade-lang.com/">Jade</a>, etc), which allows you to to do something like:</p>
			<code>
				{TEMPLATING_STRING}
			</code>
			<p>Now, when serving the page, you can pass a variable &quot;nonce&quot; that will be interpolated into your interpolation expression, and all of your script tags including that expression will have the nonce passed to them. The below example is simple, but should get the concept across.</p>
			<code className="formattedCode">
				<pre>{TEMPLATE_SERVER_STRING}</pre>
			</code>
			<p>This same approach can be applied to a framework like React, though there are a few more steps involved. See <a href="https://stackoverflow.com/questions/49639625/how-do-i-integrate-the-value-of-webpack-nonce-with-my-content-security-poli/49890126#49890126">this Stack Overflow post</a> for an example on how to use templating with React.</p>
			<p>An alternative is to do a &quot;find and replace&quot; on script tags as your server serves your html files.</p>
			<code className="formattedCode">
				<pre>{FIND_AND_REPLACE_STRING}</pre>
			</code>
			<p>
				<a href="/good-form">Click here</a> to try an XSS attack with a nonce-based CSP enabled!
			</p>
			<p>As you can see, while applying nonces can be tricky (especially when trying to put them in an app retroactively), they&apos;re extremely secure. That being said, it&apos;s important to recognize their drawbacks.</p>
		</ContentBlock>
	</>
)

export default Nonces
