import React from 'react'

const Loading = ({message}) => {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{message}</div>
            </div>
            <p></p>
        </div>
  )
}

export default Loading