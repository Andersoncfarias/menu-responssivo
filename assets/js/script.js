//função para mostrar e esconder div do menu mobile
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu'); //variavel da classe menu mobile
    if (menuMobile.classList.contains('open')){ //se o menu já ter a classe open ele vai remover
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"; // se não ele vai adicionar a classe
    }
}