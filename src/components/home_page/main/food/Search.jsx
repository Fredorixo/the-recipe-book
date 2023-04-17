import React from 'react'
import searchIcon from '../../../../images/search.png'
import '../../../../styles/home_page/main/food/Search.css'

export default function Search(props) {
    return (
        <div className="search">
            <img className='search--img' src={searchIcon} alt="Search Icon" />
            <input
                type="text"
                placeholder='Your item'
                className='search--input'
                onKeyDown={props.handleKeyDown}
            />
        </div>
    )
}