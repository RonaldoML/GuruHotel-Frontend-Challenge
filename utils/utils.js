export const texts = {
    noContent: 'Oops!\n no encontramos lugares para',
    searchSomething: 'Por favor!\n Ingresa un término y una ciudad para buscar'
}

export const images = {
    linkedin: '/linkedin.svg',
    github: '/github.svg',
    viewed: '/viewed.png',
    noImage: '/yelp.png',
    logo: '/logo-original.svg',
    noContent: '/man-questioning.svg',
    loadingGif: '/loading.gif',
    loadingSVG: '/loading.svg',
    flecha: '/flecha.svg',
    mapsIcon: '/mapIcon.svg',
    ratingImages: {
        cero: '/web_and_ios/small/2.png',
        one: '/web_and_ios/small/1.png',
        oneHalf: '/web_and_ios/small/1-5.png',
        two: '/web_and_ios/small/2.png',
        twoHalf: '/web_and_ios/small/2-5.png',
        three: '/web_and_ios/small/3.png',
        threeHalf: '/web_and_ios/small/3-5.png',
        four: '/web_and_ios/small/4.png',
        fourHalf: '/web_and_ios/small/4-5.png',
        five: '/web_and_ios/small/5.png',
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