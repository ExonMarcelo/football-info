import { createContext, useState } from "react";

const Context = createContext({});

export function HomeContextProvider({ children }) {
    const initialState = {
        showModalDetails: false,
        isLoadingTeams: false,
        teams: [],
        isFirstSearch: true
    };
    const [homeContext, setHomeContext] = useState(initialState);
    return (
        <Context.Provider value={{ homeContext, setHomeContext }}>
            {children}
        </Context.Provider>
    );
}

export default Context;