/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Movie = ({ movie }) => {
    console.log(movie)

    const { show } = movie;
    const displayDetails = () => {

        console.log(show.id)
    }

 
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-50">
                <img src={show?.image?.medium} alt="" className="object-cover object-center w-full rounded-md h-72 dark:dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:dark:text-violet-400">{show.genres}</span>
                    <h2 className="text-xl font-semibold tracking-wide">{show.name}</h2>
                </div>
                <p className="dark:dark:text-gray-100">Language : {show.language}</p>
                <p className="dark:dark:text-gray-100">Day : {show?.schedule.days}</p>
                <p className="dark:dark:text-gray-100">Time : {show?.schedule.time}</p>
                <button onClick={() => displayDetails(show.id)} type="button" className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800 bg-red-200">Summary</button>
            </div>
        </div>
    );
};

export default Movie;