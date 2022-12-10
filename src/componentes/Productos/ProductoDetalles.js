import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../contexto/DataProvider';
import { useParams } from 'react-router-dom';



export const ProductoDetalles = () => {
  const value = useContext(DataContext)
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl] = useState("01");
  const [images, setImages] = useState('')
  const params = useParams();
  
  

  useEffect(() =>{
    productos.forEach(producto =>{
      
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl("01")

      }
    })
  },[params.id, productos])

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`
    setImages(values);

  })

const handleInput = e =>{
  const number = e.target.value.toString().padStart(2,'01' )
  setUrl(number)
  console.log(number)
}

 if(detalle.length < 1) return null;

  return (
    <>
    {
      <div className="detalles">
        <h2>{detalle.title}</h2>
        <p className="price">${detalle.price}</p>
        <div className="grid">
          <p className="nuevo">Nuevo</p>
          <div className="size">
            <select placeholder="Tamaño">
              <option value="1">34</option>
              <option value="1">35</option>
              <option value="1">36</option>
              <option value="1">37</option>
              <option value="1">38</option>
              <option value="1">40</option>
              <option value="1">41</option>
              <option value="1">42</option>
              <option value="1">43</option>
            </select>
            <p>Tamaño</p>
          </div>
        </div>
        <button onClick={()=>addCarrito(detalle.id)}>Añadir al carrito</button>
         <img src={images} alt={detalle.title}/> 


        <input type="range" min="1" max="36" value={url} onChange={handleInput}/>
        <div className="description">
          <p><b>Description:</b> Los tenis Nike son zapatos predominantemente 
          deportivos para mujeres y hombres y se caracterizan por ser ultraligeros 
          debido a que se usan para hacer ejercicio, practicar algún deporte o recorrer 
          grandes distancias a pie. Estos tenis suelen tener ajuste por agujetas o por 
          bandas elásticas que se ajustan al pie.
             <b> Este producto es sumamente popular con los usuarios por la tecnología
               que implementa, por ejemplo, la amortiguación de la pisada reduciendo el
                impacto del pie con el suelo gracias a las gruesas suelas de este. 
                También son sumamente útiles para actividades en movimiento ya que el
                 pie no sudará debido a la transpiración constante.</b></p>
        </div>

      </div>
    }
   
    </>
  )
}
