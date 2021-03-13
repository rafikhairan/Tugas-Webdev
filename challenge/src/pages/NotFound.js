import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function NotFound(){
    return(
        <div>
            <h1>404 Not Found</h1>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default NotFound
