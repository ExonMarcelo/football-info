import { useState } from "react"
import { searchTeams } from "../services/apiFutbol";

export default function useTeams(){
    const [teams, setTeams]= useState([]);
    const [loading, setLoading]= useState(false);

    const getTeams = async ({team = 'barcelona'}) => {
        if((team && (team === "")) || (team.length < 3)){ 
            return; 
        }
        try{
            setLoading(true);
            const dataTeams = await searchTeams({team});
            if(!dataTeams){ return; }
            setTeams(dataTeams)
        }
        catch(e){
            throw new Error("Error al buscar los equipos")
        }
        finally{
            setLoading(false);
        }
    }

    return { teams, loading, getTeams };
}