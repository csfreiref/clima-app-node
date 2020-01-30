const axios = require('axios');

const getLugarLatLng = async (address) => {
    const encodedUrl = encodeURI(address);
    // console.log(encodedUrl)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key': '8c712369b5msh7217d36312fac9ep157479jsnb29c93a02435', 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}


