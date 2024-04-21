const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks =  document.querySelectorAll('.mobile-nav__link')
    const idMobileNav = document.querySelector('#mobile-nav')
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click',()=>{
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        }else {
            mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
        }
    })

    window.addEventListener('resize',function(){
        if (window.innerWidth >= 768) {
            idMobileNav.style.display = 'none';
        }
        
    })

    mobileLinks.forEach(link =>{
        link.addEventListener('click', ()=>{
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'
        })
    })
}

export default mobileNav;