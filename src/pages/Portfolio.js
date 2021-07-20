import React, { useState } from 'react'
import MenuItems from '../component/MenuItems'
import Title from "../component/Title"
import Catagories from "../component/Catagories"
import portfolios from "../component/AllProjects"

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function Portfolio() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'Portfolio'} />
            </div>
            <div className="portfolios-data">
                <Catagories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
} 

export default Portfolio
