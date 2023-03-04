const baseUrl = "https://api-football-beta.p.rapidapi.com";

const headersApi = {
    'X-RapidAPI-Key': '463bb24ed5msh21e4ec172d617b2p14ead1jsn34f958b64f37',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
};

const config = {
    method: 'GET',
    headers: headersApi
};

export const searchTeams = async ({team = 'barcelona'}) => {
    try{
        const url = `${baseUrl}/teams?search=${team}`;
        const resp  = await fetch(url, config)
        const data = await resp.json();
        const teamsMapped = data.response.map(({team, venue})=>{
            return{
                team,
                stadium: venue
            }
        })
        return teamsMapped;
    }
    catch(e){
        console.log("Error api")
        throw new Error('Ocurrió un error')
    }
}