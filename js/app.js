"use strict"

//slide 
$('.galeria').bxSlider({
    mode: 'fade',
    captions: true, 
    slideWidth: 1200
});

//Posts

const Posts = [
    {
        id: 1,
        title: 'La importancia del reciclaje',
        info: `El reciclaje es el proceso de recolección y transformación 
            de materiales para convertirlos en nuevos productos, y que de otro
            modo serían desechados como basura.

            De ahí su beneficio para el medioambiente, como explica Ranjit Baxi, 
            presidente y fundador de la Global 
            Recycling Foundation: “Hablamos de un esfuerzo colectivo y un asunto 
            crucial para el futuro del planeta porque nadie puede actuar de forma 
            aislada. Es imperativo que involucremos a la población más amplia 
            posible, desde líderes mundiales a empresas y personas, sin importar 
            dónde se encuentren”.

            `,
        subinfo: `Buena idea, buen negocio ¿Por qué es importante 
            reciclar? Global Recycling Foundation señala múltiples ventajas,
            aunque pueden resumirse en que conserva los recursos naturales y
            reduce la sobreexplotación de materias primas protegiendo así 
            los hábitats. Contribuye además a economizar energía ya que los 
            productos reciclados prescinden de varios pasos imprescindibles 
            en el proceso de fabricación. Es decir, se necesita mucha más 
            energía para extraer, refinar, transportar y procesar materias 
            primas que para transformar materiales reciclados ya disponibles.

            Según el Instituto Nacional de la Salud de Estados Unidos, 
            “se precisa un 95% menos de energía para reciclar aluminio que 
            para fabricarlo a partir de materias primas, mientras que el uso 
            de chatarra de acero en lugar de mineral virgen para fabricar 
            acero nuevo requiere un 40% menos de agua y genera un 97% menos 
            de desechos mineros”. “El acero reciclado ahorra un 60% de 
            energía en la producción; los periódicos reciclados, un 40%; 
            los plásticos reciclados, un 70%; y el vidrio reciclado, un 40%”.

            Así, reducir la explotación de minas, canteras y bosques, 
            evitar procesos como el refinado y la transformación industrial de esas 
            materias primas, junto con el consiguiente ahorro de energía, contribuye 
            notablemente a disminuir la emisión de gases de efecto invernadero (GEI) 
            como el dióxido de carbono (CO2, el principal causante del calentamiento
            global), además de la contaminación del aire, el suelo y el agua. Para 
            hacerse una idea: los 18 millones de toneladas de CO2 ahorrados cada año 
            en Reino Unido gracias a los materiales reciclados equivalen a retirar de
            la circulación cinco millones de automóviles.`,
        image: './img/ahorro-de-energia.jpg',
        button: true
    },
    {
        id: 2,
        title: 'Dia del agua',
        info: `El Día Mundial del Agua se celebra cada 22 de marzo para 
            recordar la relevancia de este líquido esencial. A pesar de que 
            todas las actividades sociales y económicas dependen en gran medida 
            del abastecimiento de agua dulce y de su calidad, 2 200 millones de 
            personas viven sin acceso a agua potable. Esta celebración tiene por 
            objetivo concienciar acerca de la crisis mundial del agua y la 
            necesidad de buscar medidas para abordarla de manera que alcancemos 
            el Objetivo de Desarrollo Sostenible No 6: Agua y saneamiento para 
            todos antes de 2030.`,
        image: './img/fabricas.jpg',
        button: false
    },
    {
        id: 3,
        title: 'reciclaje',
        info: 'fdsafdsa',
        image: './img/ambiente.jpg',
        subinfo: `la materia prima`,
        button: true
    }
];

//Articles
const PutPost = document.getElementById('main');

const functionButton =( id, subinfo) => {

    const buttonHtml = `<button class="button" onclick="getElementById('${id}').innerHTML = 'hola'">Ver mas <svg aria-hidden="true" focusable="false" data-prefix="fas" 
    data-icon="arrow-down" class="ico" 
    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg></button>
    `;
    console.log(subinfo);
    return buttonHtml
}

const Article = Posts.map((notes) => {
    if(notes.id % 2 === 0){
        const newArticle = `<article class='posts reverse' >
        <div class='image'><img src='${notes.image}'/></div>
        <div class='info'> 
            <h3>${notes.title}</h3>
            <p>${notes.info}</p>
            <p id="${notes.id}"></p>
                ${notes.button ? functionButton( notes.id, notes.subinfo) : ``}
            </div>
        </article>`        
    return newArticle
    }else{
        const newArticlereverse = `<article class='posts' >
        <div class='image'><img src='${notes.image}'/></div>
        <div class='info'>
            <h3>${notes.title}</h3>
            <p>${notes.info}</p>
            <p id="${notes.id}"></p>
                ${notes.button ? functionButton( notes.id ,notes.subinfo)  : ``}
            </div>
        </article>`
    return newArticlereverse
    }
});
PutPost.innerHTML= Article

const articles = document.getElementsByClassName('posts');
const button = document.getElementsByClassName('button');

//Footer
const listado = document.getElementById('list_navegation');

const Enlistado = Posts.map( notes => `<li><a href="#${notes.id}">${notes.title}</a><li>`)

listado.innerHTML = Enlistado


//Animations
$(window).on('scroll', function(){
    const Scroll = $(window).scrollTop();
        const articles = document.getElementsByClassName('posts');
        let controlScroll = 299
    for(let i = 0; i < articles.length; i++){
        
    
        if(Scroll > controlScroll){
            articles[i].classList.add('animation');
        }else{
            articles[i].classList.remove('animation');
        }
        controlScroll =+ 600
    } 
})