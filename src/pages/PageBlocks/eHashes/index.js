import React from 'react'

import ContentBlock from 'components/ContentBlock'
import CodeWord from 'components/CodeWord'
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
				A hash-based CSP makes it impossible to inject or maliciously modify javascript by defining hashes in the CSP that match the hashed content of each <CodeWord>script</CodeWord> tag on your page. Any changes to a script on the page would modify the hash, thereby violating the directive, and a wholly new script wouldn&apos;t have a hash listed in the CSP. Unfortunately, this does mean that a new hash needs to be generated and listed in the CSP each time you want to legitimately change your javascript. In case it wasn&apos;t clear, this also means that you need a unique hash for <span className="italics">every</span> <CodeWord>script</CodeWord> tag in your app, which differs from a nonce which can be applied to each <CodeWord>script</CodeWord> tag. For larger apps, this can lead to a pretty hefty CSP.
			</p>
			<p>
				The syntax for this CSP should be familiar by now:
			</p>
			<code>
				Content-Security-Policy: script-src &apos;sha256-KZtF5CLbZ2RdmSh2eqMwZz+x3RZfAast9DTH6xSsIpY=&apos;
			</code>
			<p>
				Please note, the content being hashed here is the inner javascript code (including whitespace) from a <CodeWord>script</CodeWord> tag. The <CodeWord>script</CodeWord> tag itself should <span className="italics">not</span> be included.
			</p>
			<code className="formattedCode">
				<pre>{WHAT_TO_HASH}</pre>
			</code>
			<p>
				CSP supports the sha256-, sha384-, and sha512- hashing algorythms. The <CodeWord>sha*-</CodeWord> prefix in your CSP specifies the algorythm you want to use for a given hash. In the above example, I&apos;ve specified the sha256- algorythm.
			</p>
			<p>
				There&apos;s no special tool you need to generate the hashes. Googling &quot;script hasher&quot; will return a myriad of tools you can use for this hashing. Google also notes that you can enable the hash-based CSP (with a random, dummy hash) and then refresh your page. The errors in your console will give you the hashes you need for each script.
			</p>
		</ContentBlock>
	</>
)

export default Hashes
