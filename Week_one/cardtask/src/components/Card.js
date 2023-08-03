import React from 'react'
import './styles.css'
import { Header } from './Header'
import { Body } from './Body'

export const Card= (props)=>{

    return(
        <div className="cardContainer">
            <Header image={props.user.image} name = {props.user.name}/>
            <Body content= {props.user.bio} website={props.user.website}/>
        </div>
    )
}