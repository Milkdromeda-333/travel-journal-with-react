import React from "react"

export default function Card(props){
    return (
        <div className="card-container flex-col">
            <div className="card flex-row">
            
                <img src={props.imageUrl}
                alt={props.imageAlt}
                className="card--img" 
                />
                <div className="flex-col">
                
                    <div className="card--country-data">
                        <span className="country">{props.title}</span>
                        <a href={props.googleMapsUrl} className="card--google-maps">
                        View on google maps
                        </a>
                    </div>
                    <h2 className="location">{props.location}</h2>
                    <span className="date">{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>
                
            </div>
        </div>
    )
}