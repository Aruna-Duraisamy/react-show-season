import React from 'react'

const Error = (props) => {
  return (
      <div className='error'>
          <h2>{ props.errorMessage}</h2>
          <i class="massive frown icon"></i>
    </div>
  )
}

export default Error