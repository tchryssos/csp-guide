import React from 'react'
import PropTypes from 'prop-types'
import './CodeWord.scss'

const CodeWord = (props) => {
  const { children } = props
  return (
    <span className='codeWord'>{children}</span>
  )
}

CodeWord.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CodeWord
