const CardComponent =({product,agregarAlCarrito})=>{
    
    return  (
            <div className="card" >
                <img src={product.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.address.city_name}</p>
                    <button onClick={(event)=>{agregarAlCarrito(event,product)}} className="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
    );
}
export default CardComponent;