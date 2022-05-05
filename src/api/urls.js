const ApiUrls = {
    baseURL: 'https://api.thedogapi.com/v1/',
    breeds: '/breeds',
    favourites: '/favourites',
    deleteFavourites: (favouriteId) => `/favourites/${favouriteId}`,
    images: '/images/search'
}

export default ApiUrls;