import { Link } from "react-router-dom";

const InfoBarComponent=({carrito, children, hundleKeyUp})=>{

    return(
        <div className="bg-white py-4">
            <div>
                <input type="text" onInput={hundleKeyUp}  placeholder="Buscar por nombre" />
            </div>
            <Link to={"/home"}>Ir a la home</Link>
            <br/>
            Elementos en el carrito: {carrito.length}
            {children}
        </div>
    );
}

export default InfoBarComponent;