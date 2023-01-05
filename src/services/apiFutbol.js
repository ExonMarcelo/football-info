import axios from "axios";

const baseUrl = "https://api-football-beta.p.rapidapi.com";

const headersApi = {
    'X-RapidAPI-Key': '463bb24ed5msh21e4ec172d617b2p14ead1jsn34f958b64f37',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
};

const getConfig = (params={}) => {
    return {
        method: 'GET',
        url: baseUrl +'/teams',
        params: params,
        headers: headersApi
    };
}

export const getLeagues = async () => {
    const options = getConfig({league: '281', season: '2022'});
      
    await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}