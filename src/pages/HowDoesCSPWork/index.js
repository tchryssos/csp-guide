import React from 'react'

import PageWrapper from 'components/PageWrapper'
import ChangePages from 'components/ChangePage/ChangePages'
import ContentBlock from 'components/ContentBlock'
import Quote from 'components/Quote'
import ListItem from 'components/ListItem'

import CSSRejected from 'static/images/reject-css.jpg'

import './HowDoesCSPWork.scss'

const HowDoesCSPWork = () => (
	<PageWrapper>
		<ContentBlock title="How Does CSP Work?">
			<p>
				CSP generally works by specifying (“white-listing”) domains that the developer trusts to deliver content. For example, if we have a Google Analytics script that we want to run, we would white-list analytics.google.com in our content security policy.
			</p>
			<code>
				Content-Security-Policy: script-src 'self' https://analytics.google.com
			</code>
			<p>
				This also works for specifying trusted domains for CSS files, fonts, etc. Anything being loaded from a non-white-listed domain is blocked by the browser.
			</p>
			<code>
				Content-Security-Policy: style-src 'self' https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
			</code>
			<img src={CSSRejected} alt="Error message showing blocked style file" />
		</ContentBlock>
		<ContentBlock title="CSP Directives">
			<p>
				There are currently 16 allowed directives in a Content Security Policy (via <a href="https://developers.google.com/web/fundamentals/security/csp/">Google</a>):
			</p>
			<Quote>
				<ul className="directiveList">
					<ListItem title="base-uri">
						restricts the URLs that can appear in a page's base element.
					</ListItem>
					<ListItem title="child-src">
						lists the URLs for workers and embedded frame contents. For example: child-src https://youtube.com would enable embedding videos from YouTube but not from other origins
					</ListItem>
					<ListItem title="connect-src">
						limits the origins that you can connect to (via XHR, WebSockets, and EventSource).
					</ListItem>
					<ListItem title="font-src">
						specifies the origins that can serve web fonts. Google's web fonts could be enabled via font-src https://themes.googleusercontent.com.
					</ListItem>
					<ListItem title="form-action">
						lists valid endpoints for submission from &#60;form&#62; tags.
					</ListItem>
					<ListItem title="frame-ancestors">
						specifies the sources that can embed the current page. This directive applies to &#60;frame&#62;, &#60;iframe&#62;, &#60;embed&#62;, and &#60;applet&#62; tags. This directive can't be used in &#60;meta&#62; tags and applies only to non-HTML resources.
					</ListItem>
					<ListItem title="frame-src">
						was deprecated in level 2, but is restored in level 3. If not present it still falls back to child-src as before.
					</ListItem>
					<ListItem title="img-src">
						defines the origins from which images can be loaded.
					</ListItem>
					<ListItem title="media-src">
						restricts the origins allowed to deliver video and audio.
					</ListItem>
					<ListItem title="object-src">
						allows control over Flash and other plugins.
					</ListItem>
					<ListItem title="plugin-types">
						limits the kinds of plugins a page may invoke
					</ListItem>
					<ListItem title="report-uri">
						specifies a URL where a browser will send reports when a content security policy is violated. This directive can't be used in &#60;meta&#62; tags.
					</ListItem>
					<ListItem title="script-src">
						restricts the origins for &#60;script&#62; tags.
					</ListItem>
					<ListItem title="style-src">
						is script-src's counterpart for stylesheets.
					</ListItem>
					<ListItem title="upgrade-insecure-requests">
						instructs user agents to rewrite URL schemes, changing HTTP to HTTPS. This directive is for websites with large numbers of old URL's that need to be rewritten.
					</ListItem>
					<ListItem title="worker-src">
						is a CSP Level 3 directive that restricts the URLs that may be loaded as a worker, shared worker, or service worker. As of July 2017, this directive has limited implementations.
					</ListItem>
				</ul>
			</Quote>
		</ContentBlock>
		<ChangePages prevPageUrl="/defense-in-depth" nextPageUrl="/" />
	</PageWrapper>
)

export default HowDoesCSPWork
