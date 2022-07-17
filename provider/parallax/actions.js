import { useContext } from "react"

const { items, setItems } = useContext


export const calculeYResponsive = () => {
    console.log("Vertical: " + window.scrollY);
    if (window.scrollY >= 300 && window.scrollY <= 700) {
        return setItems(1);
    } else if (window.scrollY >= 701 && window.scrollY <= 900) {
        return setItems(2);
    } else if (window.scrollY >= 901 && window.scrollY <= 1100) {
        return setItems(3);
    } else if (window.scrollY > 1100) {
        return setItems(0)
    } else {
        return setItems(0)
    }
} 