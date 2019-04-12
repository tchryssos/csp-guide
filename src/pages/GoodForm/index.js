import React from 'react'
import PageWrapper from 'components/PageWrapper'
import Blog from 'components/Blog'
import ChangePage from 'components/ChangePage'

const GoodForm = () => (
	<PageWrapper>
		<ChangePage prevPageUrl="/" title="Back" />
		<h1>My Safe Blog</h1>
		<Blog />
		<p>
			On this page, the CSP header is enabled. If you try to follow the hacker&apos;s advice, you&apos;ll see in the console that the javascript execution was blocked for not adhering to the CSP.
		</p>
		<p>
			Because the nonces are regenerated with each GET request, it&apos;s impossible for a malicious user to apply the proper nonce their script ahead of time. By the time the &quot;comment&quot; is posted and returned, the nonce has changed.
		</p>
	</PageWrapper>
)

export default GoodForm
