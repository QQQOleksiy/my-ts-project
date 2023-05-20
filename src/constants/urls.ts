const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movie:(page: string): string => `/discover/movie?page=${page}`,
    genres:(): string => '/genre/movie/list',
    searchMovie:(name: string): string => `/search/keyword?query=${name}`,
    movieById: (id: string): string => `/movie/${id}`,
    moviesByGenres: (genre_key: string, page: string): string => `/discover/movie?with_genres=${genre_key}&page=${page}`
}

export {
    baseURL,
    urls
}