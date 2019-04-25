import React from 'react'

import ContentBlock from 'components/ContentBlock'
import Quote from 'components/Quote'
import ListItem from 'components/ListItem'

const Drawbacks = () => (
	<>
		<ContentBlock headerKey="nonceDrawbacks">
			<p>As we&apos;ve currently defined them, a nonce-based CSP would restrict any scripts created by a trusted script. This is problematic for a script loading a library that might need to inject additional scripts. To remedy this, Google has proposed using the <span className="bold">strict-dynamic</span> keyword in your script-src directive.</p>
			<Quote>
				<p>
					[With strict-dynamic] Dynamically added scripts are allowed to
					execute. In practice, this means that script nodes created by
					document.createElement(’script’) will be allowed by the policy,
					regardless of whether the URL from which they are loaded is in the
					script-src whitelist.
				</p>
				<br />
				<p>...</p><br />
				<p>
					The core observation behind this approach is that scripts added by
					calling createElement() are already trusted by the application – the
					developer has explicitly chosen to load and execute them. On the
					other hand, an attacker who has found a markup-injection bug will not
					be able to directly call createElement() without first being able to
					execute JavaScript; and the attacker cannot inject a malicious script
					and execute JavaScript without knowing the proper nonce defined in
					the policy.
				</p>
			</Quote>
			<p>Even with a nonce-based &quot;strict-dynamic&quot; policy, there are still challenges:</p>
			<Quote>
				<p>
					Nonce-based policies that use ’strict-dynamic’ offer the
					promise of a more secure and simple-to-deploy CSP, but they
					are not a panaceum for XSS. Authors will still need to pay
					attention to both security and compatibility considerations:
				</p>
				<br />
				<p className="italics">Security</p>
				<br />
				<ul>
					<ListItem>
						Injections into the src-attribute of dynamically created scripts:
						With ’strict-dynamic’, if the root cause
						of an XSS bug is the injection of untrusted data into
						a URL passed to the src-attribute of a script created
						via the createElement() API, the bug will become
						exploitable, whereas with a whitelist-based policy, the
						location of the script would be restricted to sources
						allowed in the policy
					</ListItem>
					<ListItem>
						Injections into a nonced &#60;script&#62;: If the injection
						point is inside a &#60;script&#62; trusted by the developer
						with a nonce, an attacker will be able to execute their
						malicious script without restrictions. This, however, is
						still possible with traditional policies.
					</ListItem>
					<ListItem>
						Post-XSS/scriptless attacks: Even if a policy prevents
						an attacker from executing arbitrary scripts in the context of the
						application, other limited, but also damaging attacks might still be
						possible.
					</ListItem>
				</ul>
				<br />
				<p className="italics">Compatibility</p>
				<br />
				<ul>
					<ListItem>
						Parser-inserted scripts: If an application uses APIs
						such as document.write() to dynamically add scripts,
						they will be blocked by ’strict-dynamic’ even if they
						point to a whitelisted resource. Adopters will have to
						refactor such code to use another API such as createElement(), or
						explicitly pass a nonce to the
						&#60;script&#62; element created with document.write().
					</ListItem>
					<ListItem>
						Inline event handlers: ’strict-dynamic’ does not eliminate the
						time-consuming process of removing markup
						incompatible with CSP, such as javascript: URIs
						or inline event handlers. Developers will still need to
						refactor such patterns before adopting CSP.
					</ListItem>
				</ul>
				<br />
				<p>
					Despite these caveats, based on an analysis of hundreds
					of XSS bugs in a Google-internal data set, we expect that a
					large majority of XSS will be mitigated using nonce-based
					policies, and that adopting such policies is significantly easier for
					developers than the traditional approach based on
					whitelists.
				</p>
			</Quote>
			<p> Interestingly, Google <span className="italics">does</span> note that it&apos;s possible to combine a traditional whitelist <span className="italics">with</span> a nonce based approach:</p>
			<Quote>
				<p>
					If two policies are specified for a page, the browser ensures that a
					resource adheres to both policies. Hence, this feature can be used to
					get the benefits of both worlds: one nonce-based policy can be used to
					whitelist individual scripts, while a second whitelist-based policy
					can be used to centrally enforce security decisions.
				</p>
			</Quote>
			<p>These policies combined may yield better results than nonce-based alone (and is leagues better than a whitelist only policy, which has been shown to be ineffective).</p>
		</ContentBlock>
	</>
)

export default Drawbacks
