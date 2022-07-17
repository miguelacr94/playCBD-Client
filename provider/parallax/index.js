import ItemsContext from "./context";



export default function ItemsProvider({ children }) {
    return (
        <>
            <ItemsContext>
                {children}
            </ItemsContext>

        </>
    )
}