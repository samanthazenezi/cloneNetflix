import React from "react";
import './FeaturedMovie.css';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundgSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="featured-vertical">
                <div className="feature-horizontal">
                    <h1 className="featured-name">{item.original_name}</h1>
                    <div className="featured-info">
                        <h2 className="featured-points">{item.vote_average} pontos</h2>
                        <h2 className="featured-year">{firstDate.getFullYear()}</h2>
                        <h2 className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : '' }</h2>
                    </div>
                    <div className="featured-description">
                        <h2>{item.overview}</h2>
                    </div>
                    <div className="featured-buttons">
                        <button className="button1"><img src="/images/play.svg" />Assistir</button>
                        <button className="button2">+ minha lista</button>
                    </div>
                    <div className="featured-genres">
                        <h2><strong>Gêneros:</strong> {genres.join(', ')}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}