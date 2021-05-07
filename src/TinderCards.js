import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Ranbir Kapoor",
            url: "https://www.mwallpapers.com/download-image/21558/778x1037",
        },
        {
            name: "Simon Baker",
            url: "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/1/30/w600X390/SIMON.PNG",
        },

    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing >>> " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the Screen");
    };

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {people.map((person) => (
                   <TinderCard 
                   className='swipe' 
                   key={person.name} 
                   preventSwipe={["up","down"]} 
                   onSwipe={(dir) => swiped(dir, person.name) } 
                   onCardLeftScreen={() => outOfFrame(person.name)}>
                       <div style={{backgroundImage : `url(${person.url})`}} className='card'>
                           <h3>{person.name}</h3>

                       </div>
                   </TinderCard>
                ))}

            </div>
        </div>
    )
}

export default TinderCards 