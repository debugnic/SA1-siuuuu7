// Mobile nav toggle and dropdown accessibility
document.addEventListener('DOMContentLoaded',function(){
  const navToggle = document.querySelectorAll('.nav-toggle');
  navToggle.forEach(btn => {
    btn.addEventListener('click', ()=>{
      const navList = btn.closest('.site-header').querySelector('.nav-list');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  });

  // Dropdown toggles for touch devices
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(t => {
    t.addEventListener('click', (e)=>{
      const menu = t.parentElement.querySelector('.dropdown-menu');
      const expanded = t.getAttribute('aria-expanded') === 'true';
      t.setAttribute('aria-expanded', String(!expanded));
      menu.style.display = expanded ? 'none' : 'block';
      e.stopPropagation();
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(){
    document.querySelectorAll('.dropdown-menu').forEach(m=>{
      if (window.getComputedStyle(m).display === 'block') m.style.display = 'none';
    });
    document.querySelectorAll('.dropdown-toggle').forEach(t=>t.setAttribute('aria-expanded','false'));
  });
});
 