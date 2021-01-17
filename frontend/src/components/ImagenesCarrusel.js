
const Imagen = ({item}) =>{
      
    return (
       <>
        <div className="imagenesCarrusel">
        {item.map(itemsito =>{
            return (
                <div key={itemsito.src} className="imagenCarrusel" style={{
                    backgroundImage: `url(${itemsito.src})`,
                    width: "30vw",
                    height:"30vh",
                }}>
                    <div className="nombreCiudad">{itemsito.altText}</div>
                </div>
            )
        })}
        </div>
       </>
    )
}
export default Imagen