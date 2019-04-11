import React from 'react'
import postComment from 'static/js/postComment'
import { dangerousImage } from 'constants/codeStrings'
import './Form.scss'

const Form = () => (
	<>
		<div className="formWrapper">
			<input
				type="text"
				className="formInput"
				placeholder="Write a comment..."
			/>
			<span className="subtext">
				Psst... I&#39;m a hacker. <br />
				Try commenting {dangerousImage}
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

export default Form
