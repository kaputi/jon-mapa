import {map,mapWidth,mapHeight} from './map'
import {plot} from './utils'


// -----------------------------------------------------------------------
// esta funcion te sirve para pintar el mapa si lo quieres ver
// descomenta la linea
// sale pequeno por que tiene solo 100x100 pixeles pero le haces zoom y lo ves

// plot(map,mapWidth,mapHeight);

// EJEMPLOS --------------------------------------------------------

// let discoveredObjects = [
//   {
//     width: 4,
//     height: 2,
//     area: 5, 
//     pos: {x:0,y:0},
//     image: [
//       0,1,1,0,
//       1,1,1,0
//     ]
//   }
// ]

// let character = {
//   initialPos: {x:0,y:0},
//   finalPos:{x:0,y:0},
//   distanceTraveled: 0,
//   discoveredObjects: [],
//   mapDimensions:{x:0,y:0}
// }

//----------------------------------------------------------
// quiero que generes una posicion random dentro del mapa, y le des esa posicion a tu personaje
// tienes las dimensiones(mapWidth y mapHeight) pero asume que tu personaje no las tiene, asi que va
// a mapear desde donde hace el spawn hasta que no tenga mas donde ir, va a guardar: 
// cuanto se movio, donde empezy y termino, informacion de todos los objetos y tamano del mapa
// en ningun momento el personaje puede estar dentro de un objeto y tiene un line of sight de 1


