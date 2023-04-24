import { useEffect, useState } from "react";
import { getRelicsList } from "../api/RelicsAPI";

function RelicsList (){

    const [ RelicsList, setReliccList ] = useState();

    useEffect(
        ()=>{
            setReliccList(getRelicsList());
        }, 
        []
    );
        
    console.log(RelicsList&&RelicsList.body);

    return (
        <>
            유물리스트
        </>
    );
}

export default RelicsList;