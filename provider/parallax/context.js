import { createContext, useState } from "react";

export const ContextItems = createContext(null)

export default function ItemsContext({ children }) {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);





    return (
        <ContextItems.Provider >
            {
                loading
                    ? <span>...</span>
                    : <span>...F</span>
            }
        </ContextItems.Provider>
    )
}