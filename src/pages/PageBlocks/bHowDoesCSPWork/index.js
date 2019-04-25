import React from 'react'

import { CSP_REPORT } from 'constants/codeStrings'

import ContentBlock from 'components/ContentBlock'
import Quote from 'components/Quote'
import ListItem from 'components/ListItem'
import CodeWord from 'components/CodeWord'

const HowDoesCSPWork = () => (
	<>
		<ContentBlock headerKey="howDoesCSPWork">
			<p>CSP generally works by specifying (“whitelisting”) domains that the developer trusts to deliver content. For example, if we have a Google Analytics script that we want to run, we would whitelist analytics.google.com in our content security policy.</p>
			<code>
				Content-Security-Policy: script-src &apos;self&apos; https://analytics.google.com
			</code>
			<p>This also works for specifying trusted domains for CSS files, fonts, etc. Anything being loaded from a non-whitelisted domain is blocked by the browser.</p>
			<code>
				Content-Security-Policy: style-src &apos;self&apos; https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css
			</code>
			<p>
				Now, trying to load non-whitelisted content will result in that content being prevented from running and a console error:
			</p>
			<code>
				Refused to load the stylesheet &apos;http://virus.css/&apos; because it violates the following Content Security Policy directive: &quot;style-src &apos;self&apos; https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css&quot;.
			</code>
		</ContentBlock>
		<ContentBlock headerKey="reports">
			<p>
				Unfortunately, it can be difficult to get started with CSP. Knowing where all the content in a modern app comes from is complicated. Furthermore, apps with lots of users might not be able to roll out such a massive (and potentially disruptive) feature without lots of testing and data first. That&apos;s where reports and Report-Only mode come in.
			</p>
			<p>
				For developers who just want to <span className="italics">see</span> where all their content is coming from, CSP offers Report-Only mode. Enabling Report-Only mode is as simple as updating the CSP header:
			</p>
			<code>
				Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
			</code>
			<p>
				Note the &quot;report-uri&quot; fetch directive (we&apos;ll get into all the available directives below). This directive allows you to specify a uri to which CSP violation reports will be POSTed as JSON. Each time something in your site would violate the specified CSP, rather than prevent that code from running, CSP will simply send you a report. This can give you some perspective and insight into where your content is coming from before you commit to a restrictive CSP.
			</p>
			<p>
				A report looks like the following:
			</p>
			<code className="formattedCode">
				<pre>{CSP_REPORT}</pre>
			</code>
		</ContentBlock>
		<ContentBlock headerKey="cspDirectives">
			<p>
				There are currently 16 supported fetch directives (and one fallback) in Content Security Policy (via <a href="https://developers.google.com/web/fundamentals/security/csp/">Google</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Mozilla</a>):
			</p>
			<Quote>
				<ul>
					<ListItem title="defualt-src">
						serves as a fallback for the other CSP fetch directives. For each [absent directive], the user agent will look for the default-src directive and will use this value for it.
					</ListItem>
					<ListItem title="base-uri">
						restricts the URLs that can appear in a page&apos;s base element.
					</ListItem>
					<ListItem title="child-src">
						lists the URLs for workers and embedded frame contents. For example: child-src https://youtube.com would enable embedding videos from YouTube but not from other origins
					</ListItem>
					<ListItem title="connect-src">
						limits the origins that you can connect to (via XHR, WebSockets, and EventSource).
					</ListItem>
					<ListItem title="font-src">
						specifies the origins that can serve web fonts. Google&apos;s web fonts could be enabled via font-src https://themes.googleusercontent.com.
					</ListItem>
					<ListItem title="form-action">
						lists valid endpoints for submission from &#60;form&#62; tags.
					</ListItem>
					<ListItem title="frame-ancestors">
						specifies the sources that can embed the current page. This directive applies to &#60;frame&#62;, &#60;iframe&#62;, &#60;embed&#62;, and &#60;applet&#62; tags. This directive can&apos;t be used in &#60;meta&#62; tags and applies only to non-HTML resources.
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
						specifies a URL where a browser will send reports when a content security policy is violated. This directive can&apos;t be used in &#60;meta&#62; tags.
					</ListItem>
					<ListItem title="script-src">
						restricts the origins for &#60;script&#62; tags.
					</ListItem>
					<ListItem title="style-src">
						is script-src&apos;s counterpart for stylesheets.
					</ListItem>
					<ListItem title="upgrade-insecure-requests">
						instructs user agents to rewrite URL schemes, changing HTTP to HTTPS. This directive is for websites with large numbers of old URL&apos;s that need to be rewritten.
					</ListItem>
					<ListItem title="worker-src">
						is a CSP Level 3 directive that restricts the URLs that may be loaded as a worker, shared worker, or service worker. As of July 2017, this directive has limited implementations.
					</ListItem>
				</ul>
			</Quote>
			<p>
				Each of these directives can be set in the Content-Security-Policy header. They all begin “wide open”, and can be made more restrictive by defining allowed sources. A full list of source options follows (via <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#Sources">Mozilla</a>):
			</p>
			<Quote>
				<ul>
					<ListItem title="<host-source>">
						Internet hosts by name or IP address, as well as an optional URL scheme and/or port number. The site&apos;s address may include an optional leading wildcard (the asterisk character, <CodeWord>&apos;*&apos;</CodeWord>), and you may use a wildcard (again, <CodeWord>&apos;*&apos;</CodeWord>) as the port number, indicating that all legal ports are valid for the source.
					</ListItem>
					<ListItem title="<scheme-source>">
						A schema such as &apos;http:&apos; or &apos;https:&apos;. <span className="bold">The colon is required, single quotes shouldn&apos;t be used.</span> You can also specify data schemas (not recommended).
					</ListItem>
					<ListItem title="'self'">
						Refers to the origin from which the protected document is being served, including the same URL scheme and port number. You must include the single quotes. Some browsers specifically exclude <CodeWord>blob</CodeWord> and <CodeWord>filesystem</CodeWord> from source directives. Sites needing to allow these content types can specify them using the Data attribute.
					</ListItem>
				</ul>
			</Quote>
			<p>
				However, <a href="https://storage.googleapis.com/pub-tools-public-publication-data/pdf/45542.pdf">research by Google</a> shows that whitelist based policies are by-and-large insecure, and maintaining a secure one is unwieldy:
			</p>
			<Quote>
				<p>
					For each host within the whitelist the maintainer needs to ensure that an attacker is not capable of injecting malicious content, which could be included via a &#60;script&#62; or an &#60;object&#62; tag… JSONP endpoints and AngularJS libraries are two of many ways to achieve [a malicious injection]. If even just one domain exposes such endpoints, the anti-XSS capabilities of CSP are rendered useless.
				</p>
				<br />
				<p>...</p>
				<br />
				<p>
					While very short whitelists are still quite safe, longer whitelists are much less secure. For example, at the median of 12 entries, we managed to bypass 94.8 % of all policies.
				</p>
			</Quote>
		</ContentBlock>
		<p>
			As an alternative, Google recommends the use of a nonce-based CSP centered around the script-src directive:
		</p>
		<Quote>
			<p>
				Instead of relying on whitelists, application maintainers should apply a nonce-based protection approach… By using a nonce, scripts can be whitelisted individually. Even if an attacker is capable of finding an XSS, the nonce value is unpredictable, so it is not possible for the attacker to inject a valid script…
			</p>
		</Quote>
	</>
)

export default HowDoesCSPWork
