import React from 'react'
import Post from './post'

export default function newpost() {
  return (
    <div>
     <input placeholder='Title'/>
    <div>
    <input placeholder='Content'/>
    <div>
        <button> Create Post </button>
        <div> 
<Post id = {1} />
        </div>
    </div>
    </div>
    </div>

  )
}
