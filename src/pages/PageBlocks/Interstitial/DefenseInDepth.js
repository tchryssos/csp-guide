import React from 'react'
import ContentBlock from 'components/ContentBlock'

const DefenseInDepth = () => (
	<ContentBlock title="Just an FYI...">
		<p>
			CSP is known as a “defense-in-depth”, meaning it should be treated as a redundancy rather than a first line of defense. XSS is best protected against with good input sanitization and validation.
		</p>
	</ContentBlock>
)

export default DefenseInDepth
