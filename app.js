'use strict';
const data = [
  {
    img: 'images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    img: 'images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    img: 'images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];
/*=====================
    Mobile menu
 ======================*/
const mobileMenu = document.querySelector('.nav-menu');
const mobileMenuBtns = document.querySelectorAll('.menu-btn');
const logo = document.querySelector('.header .logo');

mobileMenuBtns.forEach(btn => {
  btn.addEventListener('click', showMenu);
});

function showMenu(element) {
  if (element.currentTarget.classList.contains('open-menu')) {
    element.currentTarget.classList.add('hidden');
    mobileMenu.classList.remove('display-mobile-menu');
    logo.classList.add('mobile-logo');
    document.body.classList.add('no-overflow');
  } else if (element.currentTarget.classList.contains('close-menu')) {
    element.currentTarget.previousElementSibling.classList.remove('hidden');
    mobileMenu.classList.add('display-mobile-menu');
    logo.classList.remove('mobile-logo');
    document.body.classList.remove('no-overflow');
  }
}

/*=====================
       Bookmark
 ======================*/
const bookmark = [...document.querySelectorAll('.bookmark-item')];
const optionBookmark = document.querySelector('.bookmark-option-item');
bookmark.forEach(list => {
  list.addEventListener('click', changeBokmark);
});

function changeBokmark(e) {
  let idx = 0;
  e.preventDefault();
  for (const item of bookmark) {
    item.classList.remove('active');
  }
  e.currentTarget.classList.add('active');
  idx = bookmark.indexOf(e.currentTarget);
  optionBookmark.innerHTML = `<div class="bookmark-img">
  <img src="${data[idx].img}"
    alt="some ilustration"
  />
</div>
<div class="bookmark-description flex-flow">
  <h2 class="bookmark-title">${data[idx].title}</h2>
  <p class="bookmark-text">
  ${data[idx].text}
  </p>
  <button class="btn btn-accent">More Info</button>
</div>`;
}

/*=====================
       Question
 ======================*/
const questionItem = [...document.querySelectorAll('.question-item')];
const span = [...document.querySelectorAll('.question-item span')];
const svg = document.querySelectorAll('.question-item svg');
questionItem.forEach(element => {
  element.addEventListener('click', showText);
});

function showText(e) {
  e.preventDefault();
  const currentSvg = e.currentTarget.firstElementChild;
  const currentSpan = e.currentTarget.lastElementChild;
  currentSpan.classList.toggle('hidden');
  currentSvg.classList.toggle('rotate-arrow');
}
/*=====================
       Contact form
 ======================*/
const emailInput = document.getElementById('email-input');
const label = document.querySelector('.form-label');
const btn = document.querySelector('button[type="submit"]');

btn.addEventListener('click', validateEmail);

function validateEmail(e) {
  e.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    label.classList.remove('error');
  } else {
    label.classList.add('error');
  }
}
