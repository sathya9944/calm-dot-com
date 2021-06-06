import './index.css';
import {Box, Typography} from "@material-ui/core";
import React from "react";

const Card = (props) => {
    return <div className='body box'>
        <Typography component="h1" variant="h5" style={{margin: "20px"}}>
            <Box fontWeight="fontWeightBold" fontFamily="Monospace">
                Find Your Calm <br/><br/>
                Our goal is to help you improve your health and happiness.
            </Box>
        </Typography>
        <div className='wave -one'/>
        <div className='wave -two'/>
        <div className='wave -three'/>
        <div className="weathercon"><i className='fas fa-sun' style={{color: '#d36326'}}/></div>
        <div className="info">
            <h2 className="location"><Typography component="h1" variant="h5" style={{margin: "20px"}}>
                <Box fontWeight="fontWeightBold" fontFamily="Monospace">
                    HAPPY | SAD
                </Box>
            </Typography></h2>
            <p className="date">
                <Typography variant="h5" style={{margin: "20px", fontSize: "12px"}}>
                    <Box fontWeight="fontWeightBold" fontFamily="Monospace">
                        SUNDAY | JUN 6 | 12:34
                    </Box>
                </Typography></p>
            <h1 className="temp"><Typography variant="h5" style={{margin: "20px"}}>
                <Box fontWeight="fontWeightBold" fontFamily="Monospace">
                    56 | 20
                </Box>
            </Typography></h1>
        </div>
    </div>
}

export default Card;
