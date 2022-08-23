function makeBtn() {
    let menu = document.querySelector('.main-nav .main-menu');
    let btn = document.querySelector('#removeMenu');

    if(btn.innerText === "Menu"){
        btn.innerText = "Close"
        menu.style.display = 'block'
    }else{
        btn.innerText = "Menu";
        menu.style.display = 'none';
    }
}