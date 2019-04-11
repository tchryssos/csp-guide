import React from 'react'

import ContentBlock from 'components/ContentBlock'
import Quote from 'components/Quote'
import ListItem from 'components/ListItem'

import CSSRejected from 'static/images/reject-css.jpg'

import './HowDoesCSPWork.scss'

const HowDoesCSPWork = () => (
	<>
		<ContentBlock title="How Does CSP Work?">
			<p>CSP generally works by specifying (“white-listing”) domains that the developer trusts to deliver content. For example, if we have a Google Analytics script that we want to run, we would white-list analytics.google.com in our content security policy.</p>
			<code>
				Content-Security-Policy: script-src &#39;self&#39; https://analytics.google.com
			</code>
			<p>This also works for specifying trusted domains for CSS files, fonts, etc. Anything being loaded from a non-white-listed domain is blocked by the browser.</p>
			<code>
				Content-Security-Policy: style-src &#39;self&#39; https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
			</code>
			<img src={CSSRejected} alt="Error message showing blocked style file" />
		</ContentBlock>
		<ContentBlock title="CSP Directives">
			<p>There are currently 16 allowed directives in a Content Security Policy (via <a href="https://developers.google.com/web/fundamentals/security/csp/">Google</a>):</p>
			<Quote>
				<ul className="directiveList">
					<ListItem title="base-uri">
						restricts the URLs that can appear in a page&#39;s base element.
					</ListItem>
					<ListItem title="child-src">
						lists the URLs for workers and embedded frame contents. For example: child-src https://youtube.com would enable embedding videos from YouTube but not from other origins
					</ListItem>
					<ListItem title="connect-src">
						limits the origins that you can connect to (via XHR, WebSockets, and EventSource).
					</ListItem>
					<ListItem title="font-src">
						specifies the origins that can serve web fonts. Google&#39;s web fonts could be enabled via font-src https://themes.googleusercontent.com.
					</ListItem>
					<ListItem title="form-action">
						lists valid endpoints for submission from &#60;form&#62; tags.
					</ListItem>
					<ListItem title="frame-ancestors">
						specifies the sources that can embed the current page. This directive applies to &#60;frame&#62;, &#60;iframe&#62;, &#60;embed&#62;, and &#60;applet&#62; tags. This directive can&#39;t be used in &#60;meta&#62; tags and applies only to non-HTML resources.
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
						specifies a URL where a browser will send reports when a content security policy is violated. This directive can&#39;t be used in &#60;meta&#62; tags.
					</ListItem>
					<ListItem title="script-src">
						restricts the origins for &#60;script&#62; tags.
					</ListItem>
					<ListItem title="style-src">
						is script-src&#39;s counterpart for stylesheets.
					</ListItem>
					<ListItem title="upgrade-insecure-requests">
						instructs user agents to rewrite URL schemes, changing HTTP to HTTPS. This directive is for websites with large numbers of old URL&#39;s that need to be rewritten.
					</ListItem>
					<ListItem title="worker-src">
						is a CSP Level 3 directive that restricts the URLs that may be loaded as a worker, shared worker, or service worker. As of July 2017, this directive has limited implementations.
					</ListItem>
				</ul>
			</Quote>
			<p>Each of these directives can be set in the Content-Security-Policy header. They all begin “wide open”, and can be made more restrictive. Along with specifying specific white-listed domains, there are also keywords that can be used in each directive. “self” and “none” can be used in every directive (allowing anything from the current origin and disallowing all content respectively).</p>
			<p>However, <a href="https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45542.pdf">research by Google</a> shows that white-list based policies are by-and-large insecure, and maintaining a secure one is unwieldy:</p>
			<Quote>
				<p>For each host within the whitelist the maintainer needs to
					ensure that an attacker is not capable of injecting malicious content, which could be included via a &#60;script&#62; or an &#60;object&#62; tag… JSONP endpoints and AngularJS libraries are two of many ways to achieve [a malicious injection]. If even just one domain exposes such endpoints, the anti-XSS capabilities of CSP are rendered useless.<br />
					…<br />
					While very short whitelists are still quite safe, longer whitelists are much less secure. For example, at the median of 12 entries, we managed to bypass 94.8 % of all policies.</p>
			</Quote>
		</ContentBlock>
		<p>As an alternative, Google recommends the use of a nonce-based CSP centered around the script-src directive:</p>
		<Quote>
			<p>Instead of relying on whitelists, application maintainers should apply a nonce-based protection approach… By using a nonce, scripts can be whitelisted individually. Even if an attacker is capable of finding an XSS, the nonce value is unpredictable, so it is not possible for the attacker to inject a valid script…</p>
		</Quote>
	</>
)

export default HowDoesCSPWork
