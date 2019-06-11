import React from 'react'
import { connect } from 'react-redux'


const Button = ({buttonTitle, buttonLink}) => {
    return (
        <div>
            <a href={buttonLink}>{buttonTitle}</a>
        </div>
    )
}

const mapStateToProps = state => ({
    buttonTitle: 'Download',
    buttonLink: '#',
})

export default connect(mapStateToProps)(Button)
