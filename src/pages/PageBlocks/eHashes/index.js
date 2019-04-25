import React from 'react'

import ContentBlock from 'components/ContentBlock'
import { WHAT_TO_HASH } from 'constants/codeStrings'
// import Quote from 'components/Quote'
// import ListItem from 'components/ListItem'

const Hashes = () => (
	<>
		<ContentBlock headerKey="hashes">
			<p>
				In some instances, it may not be feasible to implement nonces. A hash-based CSP is a good alternative, especially if the scripts on your pages are relatively static.
			</p>
			<p>
				A hash-based CSP makes it impossible to inject or maliciously modify javascript by defining hashes in the CSP that match the hashed content of each script tag on your page. Any changes to a script on the page would modify the hash, thereby violating the directive, and a wholly new script wouldn&apos;t have a hash listed in the CSP. Unfortunately, this does mean that a new hash needs to be generated and listed in the CSP each time you want to legitimately change your javascript. In case it wasn&apos;t clear, this also means that you need a unique hash for <span className="italics">every</span> <span className="codeWord">script</span> tag in your app, which differs from a nonce which can be applied to each <span className="codeWord">script</span> tag.
			</p>
			<p>
				The syntax for this CSP should be familiar by now:
			</p>
			<code>
				Content-Security-Policy: script-src &apos;sha256-b8YwELVTVyYCUu1IdE9c91AcwI6OpXW0m9PBRenzEcs=&apos;
			</code>
			<p>
				Please note, the content being hashed here is the inner javascript code from a <span className="codeWord">script</span> tag. The <span className="codeWord">script</span> tag itself should <span className="italics">not</span> be included.
			</p>
			<code className="formattedCode">
				<pre>{WHAT_TO_HASH}</pre>
			</code>
			<p>
				CSP supports the sha256-, sha384-, and sha512- hashing algorythms. The <span className="codeWord">sha*-</span> prefix in your CSP specifies the algorythm you want to use for a given hash.
			</p>
		</ContentBlock>
	</>
)

export default Hashes
