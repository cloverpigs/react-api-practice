import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetail } from "../api/MovieAPI";

function MovieDetail() {

    const { movieCd } = useParams();

    console.log(movieCd);

    const [ movie, setMovie ] = useState();

    useEffect(
        () => {
           getMovieDetail(movieCd)
            .then( data => setMovie(data));
        },
        []
    );
    console.log(movie);

    return (
        <div className="content-col">
            {movie && 
            <>
                <h1>{ movie.movieNm }({ movie.movieNmEn })</h1>
                <div>러닝 타임 : { movie.showTm }분</div>
                <div>국가 : {movie.nations.map( nation => <span>{ nation.nationNm }</span>)}</div>
                <div>영화사 </div>
               
                <div>
                    { movie.companys.map(company => { 
                        return (
                            <Link to={`/company/${company.companyCd}`}>
                            <div>
                                <span> {company.companyPartNm}</span> &nbsp;
                                <span className="actor">{company.companyNm}</span>
                               
                            </div>
                            </Link>
                        );
                    })}
                </div>
              
                <Link to="/movie">목록으로</Link>
            </>
            }
        </div>
    );
}

export default MovieDetail;