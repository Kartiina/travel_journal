import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            <Header />
            {cards}
        </div>
    )
}