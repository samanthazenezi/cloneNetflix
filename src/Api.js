const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() => {
        return [{
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
        }]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=9230a3d1593a1ebac809e80caf3c756f`)
                break;
                
                default:
                    info = null
                break;
            }
        }

        return info;
    }
}