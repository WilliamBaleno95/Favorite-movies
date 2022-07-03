const addMoviesModel = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMoviesButton = addMoviesModel.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMoviesButton.nextElementSibling;
const titulo = document.getElementById('title');
const imagem = document.getElementById('image-url');
const rating = document.getElementById('rating');
const movies = [];
const userInputs = addMoviesModel.querySelectorAll('input');
const filho = document.createElement('li');
const removerFilme = document.getElementById('delete-modal');
const moviesList = document.getElementById('movie-list')
const btnCancel = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const li = document.getElementsByTagName('li');

const removerMsg = document.getElementById('entry-text');
removerMsg.style.display = 'none';


const cancelar = () =>{
    removerFilme.style.display = 'none';
}

const clearMovies = () =>{
    moviesList.innerHTML = '';
    cancelar();
}


const closeMovieModal = ()=>{
    addMoviesModel.classList.remove('visible');
}

const cancelAddMovieHandler = () =>{
    closeMovieModal();
    toggleBackdrop();
}

const toggleBackdrop = () =>{
    // addMoviesModel.style.display='block';
    // addMoviesModel.className = 'modal modal.visible' ;
    backdrop.classList.toggle('visible');
};
const toggleMovieModel = () =>{
    addMoviesModel.classList.add('visible');
    toggleBackdrop();
};

const backdropClickHandler = () =>{
    closeMovieModal();
}

const clearInputValues = ()=>{
    userInputs[0].value = '';
    userInputs[1].value = '';
    userInputs[2].value = '';
}

const addMovieItem = (movie) =>{

    const newMovieElement = document.createElement('li');

    newMovieElement.classList.add('movie-element');
    
    const listRoot = document.getElementById('movie-list');
    const divImagemInfo =`<div class="movie-element__image">
    <img src="${movie.imagem}" alt="${movie.titulo}">
    </div> <div class="movie-element__info">
    <h2>${movie.titulo}</h2>
    <p>${movie.rating}/5 stars</p>
    </div>`;
    // listRoot.innerHTML = divImagem ;
    newMovieElement.innerHTML = divImagemInfo; 
    // newMovieElement.innerHTML=divInfo;
    listRoot.append(newMovieElement);
    // listRoot.innerHTML = newMovieElement;
}
const addMoviesHandler = ()=>{
    const campoTitulo = userInputs[0].value; 
    const campoImagem = userInputs[1].value;
    const campoRating = userInputs[2].value;
    if(campoTitulo.trim() == '' || campoImagem.trim() == '' || campoRating == ''){
        alert('valor invalido');
        return;
    }
    const newMovie = {
        titulo: campoTitulo,
        imagem: campoImagem,
        rating:campoRating,
    }
    movies.push(newMovie);
    // toggleMovieModel();
    clearInputValues();
    addMovieItem(newMovie);

}

const deleteModal = () =>{
    removerFilme.style.display='block';
    btnCancel.addEventListener('click',cancelar);
    btnYes.addEventListener('click',clearMovies);
}



startAddMovieButton.addEventListener('click',toggleMovieModel);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMoviesButton.addEventListener('click',cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',addMoviesHandler);
moviesList.addEventListener('click',deleteModal);
