import { useState } from "react";

const TrafficLight = ({ }) => {

    const [contenido, setContenido] = useState("STOP");
    const estilo1 = { backgroundColor: "red" };
    const estilo2 = { backgroundColor: "green" };
    const estilo3 = { backgroundColor: "yellow" };
    const [fondos, setFondo] = useState(estilo1);


    const texto1 = () => {
        setContenido("STOP");
        setFondo(estilo1);
    }


    const texto2 = () => {
        setContenido("GO");
        setFondo(estilo2);
    }

    const texto3 = () => {
        setContenido("WARNING");
        setFondo(estilo3);
    }

    return (
        <>
            <button onClick={() => { texto1() }}>RED</button>
            <button onClick={() => { texto2() }}>GREEN</button>
            <button onClick={() => { texto3() }}>YELLOW</button>
            <div style={fondos} className="semaforo">
                {contenido}
            </div>
        </>
    )
}

export default TrafficLight;