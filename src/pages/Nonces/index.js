import React from 'react'

import PageWrapper from 'components/PageWrapper'
import ChangePages from 'components/ChangePage/ChangePages'
import ContentBlock from 'components/ContentBlock'
import Quote from 'components/Quote'

import './Nonces.scss'

const generateNonce = () => {
	// Don't use this to make a real nonce
	const nonce = btoa(window.crypto.getRandomValues(new Uint32Array(1))[0])
	const nonceTarget = document.querySelector('.nonceGenTarget')
	if (nonceTarget.firstChild) {
		nonceTarget.removeChild(nonceTarget.firstChild)
	}
	const nonceDiv = document.createElement('div')
	nonceDiv.innerText = nonce
	nonceTarget.appendChild(nonceDiv)
}

const Nonces = () => (
	<PageWrapper>
		<ContentBlock title="What's a nonce?">
			<p><a href="https://en.wikipedia.org/wiki/Cryptographic_nonce">Wikipedia</a> defines a (cryptographic) nonce as:</p>
			<Quote>
				<p>... an arbitrary number used only once in a cryptographic communication… To ensure that a nonce is used only once, it should be time-variant (including a suitably fine-grained timestamp in its value), or generated with enough random bits to ensure a probabilistically insignificant chance of repeating a previously generated value.</p>
			</Quote>
			<div className="nonceGenTarget" onClick={generateNonce} />
		</ContentBlock>
		<ChangePages prevPageUrl="/how-does-csp-work" nextPageUrl="/" />
	</PageWrapper>
)

export default Nonces
