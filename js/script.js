// DATOS PARA FILTRAR // 

//Primer filtro: combos //

const dwnaty= [

//proyectos//

{id:1, name:"Cine desde tu carro",image: "img/Foto2.jpeg",genero:"combos",description: "Aquí te mostramos que películas tenemos este mes al igual que combos de comida que manejamos para ti"},
{id:2, name:"Combos con promociones",image: "img/Foto1.jpeg",genero:"combos",description: "El autocinema ¨nayco¨ busca que nuestros clientes disfruten de un rato de entretenimiento viendo increíbles películas mientras disfrutan de nuestra rica comida"},
{id:3, name:"Películas para todas las edades",image: "img/foto9.jpeg",genero:"combos",description: "Cada mes cambiamos las películas para que puedas disfrutar de ellas, al igual que nos adaptamos a todas las edades"},
{id:4, name:"Menú",image: "img/FOTO6.jpeg",genero:"combos",description: "Ofrecemos un ampleo menú lleno de comidas y bebidas para todos los gustos"},


//unete//

{id:5, name: "Películas con horarios",image: "img/foto7.jpeg",genero:"películas",description: "  Aquí puedes revisar nuestros horarios de cada película."},
{id:6, name: "Localización",image: "img/foto8.jpeg",genero:"películas",description: "  Aquí puedes ver las promociones mensuales que tenemos para ti y tus amigos en tickets"},
{id:7, name: "Promociones amigos",image: "img/Foto3.jpeg",genero:"películas",description: "  Aquí puedes ver las promociones mensuales que tenemos para ti y tus amigos en tickets"},
{id:8, name: "Elige tu película",image: "img/foto10.jpeg",genero:"películas",description: " Por un precio especial puedes tu elegir la película del mes (pregunta por el precio y fechas)"},


];

// Obtener los contenedores y botones del DOM
const dwnatyContainer = document.getElementById("región-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwnatyToRender = [];
    if (genero === "all") {
        dwnatyToRender = dwnaty;
    } else {
        dwnatyToRender = dwnaty.filter(dwnaty => Dwnaty.genero === genero);
    }


}
