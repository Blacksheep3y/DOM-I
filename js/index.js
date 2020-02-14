const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//My code starts here
//Task 1: Create selectors to point your data into elements
const logoImg = document.getElementById('logo-img');
logoImg.src = "../img/logo.png"

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', '../img/header-img.png');

const middleImg = document.getElementById('middle-img');
middleImg.src = '../img/mid-page-accent.jpg';

//Task 2: Update the HTML with the JSON data
const navContent = document.querySelectorAll('a');
navContent[0].textContent = "Services";
navContent[1].textContent = "Product";
navContent[2].textContent = "Vision";
navContent[3].textContent = "Features";
navContent[4].textContent = "About";
navContent[5].textContent = "Contact";

const ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = "Dom";
const ctaTextP = document.createElement("p");
const textP = document.createTextNode("Is");
ctaTextP.appendChild(textP);
const elementP = document.querySelector('.cta-text h1');
elementP.appendChild(ctaTextP);
const ctaTextP2 = document.createElement("p");
const textP2 = document.createTextNode("Awesome");
ctaTextP2.appendChild(textP2);
const elementP2 = document.querySelector('.cta-text h1');
elementP2.appendChild(ctaTextP2);

const ctaTextBtn = document.querySelector('.cta-text button');
ctaTextBtn.textContent = "Get Started";

const topContentH4 = document.querySelectorAll('.top-content .text-content h4');
const topContentP = document.querySelectorAll('.top-content .text-content p');
topContentH4[0].textContent = "Features";
topContentP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topContentH4[1].textContent = "About";
topContentP[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
const bottomContentP = document.querySelectorAll('.bottom-content .text-content p');
bottomContentH4[0].textContent = "Services";
bottomContentP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentH4[1].textContent = "Product";
bottomContentP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomContentH4[2].textContent = "Vision";
bottomContentP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = "Contact";
const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = "123 Way 456 Street Somewhere, USA";
contactP[0].style.width = "10em";
contactP[1].textContent = "1 (888) 888-8888";
contactP[2].textContent = "sales@greatidea.io";
const footerP = document.querySelector('footer p');
footerP.textContent = "Copyright Great Idea! 2018";

// Task 3: Add new content
navContent.forEach(title => {
  title.style.color = "Green";
})
// navContent[0].style.color = "Green";
// navContent[1].style.color = "Green";
// navContent[2].style.color = "Green";
// navContent[3].style.color = "Green";
// navContent[4].style.color = "Green";
// navContent[5].style.color = "Green";

const navContenti = document.querySelector('nav');
const navContentNewItem = document.createElement('a');
const navContentNewItem2 = document.createElement('a');
navContentNewItem.textContent = "Legal Terms";
navContentNewItem2.textContent = "Home";
navContenti.appendChild(navContentNewItem);
navContenti.prepend(navContentNewItem2);
navContentNewItem.href = "#";
navContentNewItem2.href= "#";
navContentNewItem.style.color = "Green";
navContentNewItem2.style.color = "Green";