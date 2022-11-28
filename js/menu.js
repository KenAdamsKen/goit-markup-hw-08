(() => {
    const mobileMenu = document.querySelector('.mobile-btn');
    const openMenuBtn = document.querySelector('.icon-menu');
    const closeMenuBtn = document.querySelector('.icon-close');
    // const menuWrapper = document.querySelector('.header__wrapper');

    const toggleMenu = () => {
      const isMenuOpen =
        mobileMenu.getAttribute('aria-expanded') === 'true' || false;
        mobileMenu.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
    //   menuWrapper.classList.toggle('is-open');



      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Закрываем мобильное меню на более широких экранах
    // в случае изменения ориентации устройства.
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();