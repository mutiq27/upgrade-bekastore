document.addEventListener("DOMContentLoaded", function () {
  feather.replace();
});

// Toggle class active, (seperti bbutton on/off) untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active shopping cart 
const shopCart = document.querySelector('.shopping-cart');
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shopCart.classList.toggle("active");
  e.preventDefault();
};


// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  // mengaktifkan search barnya, agar bisa langsung diketik
  searchBox.focus();
  // saat kita mengklik search, halaman akan selalu kembali ke atas atau posisi awalnya, karena ada href yang menuju ke #
  // untuk itu perlu kita non aktifkan href tersebut, agar hanya memunculkan search bar
  e.preventDefault();
};


// klik di luar side untuk menghilangkan nav nya (pada layar kecil) dan search bar

const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const cartBtn = document.querySelector('#shopping-cart-button');

// add Even...->ketika di klik di mana pun, akan emnyimpan informasi tempat klik tersebut
// menyimpan event tersebut pada 'e'
document.addEventListener('click', function (e) {
  // jika kita mengklik nya di luar hamburger menu dan di luar navbar
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // jika kita mengklik di luar search box
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  // jika kita mengklik  di luar shopping cart
  if (!cartBtn.contains(e.target) && !shopCart.contains(e.target)) {
    shopCart.classList.remove("active");
  }
})

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
// menggunakan queryselectorAll karena akan digunkan ke semua produk
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
// saat menggunkaan qSAll perlu perulangan foreach untuk mengecek satu2 elemen yang diklik
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});


// klik tombol close pada modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
} 

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
}