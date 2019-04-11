const addComment = () => {
	const data = document.querySelector('.formInput').value
	const postList = document.querySelector('.commentList')
	const newPost = document.createElement('div')
	newPost.innerHTML = data
	postList.appendChild(newPost)
	document.querySelector('.formInput').value = null
}

export default addComment
