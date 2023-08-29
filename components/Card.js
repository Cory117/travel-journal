import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card-image" />
            <div className="card-text">
                <div className="card-top">
                    <img src="./images/location-icon.png" />
                    <h4 className="card-location">{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} className="card-map">View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <h4 className="card-dates">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}