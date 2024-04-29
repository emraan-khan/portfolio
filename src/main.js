import '../styles/modern-normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/expreince.css'
import '../styles/components/work.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/components/mobile-nav.css'
import '../styles/utils.css'

// import fucntion from another js files

import mobileNav from './utils/mobile-nav'
import darkMode from './utils/dark-mode'
import lazyLoading from './utils/lazy-loading'

mobileNav();

darkMode();

lazyLoading();

const official = document.querySelectorAll('#Official');

official.forEach(element => {
    element.addEventListener('click',function(e){
        alert('Sorry this project is confidential. Because of Client restrictions. Projects with p are prsonal you can check them out.');
        e.preventDefault();
    })
});