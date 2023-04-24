import { Link } from "react-router-dom";


function MovieItem( { movie } ){


    
    return (
        <Link to={`/movie/${movie.movieCd}`}>
        <div className="item">
            <h2 className="newItem">{movie.rankOldAndNew=='NEW' ?  movie.rankOldAndNew : '' }</h2>
            <h3>순위 : {movie.rank}</h3>
            <h3>이름 : {movie.movieNm}</h3>
            <h3>개봉일 : {movie.openDt} </h3>
            <h3>누적관계수 : {movie.audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명 </h3>
        </div>
        </Link>
    );
}

export default MovieItem;