import React from 'react'

export default function TodosDoneCounter() {
    return (
        <div>
               To-dos Done: {window.localStorage.getItem('todosDoneCounter')}
            </div>
    )}

