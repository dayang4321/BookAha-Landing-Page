import React from 'react'


const roundFlag = (props) => {
    return (
        <img src={require('../../../assets/images/svg/' + props.imgSrc)} style={{marginBottom:"3px"}} alt="" className="mr-2 rounded-circle"/>
    )
}

export default roundFlag