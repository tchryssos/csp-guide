import React from 'react'
import postComment from 'static/js/postComment'
import { DANGEROUS_IMAGE } from 'constants/codeStrings'

import './Blog.scss'

const Blog = () => (
	<>
		<div className="fakeBlogPost">
			<p>
				Posted by Troy @ 4:20 on December 25th
			</p>
			<br />
			<p>
				Marceline (full title: Marceline the Vampire Queen) is one of the main
				characters in Adventure Time. Marceline is a fun-loving 1,000-year-old
				vampire queen. Unlike a traditional vampire, Marceline does not need to
				drink blood to survive; rather, she eats the color red. Marceline is
				also an avid musician who plays an electric bass that she made from her
				family&apos;s heirloom battle-axe.
			</p>
		</div>
		<div className="formWrapper">
			<input
				type="text"
				className="formInput"
				placeholder="Write a comment..."
			/>
			<span className="subtext">
				Psst... I&apos;m a hacker. <br />
				Try commenting {DANGEROUS_IMAGE} <br />
				and watch your console...
			</span>
			<button
				onClick={postComment}
				className="formSubmitButton"
			>
				Submit
			</button>
		</div>
		<div className="commentList" />
	</>
)

export default Blog
