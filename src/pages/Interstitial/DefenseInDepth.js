import React from 'react'
import PageWrapper from 'components/PageWrapper'
import ContentBlock from 'components/ContentBlock'
import ChangePages from 'components/ChangePage/ChangePages'

const DefenseInDepth = () => (
	<PageWrapper>
		<ContentBlock title="Just an FYI...">
			<p>
				CSP is known as a “defense-in-depth”, meaning it should be treated as a redundancy rather than a first line of defense. XSS is best protected against with good input sanitization and validation.
			</p>
		</ContentBlock>
		<ChangePages nextPageUrl="/how-does-csp-work" prevPageUrl="/bad-form" />
	</PageWrapper>
)

export default DefenseInDepth
