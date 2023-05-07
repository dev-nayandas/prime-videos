import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div>
            <h1 className='text-blue'>Excusive movies</h1>
        
            <div className='grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    movies.map(movie =><Movie
                    key={movie.show.id}
               
                    movie={movie}
                    ></Movie>)
                }
            </div>
        </div>
    );
};

export default Home;