import React from "react";


export function Weather() {

    const getWeather = () => {
        try {
            let res = await fetch('http://localhost:10001/api/v1/weather/:city', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            });
            let data = await res.json();

        } catch (err) {
            console.log(err);
        }
    }
}