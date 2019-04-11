import React from 'react'
import PageWrapper from 'components/PageWrapper'
import ChangePages from 'components/ChangePage/ChangePages'
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
		<PageWrapper>
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
			<ChangePages nextPageUrl="/defense-in-depth" prevPageUrl="/" />
		</PageWrapper>
	)
}
