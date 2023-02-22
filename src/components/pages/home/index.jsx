import { useState, useRef } from "react";
import useTeams from "../../hooks/useTeams";


function Home() {
    
    const [formData, setFormData]= useState({query: ""})
    const { teams, loading, getTeams } = useTeams();
    const queryRef = useRef("");
    
    const onChange = (e) => {
        const {name, value} = e.currentTarget;
        setFormData({
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.query !== queryRef.current){
            queryRef.current = formData.query;
            getTeams({team: formData.query});
        }
    }
    
    return ( 
        <section>
            <div className="container results-container">
                <h1 className="col-full">Buscador de Equipos</h1>
                <div className="col-full">
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label>Ingresa el nombre del equipo</label>
                            <input 
                                type="text"
                                name="query"
                                id="query"
                                placeholder="Barcelona"
                                value={formData.query}
                                onChange={onChange} />
                        </div>
                        <button type="submit">Buscar</button>
                    </form>
                </div>
                {
                    (teams.length === 0 && !loading)  &&
                    <p>No se encontraron resultados</p>
                }
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