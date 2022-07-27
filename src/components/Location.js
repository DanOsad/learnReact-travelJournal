import React from 'react'

export default function Location(props) {
    // console.log(props)
    return (
        <div className='location'>
            <img src={`images/${props.imageUrl}`} alt={props.title} className='location-img' />
            <div className='location-info-container'>
                <div className='location-bar'>
                    <img src='images/pin.png' alt='pin' className='location-pin' />
                    <span className='location-location'>{props.location}</span>
                    <a href={props.googleMapsUrl} className='location-link'>View on Google Maps</a>
                </div>
                <div className='location-main'>
                    <h1 className='location-title'>{props.title}</h1>
                    <span className="location-dates">{`${props.startDate} - ${props.endDate}`}</span>
                    <p className='location-description'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

// title: "Zurich",
// location: "Switzerland",
// googleMapsUrl: "https://goo.gl/maps/yVaNeJvwUtX4gMLB8",
// startDate: "11 Jul, 2022",
// endDate: "14 Jul, 2022",
// description: "The city of Zurich, a global center for banking and finance, lies at the north end of Lake Zurich in northern Switzerland. The picturesque lanes of the central Altstadt (Old Town), on either side of the Limmat River, reflect its pre-medieval history.",
// imageUrl: "https://unsplash.com/photos/IA9ywYR8ibw"
