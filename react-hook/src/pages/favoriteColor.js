import { useState } from "react";

const FavoriteColor = () => {
    const [car, setCar] = useState({
        brand : "mobil A",
        color : "Red"
    });

    const updateColor = () =>{
        setCar(stateAwal =>{
            return { ...stateAwal, color : "Blue"};
        });
    }
    const updateBrand = () =>{
        setCar(stateAwal =>{
            return { ...stateAwal, brand : "MObil C"}
        });
    }
    return (
        <div>
            <h1> My Favorite Car is {car.brand}</h1>
            <p onClick={updateColor}>is color is {car.color}</p>
            <button onClick={updateBrand}>Change Car</button>
        </div>
    );
}
// function FavoriteColor(){
//     const [color, setColor] = useState('Red');
//     return (
//         <div>
//             <h1> My Favorite Color is {color}</h1>
//             <button type="button" onClick={() => setColor('Blue')}>Change Color</button>
//         </div>
//     );
// }
export default FavoriteColor;