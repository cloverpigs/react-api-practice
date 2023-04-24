import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getcompanyDetail } from "../api/MovieAPI";
import { Link } from "react-router-dom"; 

function MovieCompanyDetail (){

    const companyCd = useParams();

    console.log(companyCd);

    const [ company, setCompany ] = useState();

    useEffect(
        () => {
            getcompanyDetail(companyCd)
            .then( data => setCompany(data));
        },
        []
    );
    console.log(company);
    
    return (
            <div className="content-col">
            { company && 
            <>
                <h1>{ company.companyNm }</h1>
                
                <h2> 필모그래피 </h2>
               
                <div>
                    { company.filmos.map((movie, index) => { 
                        return (
                            
                            <div>
                                <span>{index+1}. {movie.movieNm}</span> &nbsp;
                                <span>{movie.companyParNm}</span>
                               
                            </div>
                          
                        );
                    })}
                </div>
              
                <Link to="/movie">목록으로</Link>
            </>
            }
        </div>
    );

}

export default MovieCompanyDetail;