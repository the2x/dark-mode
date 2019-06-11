import React from 'react'
import data from '../../data/data'

const link = data.menu;

const Item = ({}) => {
    return (
        <div>
            <a href={link[0].url}>{link[0].title}</a>
        </div>
    )
}

// orhidea, univers, hvoya

export default Item
