import React from 'react'
import PageWrapper from 'components/PageWrapper'
import Blog from 'components/Blog'
import ChangePage from 'components/ChangePage'

const BadForm = () => (
	<PageWrapper>
		<ChangePage prevPageUrl="/" title="Back" />
		<h1>My Unsafe Blog :(</h1>
		<Blog />
		<p>
			The CSP header is disabled on this page. Follow the hacker&apos;s instructions and check out the console after commenting.
		</p>
		<p>
			You&apos;ll see that a request has been made to Google (blocked by CORB). This is because the &quot;onerror&quot; function fires when the image tag can&apos;t fetch an image. A malicious user could make that javascript do anything, including bounce user cookies to their own server.
		</p>
		<p>
			On a website with persistent data (like a real blog with real comments), each user viewing the comments section would be exposed to that javascript. Yikes! This is just one basic example of an XSS attack, but you can <a href="https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet">click here</a> to read about other, more sophisticated attacks.
		</p>
	</PageWrapper>
)

export default BadForm
