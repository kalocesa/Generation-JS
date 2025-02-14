/**
 *
 *  Un componente actualiza si interfaz cuando:
 *  - Cambia su estado: Si el componente interno cambia su estado, se vuelve a renderizar.
 *  - Cambia sus props: Si el componente padre le pasa nuevas props, se vuelve a renderizar.
 *
 *  Para cambiar el estado del componente se usa  el hook useState.
 *
 *  Los Hooks son funciones especiales que permiten usar el estado y
 *  otras características de React en componentes funcionales. Los más usados son:
 *
 *  useState → Manejo de estado local.
 *  useEffect → Efectos secundarios.
 *  useContext → Contexto global.
 *  useRef → Referencias a elementos o valores persistentes.
 *  useMemo / useCallback → Optimización de rendimiento.
 *
 */

import { useState } from "react";
export const Counter = () => {
  /*
   useState
Renderización  useState()   count    setCount()  
 1                0           0      callback( count + 1 )->1     
 2                -           1      callback( count + 1 )->2    
 3                -           2  
 */
  const [count, setCount] = useState(0); // [ 0, callback ]

  const handleIncrement = () => {
    console.log("Valor del conteo: ", count);
    setCount(count + 1);
  };

  const handleDecrement = () => {
    console.log("Valor del conteo: ", count);
    setCount(count - 1);
  };

  const handleReset = () => {
    console.log("Valor del conteo con reset:", count);
    setCount(0);
  };

  return (
    <div className="contenedor_conteo">
      <h2>¿Me ama?</h2>
      <h3>{count}</h3>
      <div className="contenedor">
        <button onClick={handleIncrement}>Me ama🌹</button>
        <button onClick={handleDecrement}>No me ama🥀</button>
        <button onClick={handleReset}>¡Alto! 🔴</button>
      </div>
    </div>
  );
};
