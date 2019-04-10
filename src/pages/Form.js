import React from 'react'
import PrevPage from 'components/ChangePage/PrevPage'
import './Form.scss'

const onClick = () => {
	const data = document.querySelector('.formInput').value
	const postList = document.querySelector('.commentList')
	const newPost = document.createElement('div')
	newPost.innerHTML = data
	postList.appendChild(newPost)
	document.querySelector('.formInput').value = null
}

export default function () {
	return (
		<div className="formWrapper">
			<h1>My Cool Blog</h1>
			<input
				type="text"
				className="formInput"
				placeholder="Write a comment..."
			/>
			<button
				onClick={onClick}
				className="formSubmitButton"
			>
				Submit
			</button>
			<div className="commentList" />
			<PrevPage prevPageUrl="/" />
		</div>
	)
}
