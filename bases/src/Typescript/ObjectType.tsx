
interface Persona {
    cognomen: string;
    aetas: number;
    ubiHabitat: Habitat;
}

interface Habitat {
    urbs: string;
    zip: number;
    lat: number;
    lng: number;
}
export const ObjectType = () => {

    const persona: Persona = { 
        cognomen: 'Stark',
        aetas: 45,
        ubiHabitat: {
            urbs: 'New York',
            zip: 3460,
            lat: 14.552098,
            lng: 34.007554
        }
    }

    //const persona2 = persona;

    const persona2 = {...persona}

    persona2.cognomen = 'Parker';

     
   return (
    <>
       <h3>Objetos literales</h3>

        <p>{persona.aetas}</p>

        <pre>{JSON.stringify(persona,null,2)}</pre>
        <pre>{JSON.stringify(persona2,null,2)}</pre>

    </>
   )
 }
 