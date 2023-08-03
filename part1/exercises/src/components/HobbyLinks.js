import React from 'react';
import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    let HobbyLinks = [
        "https://www.youtube.com/watch?v=_cYsMQnFtLs",
        "https://www.pcgamer.com/rust-review/"
    ];
    
    return (
        <div className={classes.hobbyDiv}>
            <h2 className={classes.hobbyTitle}>HOBBIES</h2>
                <a target="_blank" href={HobbyLinks[0]}>PLAYING DRUMS</a>
                <a target="_blank" href={HobbyLinks[1]}>GAMING</a>
        </div>
    );
}