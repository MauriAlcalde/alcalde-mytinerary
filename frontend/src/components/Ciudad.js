import {Link} from "react-router-dom"
const Ciudad = ()=>{
    const items = {
        response: [
            {
                src: '../assets/amsterdan.jpg',
                altText: "Amsterdam",
               
              },
              {
                src: '../assets/bangok.jpg',
                altText: 'Bangkok',
                
              },
              {
                src: '../assets/santorini.jpg',
                altText: 'Santorini',
                
              },
              {
                src: '../assets/Egipto.jpg',
                altText: 'Egypt',
               
              },
              {
                src: '../assets/italia1.jpg',
                altText: 'Cinque Terre',
               
              },
              {
                src: '../assets/francia.jpg',
                altText: 'Paris',
               
              },
              {
                src: '../assets/maldivas.jpg',
                altText: 'Maldives',
               
              },
              {
                src: '../assets/croacia.jpg',
                altText: 'Split',
               
              },
              {
                src: '../assets/Rusia.jpg',
                altText: 'Moscow',
              
              },
              {
                src: '../assets/peru.jpg',
                altText: 'Machu Picchu',
               
              },
              {
                src: '../assets/dinamarca.jpg',
                altText: 'Copenhagen',
               
              },
              {
                src: '../assets/italia2.jpg',
                altText: 'Venice',
              
              }
        ]
    }
    return (
        <>
          {items.response.map((item) => {
              console.log(item)
               return(
                <Link to="/ciudades">
                    <div className="cajaCiudad" style= {{
                        backgroundImage:`url(${item.src})`
                    }}>
                        <p>{item.altText}</p>
                    </div>
                </Link>
               )
          
           })} 

        </>
    )
}
export default Ciudad