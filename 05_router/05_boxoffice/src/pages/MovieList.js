import { useEffect, useState } from "react";
import { getMovieList } from "../api/MovieAPI";

function MovieList () {

    const [ movieList, setMovieList ] = useState();

    useEffect(
        () => {
            getMovieList()
                .then( data => setMovieList(data));
        },
        []
    );

    console.log(movieList);
    
    return (
        <div className="content-row">
            영화 목록
        </div>
    );
}

export default MovieList;