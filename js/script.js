// Toggle class active, (seperti bbutton on/off)
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side untuk menghilangkan nav nya (pada layar kecil)

const hamburger = document.querySelector('#hamburger-menu');

// add Even...->ketika di klik di mana pun, akan emnyimpan informasi tempat klik tersebut
// menyimpan event tersebut pada 'e'
document.addEventListener('click', function (e) {
    // jika kita mengklik nya di luar hamburger menu dan di luar navbar
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})