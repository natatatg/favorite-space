import axios from "axios";

let baseUrl = 'https://api.nasa.gov/planetary/apod';
let apiKey = '3Vcrzt2oGAvBaRqOAWzQmzE0Cder0Bijnq21NTBj';

let get = (startDate, endDate) => {
    const config = {
        method : 'GET',
        url: `${baseUrl}?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config);
}

export {get};