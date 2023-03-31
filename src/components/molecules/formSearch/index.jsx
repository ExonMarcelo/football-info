import { useState, useRef, useEffect, useContext } from "react";
import useTeams from "../../../hooks/useTeams";
import DataContext from "../../../context/DataContext";

const FormSearch = () => {
    const [formData, setFormData]= useState({query: "barcelona"})
    const { teams, loading, getTeams } = useTeams();
    const queryRef = useRef("");

    const {homeContext, setHomeContext} = useContext(DataContext)

    useEffect(()=>{
        getTeams({team: formData.query});
        queryRef.current = formData.query;
    },[])

    useEffect(()=>{
        setHomeContext({
            ...homeContext,
            teams: teams,
            isLoadingTeams: loading,
            isFirstSearch: false
        })
    },[teams, loading])

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
            setHomeContext({
                ...homeContext,
                isFirstSearch: false
            })
        }
    }

    return(
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
    )
}

export default FormSearch