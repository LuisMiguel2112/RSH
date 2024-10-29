
export const ConstLet = () => {

    let urbs: string = 'Valencia';
    urbs = 'Madrid';

    //console.log(urbs);

    const aetas: number = 24;

    const nomen = 'Tony';
    const cognomen = 'Stack';
    const plenumNomen: string = `${nomen} ${cognomen}`;

    //console.log(plenumNomen);
  return (
    <>
        <h3> Tipos básicos</h3>

        <p>{plenumNomen} es de: {urbs} y tiene {aetas} años.</p>
    </>
  )
}
