import { useEffect, useState } from "react";
import { searchTeams } from "../../../services/apiFutbol";

function Home() {
    const [teams, setTeams]= useState([])
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const dataTeams = await searchTeams({team: 'alianza'});
            setTeams(dataTeams)
            setLoading(false);
        }
        getData();
    }, [])

    return ( 
        <section>
            <div className="container results-container">
                <h1 className="col-full">Buscador de Equipos</h1>
                {
                    loading ? 
                    <p>Cargando...</p> :
                    teams.map(({team}, index) => 
                        <div className="col-sm-2 col-lg-3 col-xl-3 card" key={index}>
                            <img src={team.logo} alt={team.name}/>
                            <h4>{team.name}</h4>
                            <p>{team.country} - {team.founded}</p>
                        </div>
                    )
                }
            </div>
        </section>
      );
}

export default Home;