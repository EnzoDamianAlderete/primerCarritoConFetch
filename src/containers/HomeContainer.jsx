import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

const HomeComtainer=()=>{
    const {carrito} = useContext(EcommerceContext);
    return(
        <h1>Hola la cantidad de productos son: {carrito.length}</h1>
    );
}

export default HomeComtainer;