import React, { useState } from 'react'

const ChatFooter = ({ socket }) => {
    const [message, setMessage] = useState("")
    // const handleTyping = e => {
    //     if (e.key === "Enter") {
    //         socket.emit("typing", "")
    //     } else {
    //         console.log(message)
    //         socket.emit("typing", `${localStorage.getItem("userName")} is typing`)
    //     }
        
    // }

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message.trim() && localStorage.getItem("userName")) {
            socket.emit("message",
                {
                    text: message,
                    name: localStorage.getItem("userName"),
                    id: `${socket.id}${Math.random()}`,
                    socketID: socket.id
                }
            )
        }
        socket.emit("typing", "")
        setMessage("")
    }

    const customHandler = val => {
        if (val.length === 0) {
            socket.emit("typing", "")
        } else {
            socket.emit("typing", `${localStorage.getItem("userName")} is typing`)
        }
        setMessage(val)
    }

    return (
        <div className='chat__footer'>
            <form className='form' onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder='Write message'
                    className='message'
                    value={message}
                    onChange={e => customHandler(e.target.value)}
                    // onKeyDown={e => handleTyping(e)}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    )
}

export default ChatFooter