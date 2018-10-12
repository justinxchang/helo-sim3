import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {} from '../../ducks/reducer'

// no state

// no methods


function Nav (props) {
    // console.log(this.props.location.pathname)
    return (
        <div>
            <Link to="/"><button>Home</button></Link> 
            <Link to="/new"><button>New Post</button></Link> 
            <Link to="/auth"><button>Logout</button></Link> 
        </div>
    )
}

function mapStateToProps(state){
    const {username, profile_picture} = state
    
    return (
        username: username,
        profile_picture: profile_picture    
    )
}


export default connect(mapStateToProps)(Nav)