export const texts = {
    noContent: 'Oops!\n no encontramos lugares para',
    searchSomething: 'Por favor!\n Ingresa un término y una ciudad para buscar'
}


export const images = {
    linkedin: '/assets/iconos/linkedin.svg',
    github: '/assets/iconos/github.svg',
    viewed: '/assets/iconos/viewed.png',
    noImage: '/assets/yelp.png',
    logo: '/assets/iconos/logo-original.svg',
    noContent: '/assets/iconos/man-questioning.svg',
    loadingGif: '/assets/iconos/loading.gif',
    loadingSVG: '/assets/iconos/loading.svg',
    flecha: '/assets/iconos/flecha.svg',
    mapsIcon: '/assets/iconos/mapIcon.svg',
    call: '/assets/iconos/call.svg',
    ratingImages: {
        cero: '/assets/web_and_ios/small/2.png',
        one: '/assets/web_and_ios/small/1.png',
        oneHalf: '/assets/web_and_ios/small/1-5.png',
        two: '/assets/web_and_ios/small/2.png',
        twoHalf: '/assets/web_and_ios/small/2-5.png',
        three: '/assets/web_and_ios/small/3.png',
        threeHalf: '/assets/web_and_ios/small/3-5.png',
        four: '/assets/web_and_ios/small/4.png',
        fourHalf: '/assets/web_and_ios/small/4-5.png',
        five: '/assets/web_and_ios/small/5.png',
    }
}

export const convertKm = (distance) => {
    return (distance / 1000).toFixed(2);
}

export const ratingImage = (rating) => {
    const { ratingImages } = images;
    switch (rating) {
        case 1:
            return ratingImages.one;
        case 1.5:
            return ratingImages.oneHalf;
        case 2:
            return ratingImages.two;
        case 2.5:
            return ratingImages.twoHalf;
        case 3:
            return ratingImages.three;
        case 3.5:
            return ratingImages.threeHalf;
        case 4:
            return ratingImages.four;
        case 4.5:
            return ratingImages.fourHalf;
        case 5:
            return ratingImages.five;
        default:
            return ratingImages.cero;;
    }
}

export const convertSchedule = ( schedule ) => {
    if(!schedule){
        return;
    }
    let dias = [...horario()];
    for (const d of dias) {
        for( const s of schedule[0].open){
            if(d.day === s.day){
                d.horario.push({end: s.end, start: s.start})
            }
        }
    }
    return dias;
 
}

const horario = () => {
    return days.map( (d, index) =>  ({name: d, day: index, horario: []}));
}
const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export const convertTime = ( time ) => {

    const timeArray = time.split('');

    return `${timeArray[0]}${timeArray[1]}:${timeArray[2]}${timeArray[3]}`
}

const token = 'Bearer eP-wUV_UqCRe7wlUlnLVEshEY6N0w_LjAmuyNXfFTdLuzq7_dzzt0c5CzFzZAruzCW-dYxD4715L13UJyHR7YK0BvtFmfW0sKv9A_YXW9AXddwtXkcxkOO5IkkMWYHYx';

export const preRequest = {
    url: 'https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/graphql',
        method: 'post',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept-Language': 'en-US',
        }
}
