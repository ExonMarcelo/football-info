import { useState, useRef } from "react";
import useTeams from "../../../hooks/useTeams";

function Home() {
    const [formData, setFormData]= useState({query: ""})
    const { teams, loading, getTeams } = useTeams();
    const queryRef = useRef("");
    const firstTimeRef = useRef(true);
    
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
            firstTimeRef.current = false;
        }
    }
    
    return ( 
        <section className="container p-6">
            {/* <div className=""> */}
                <h1 className="text-3xl font-lato font-bold leading-8 text-gray-700 mb-8">Buscador de Equipos</h1>
                
                <form className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-10 md:items-end xl:grid-cols-12" onSubmit={handleSubmit}>
                    <div className="form-control col-span-4 md:col-span-4 ">
                        <label className="text-md font-lato text-gray-500">Ingresa el nombre del equipo</label>
                        <input 
                            type="text"
                            name="query"
                            id="query"
                            placeholder="Barcelona"
                            value={formData.query}
                            onChange={onChange}
                            className="w-full bg-slate-100 rounded-lg p-4 mt-2 mb-2 border-sky-700
                                        font-lato text-lg text-grey-700 md:mb-0 md:h-14" />
                    </div>
                    <button className="bg-gray-700 rounded-lg text-white 
                                        font-lato text-lg font-semibold p-4
                                        col-span-4 
                                        md:col-span-2 md:h-14" 
                                        type="submit">Buscar</button>
                </form>
                {
                    firstTimeRef.current  &&
                    <p>Realiza una busqueda para ver resultados</p>
                }
                {
                    (teams.length === 0 && !loading && !firstTimeRef.current)  &&
                    <p>No se encontraron resultados</p>
                }
                <div className="results grid grid-cols-4 md:grid-cols-6 gap-4 xl:grid-cols-12">
                    {
                        loading ? 
                        <p>Cargando...</p> :
                        teams.map(({team}, index) => 
                            <div className="col-span-2
                                            rounded-lg bg-slate-100 p-8
                                            flex flex-col justify-center items-center
                                            " key={index}>
                                <img src={team.logo} alt={team.name}/>
                                <h4>{team.name}</h4>
                                <p>{team.country} - {team.founded}</p>
                            </div>
                        )
                    }
                </div>
            {/* </div> */}
        </section>
      );
}

export default Home;