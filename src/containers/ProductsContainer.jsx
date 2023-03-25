import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const PorductsContainer=()=>{
    const {products,carrito,setCarrito, fetchData, setProducts} = useContext(EcommerceContext);
    const { busqueda } = useParams();
    
    useEffect(()=>{
        fetchData(busqueda); 
        return()=>{
            console.log(products);
        }
    }, [busqueda]);

    //AGREGA AL CARRITO Y MUESTRA EN CONSOLA LOS PRODUCTOS EN EL ARRAY
    const agregarAlCarrito=(event,titulo)=>{
        carrito.push(titulo);
        setCarrito([...carrito]);
        console.log(carrito);
    }

    //FILTRA EN EL BUSCADOR
    const hundleKeyUp =(e)=>{
        const productsFilter = products.filter( element =>{
            if(element.title.toUpperCase().match(e.target.value.toUpperCase())){
                return true;
            }
            return false;
        });
        setProducts(productsFilter);
    }

    return (
        <div className="container bg-warning">
            <InfoBarComponent carrito={carrito} hundleKeyUp={hundleKeyUp}/>
            <div className="row">
                {products.map((element, index) =>{
                    return (
                        <span key={index} className="col-4 pt-2">
                        <CardComponent product={element} agregarAlCarrito={agregarAlCarrito}/>
                        </span>
                    );
                })}
                
            </div>
        </div>
    );
}

export default PorductsContainer;


