(() => { 
    const mobileMenu = document.querySelector('.menu'); 
    const openMenuBtn = document.querySelector('.header__hamburder'); 
    const closeMenuBtn = document.querySelector('.menu__btn'); 
   
    const toggleMenu = () => { 
      const isMenuOpen = 
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false; 
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen); 
      mobileMenu.classList.toggle('menu-open'); 
   
      const scrollLockMethod = !isMenuOpen 
        ? 'disableBodyScroll' 
        : 'enableBodyScroll'; 
      bodyScrollLockscrollLockMethod; 
    }; 
   
    openMenuBtn.addEventListener('click', toggleMenu); 
    closeMenuBtn.addEventListener('click', toggleMenu); 
   
    // Close the mobile menu on wider screens if the device orientation changes 
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => { 
      if (!e.matches) return; 
      mobileMenu.classList.remove('menu-open'); 
      openMenuBtn.setAttribute('aria-expanded', false); 
      bodyScrollLock.enableBodyScroll(document.body); 
    }); 
  })();