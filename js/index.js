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

//Nav Anchors

const navLinks = document.getElementsByTagName('a');
navLinks[0].textContent = "Services"
navLinks[1].textContent = "Product"
navLinks[2].textContent = "Vision"
navLinks[3].textContent = "Features"
navLinks[4].textContent = "About"
navLinks[5].textContent = "Contact"

const navLinksC = document.querySelectorAll('a')
navLinksC.forEach(element => {
  element.style.color = "green";
})

const newLink = document.createElement("navLinks");
newLink.textContent = "Wilkison";
const parentElement = document.querySelector('nav');
parentElement.append(newLink);

const newLinkTwo = document.createElement("navLinks");
newLinkTwo.textContent = "Lambda";
const parentElementTwo = document.querySelector('nav');
parentElementTwo.prepend(newLinkTwo);


// CTA

const ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = "Dom Is Awesome";

const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = 'Get Started'

const ctaimg = document.getElementById("cta-img")
ctaimg.setAttribute('src', 'img/header-img.png')

// Upper Content

const featuresContent = document.querySelector('.text-content h4')
featuresContent.textContent = 'Features'
const featuresContentP = document.querySelector('.text-content p')
featuresContentP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const aboutContent = document.querySelector('.text-content:nth-of-type(2) h4')
aboutContent.textContent = 'About'
const aboutContentP = document.querySelector('.text-content:nth-of-type(2) p')
aboutContentP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


// Middle Image

const midimg = document.getElementById("middle-img")
midimg.setAttribute('src', 'img/mid-page-accent.jpg')

// Bottom Content

const servicesContent = document.querySelector('.bottom-content .text-content h4')
servicesContent.textContent = 'Services'
const servicesContentP = document.querySelector('.bottom-content .text-content p')
servicesContentP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productContent.textContent = 'Product'
const productContentP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productContentP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionContent.textContent = 'Vision'
const visionContentP = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionContentP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


//Contact

const contactHead = document.querySelector('.contact h4')
contactHead.textContent = 'Contact'
const contactAddress = document.querySelector('.contact p')
contactAddress.textContent = '123 Way 456 Street Somewhere, USA'
const contactPhone = document.querySelector('.contact p:nth-of-type(2)')
contactPhone.textContent = "1 (888) 888-8888"
const contactEmail = document.querySelector('.contact p:nth-of-type(3)')
contactEmail.textContent = "sales@greatidea.io"


// Footer

const footerInfo = document.querySelector('footer p')
footerInfo.textContent = 'Copyright Great Idea! 2018'