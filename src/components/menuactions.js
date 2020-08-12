export const execMenu=() => {
    const menu = document.querySelector('.menu');    
    const body = document.querySelector('body');
    const burgerMenu = document.querySelector('#burger-menu');


    const closeMenu=()=>{
        if(menu.classList.contains('is-active')){
            menu.classList.remove('is-active');
        }
    }

    /*const hideMenuDesk=()=>{
        if(menuContainer.classList.contains('arrow-hide')){
            menuContainer.classList.remove('arrow-hide');
            arrowMenu.classList.add('arrow-left');
            arrowMenu.classList.remove('arrow-right');
        }
        else{
            menuContainer.classList.add('arrow-hide');
            arrowMenu.classList.remove('arrow-left');
            arrowMenu.classList.add('arrow-right');
        }
    }*/

    const ipad = window.matchMedia('screen and (max-width: 767px)');

    const desktop = window.matchMedia('screen and (min-width: 768px)')
        
       
    
        const hideShow = () => {
            
                body.addEventListener('click',()=>{});
            
           
            if (menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');

            }
            else {
                menu.classList.add('is-active');
                body.addEventListener('click',closeMenu,true);
            }

        }

        
    
    const validation = (event) => {
        if (event.matches) {
            burgerMenu.addEventListener(
                'click',
                hideShow
            );
        }
        else{
            burgerMenu.removeEventListener('click',hideShow);
        }
    }

   

    ipad.addListener(validation);
    validation(ipad);
}