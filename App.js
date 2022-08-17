import React from "react"
import Navbar from "./Navbar"
import data from "./data"
import Card from "./Card"

export default function App(){
    // navbar, cards
    const cards = data.map(item => {
            return (
                <Card 
            key={item.title}
            {...item} 
                />
            )
        }
    )
    return (
        <div>
            <Navbar />
            <div className="content">
                {cards}
            </div>
        </div>
    )
}