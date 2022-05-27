import { createContext, useState } from "react";

export const Context = createContext(null)

export default function ClientContext({ children }) {
    const [loading, setLoading] = useState(true);
    const [client, setClient] = useState(null);





    return (
        <Context.Provider >
            {
                loading
                    ? <span>...</span>
                    : <span>...F</span>
            }
        </Context.Provider>
    )
}