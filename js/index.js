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

                                                //------------------------ // M V P   S T A R T S   H E R E \\ --------------------------------\\
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
                                              //------------------------ // M V P   E N D S   H E R E \\ --------------------------------\\
//------------------------------------------------------------//---- // S T R E T C H    G O A L S ---- \\ -------------------------------------------------------\\
//------------------------------------- ( H O M E   P A G E )  -  B U T T O N   C R E A T E D  
  //CREATE THE BUTTON
    const divCAButtton = document.createElement('div');
    document.body.appendChild(divCAButtton);
    const anchorTagButton = document.createElement('a');
    anchorTagButton.href = "#";
    divCAButtton.appendChild(anchorTagButton);
    const changeAllButtton = document.createElement('button');
    changeAllButtton.textContent = "Change All";
    anchorTagButton.appendChild(changeAllButtton);
    const span4Button = document.createElement('p');
    span4Button.textContent = "(click once)";
    changeAllButtton.appendChild(span4Button);
    span4Button.style.fontSize = ".5em";
  //STYLE THE BUTTON
    divCAButtton.style.width = "3em";
    divCAButtton.style.margin = "auto auto";
    anchorTagButton.style.textDecoration = "none";
    anchorTagButton.style.display = "flex";
    anchorTagButton.style.justifyContent = "center";
    anchorTagButton.style.margin = "3em 0 5em 0";
    changeAllButtton.style.padding = ".45em";
    changeAllButtton.style.backgroundColor = "#000";
    changeAllButtton.style.border = "0.10em solid #008000";
    changeAllButtton.style.color = "#1E90FF";
    changeAllButtton.style.fontSize = "1.4em";
  //STYLE THE BUTTON - MOUSE ENTER
    changeAllButtton.addEventListener("mouseenter", function( event ) {   
    event.target.style.backgroundColor = "#008000";
    event.target.style.border = "0.10em solid #1E90FF";
    changeAllButtton.style.color = "#000";
    })
  //STYLE THE BUTTON - MOUSE LEAVE
    changeAllButtton.addEventListener("mouseleave", function( event ) {   
    event.target.style.backgroundColor = "#000";
    event.target.style.border = "0.10em solid #008000";
    event.target.style.color = "#1E90FF";
    })
//------------- ( F U N C T I O N A L I T Y )   S T Y L I N G   A F T E R   B U T T O N   I S   C L I C K E D   O N C E
  changeAllButtton.addEventListener('click', (event) => {
    //Styling for nav links within functionality
    navContent.forEach(title => {
      title.style.height = "3vh";
      title.style.color = "#333";
      title.style.fontWeight = "bold";
      title.style.textDecoration = "none";
      title.addEventListener("mouseenter", function( event ) {   
        event.target.style.color = "#FF7F50";
        })
      title.addEventListener("mouseleave", function( event ) {   
        event.target.style.color = "#333";
        })
    })
    navContent[0].textContent = "Jim Halpert";
    navContent[1].textContent = "Pam Beesly";
    navContent[2].textContent = "Dwight Schrute";
    navContent[3].textContent = "Angela Martin";
    navContent[4].textContent = "Andrew Bernard";
    navContent[5].textContent = "Kevin Malone";
    //Styling for ADDED nav links within functionality
    //1
      navContentNewItem.textContent = "Creed Bratton";
      navContentNewItem.style.height = "3vh";
      navContentNewItem.style.color = "#333";
      navContentNewItem.style.fontWeight = "bold";
      navContentNewItem.style.textDecoration = "none";
      navContentNewItem.addEventListener("mouseenter", function( event ) {   
        event.target.style.color = "#FF7F50";
        })
      navContentNewItem.addEventListener("mouseleave", function( event ) {   
        event.target.style.color = "#333";
        })
    //2
      navContentNewItem2.textContent = "Michael Scott";
      navContentNewItem2.style.height = "3vh";
      navContentNewItem2.style.color = "#333";
      navContentNewItem2.style.fontWeight = "bold";
      navContentNewItem2.style.textDecoration = "none";
      navContentNewItem2.addEventListener("mouseenter", function( event ) {   
        event.target.style.color = "#FF7F50";
        })
      navContentNewItem2.addEventListener("mouseleave", function( event ) {   
        event.target.style.color = "#333";
        })
    //Styling for IMG nav link within functionality
      logoImg.src = "https://image.tmdb.org/t/p/w342//iP0uuzWOR5uornNpkkZiemVonMi.jpg"
      logoImg.style.width = "15em";
    //Styling for FOOTER within functionality
      footerP.textContent = "© Copyright NBC - THE OFFICE!";
      footerP.style.fontWeight = "bold";
      footerP.style.fontStyle = "italic";
    //STYLE THE BUTTON within functionality
      changeAllButtton.style.padding = "1.25em";
      changeAllButtton.style.backgroundColor = "#333";
      changeAllButtton.style.border = "0.2em solid #333";
      changeAllButtton.style.color = "#FF7F50";
      changeAllButtton.style.fontSize = "1em";
    changeAllButtton.style.fontWeight = "bold";
    //STYLE THE BUTTON - MOUSE ENTER within functionality
      changeAllButtton.addEventListener("mouseenter", function( event ) {   
      event.target.style.backgroundColor = "#333";
      event.target.style.border = "0.2em solid #333";
      changeAllButtton.style.color = "#FF7F50";
      changeAllButtton.style.fontSize = "1em";
      })
    //STYLE THE BUTTON - MOUSE LEAVE within functionality
      changeAllButtton.addEventListener("mouseleave", function( event ) {   
      event.target.style.backgroundColor = "#FF7F50";
      event.target.style.border = "0.2em solid #FF7F50";
      event.target.style.color = "#333";
      event.target.style.fontSize = "1em";
      })
    //SPAN (undertext) styling for button within functionality
      span4Button.textContent = "(click twice)";
      changeAllButtton.appendChild(span4Button);
      span4Button.style.fontSize = ".5em";
      //D I S P L A Y   C H A N G E   T O   N O N E   within functionality
        ctaImg.style.display = "none";
        ctaTextH1.style.display = "none";
        ctaTextP.style.display = "none";
        ctaTextP2.style.display = "none";
        ctaTextBtn.style.display = "none";
        middleImg.style.display = "none";
        topContentH4.forEach(title => {
          title.style.display = "none";
        })
        topContentP.forEach(title => {
          title.style.display = "none";
        })
        bottomContentH4.forEach(title => {
          title.style.display = "none";
        })
        bottomContentP.forEach(title => {
          title.style.display = "none";
        })
        contactH4.style.display = "none";
        contactP.forEach(title => {
          title.style.display = "none";
        })
          event.stopPropagation();
  });  
//------------- ( C H A N G E   B A C K   F U N C T I O N )   S T Y L I N G   A F T E R   B U T T O N   I S   C L I C K E D   T W I C E
  changeAllButtton.addEventListener('dblclick', () => {
    //Task 1: Create selectors to point your data into elements
      logoImg.src = "../img/logo.png"

      ctaImg.setAttribute('src', '../img/header-img.png');

      middleImg.src = '../img/mid-page-accent.jpg';

    //Task 2: Update the HTML with the JSON data
      navContent[0].textContent = "Services";
      navContent[1].textContent = "Product";
      navContent[2].textContent = "Vision";
      navContent[3].textContent = "Features";
      navContent[4].textContent = "About";
      navContent[5].textContent = "Contact";

      ctaTextH1.textContent = "Dom";
      ctaTextP.appendChild(textP);
      elementP.appendChild(ctaTextP);
      ctaTextP2.appendChild(textP2);
      elementP2.appendChild(ctaTextP2);

      ctaTextBtn.textContent = "Get Started";

      topContentH4[0].textContent = "Features";
      topContentP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
      topContentH4[1].textContent = "About";
      topContentP[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

      bottomContentH4[0].textContent = "Services";
      bottomContentP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
      bottomContentH4[1].textContent = "Product";
      bottomContentP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
      bottomContentH4[2].textContent = "Vision";
      bottomContentP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

      contactH4.textContent = "Contact";
      contactP[0].textContent = "123 Way 456 Street Somewhere, USA";
      contactP[0].style.width = "10em";
      contactP[1].textContent = "1 (888) 888-8888";
      contactP[2].textContent = "sales@greatidea.io";
      footerP.textContent = "Copyright Great Idea! 2018";

    // Task 3: Add new content
      navContent.forEach(title => {
        title.style.color = "Green";
      })
      navContentNewItem.textContent = "Legal Terms";
      navContentNewItem2.textContent = "Home";
      navContenti.appendChild(navContentNewItem);
      navContenti.prepend(navContentNewItem2);
      navContentNewItem.href = "#";
      navContentNewItem2.href= "#";
      navContentNewItem.style.color = "Green";
      navContentNewItem2.style.color = "Green";

        //D I S P L A Y   C H A N G E   T O   N O R M A L
          logoImg.style.margin = "28px 0px 30px 91px";
          logoImg.style.width = "auto";
          ctaImg.style.display = "flex";
          ctaTextH1.style.display = "block";
          ctaTextP.style.display = "block";
          ctaTextP2.style.display = "block";
          ctaTextBtn.style.display = "inline";
          middleImg.style.display = "flex";
          topContentH4.forEach(title => {
            title.style.display = "flex";
          })
          topContentP.forEach(title => {
            title.style.display = "flex";
          })
          bottomContentH4.forEach(title => {
            title.style.display = "flex";
          })
          bottomContentP.forEach(title => {
            title.style.display = "flex";
          })
          contactH4.style.display = "flex";
          contactP.forEach(title => {
            title.style.display = "flex";
          })

    //Styling for nav links within CHANGEBACK
      navContent.forEach(title => {
        title.style.fontWeight = "normal";
        title.style.color = "Green";
        title.addEventListener("mouseenter", function( event ) {   
          event.target.style.color = "Green";
          event.target.style.textDecoration = "underline";
          event.stopPropagation();
          })
        title.addEventListener("mouseleave", function( event ) {   
          event.target.style.color = "Green";
          event.target.style.textDecoration = "none";
          event.stopPropagation();
          })
        })
      navContentNewItem.style.fontWeight = "normal";
      navContentNewItem.style.color = "Green";
      navContentNewItem2.style.fontWeight = "normal";
      navContentNewItem2.style.color = "Green";
      navContentNewItem.addEventListener("mouseenter", function( event ) {   
        event.target.style.color = "Green";
        event.target.style.textDecoration = "underline";
        event.stopPropagation();
        })
      navContentNewItem.addEventListener("mouseleave", function( event ) {   
        event.target.style.color = "Green";
        event.target.style.textDecoration = "none";
        event.stopPropagation();
        })
      navContentNewItem2.addEventListener("mouseenter", function( event ) {   
        event.target.style.color = "Green";
        event.target.style.textDecoration = "underline";
        event.stopPropagation();
        })
      navContentNewItem2.addEventListener("mouseleave", function( event ) {   
        event.target.style.color = "Green";
        event.target.style.textDecoration = "none";
        event.stopPropagation();
        })
    //Styling for Footer within CHANGEBACK
      footerP.style.fontWeight = "normal";
    //Styling for BUTTON within CHANGEBACK
      changeAllButtton.style.fontWeight = "normal";
      changeAllButtton.style.backgroundColor = "#000";
      changeAllButtton.style.border = "0.10em solid #008000";
      changeAllButtton.style.color = "#1E90FF";
      span4Button.textContent = "(click once)";
    //STYLE THE BUTTON - MOUSE ENTER within CHANGEBACK
      changeAllButtton.addEventListener("mouseenter", function( event ) {   
      event.target.style.backgroundColor = "#008000";
      event.target.style.border = "0.10em solid #1E90FF";
      changeAllButtton.style.color = "#000";
      })
    //STYLE THE BUTTON - MOUSE LEAVE within CHANGEBACK
      changeAllButtton.addEventListener("mouseleave", function( event ) {   
      event.target.style.backgroundColor = "#000";
      event.target.style.border = "0.10em solid #008000";
      event.target.style.color = "#1E90FF";
      })

  //End of DBL CLICK FUNCTION!!!
  })




  // -------------------- Code I wanted to implement but did not work like I wanted (starts on Line 268-269) ------------------------------------------- \\

    // //  The Office Content within functionality    
      //   const theOfficeContent = document.querySelector('.main-content');
      //   const theOfficeImg = document.createElement('img');
      // //  Michael Scott
      //   const divMichaelScottContent = document.createElement('div');
      //   theOfficeContent.appendChild(divMichaelScottContent);
      //   divMichaelScottContent.style.display = "flex";
      //   divMichaelScottContent.style.justifyContent = "space-between";
      //   const divtheOfficeImg = document.createElement('div');
      //   divMichaelScottContent.appendChild(divtheOfficeImg);
      //   const divtheOfficeP = document.createElement('div');
      //   divMichaelScottContent.appendChild(divtheOfficeP);
      //   theOfficeImg.src = "https://miro.medium.com/max/1072/0*T2ibWIG2fZ4up04E.jpg";
      //   theOfficeImg.style.width = "35em";
      //   theOfficeImg.style.margin = "2em 5em 0 0"; 
      //   divtheOfficeImg.appendChild(theOfficeImg);    
      //   const theOfficeP = document.createElement('p');
      //   theOfficeP.textContent = "Name: Michael Scott";
      //   theOfficeP.style.margin = "2em 0";
      //   divtheOfficeP.appendChild(theOfficeP);
      //   const theOfficeP2 = document.createElement('p');
      //   theOfficeP2.textContent = "Aliases:";
      //   theOfficeP2.style.margin = "2em 0";
      //   divtheOfficeP.appendChild(theOfficeP2);
      //   //  Michael Scott LIST
      //     const theOfficeUL = document.createElement('ul');
      //     divtheOfficeP.appendChild(theOfficeUL);
      //     function createListItem (text) {
      //       const li = document.createElement('li');
      //       li.textContent = text;
      //       return li;
      //     }
      //     const myList = document.querySelector('.main-content ul');
      //     const items = [
      //       createListItem('Ping'),
      //       createListItem('Michael the Magic'),
      //       createListItem('Michael Scarn'),
      //       createListItem('Michael Klump'),
      //       createListItem('Marketing Greatness Michael'),
      //       createListItem('Date Mike'),
      //       createListItem('Mike'),
      //       createListItem('Blind Guy McSqueezy'),
      //       createListItem('Prison Mike'),
      //       createListItem('Caleb Crawdad'),
      //       createListItem('Michael Wonka'),
      //       createListItem('Reginald Poofta'),
      //       createListItem('Michael Scotch'),
      //       createListItem('Classy Santa'),
      //       createListItem('Mykonos'),
      //       createListItem('Spiros'),
      //       createListItem('Orville Tootenbacher'),
      //       createListItem('Jesus Christ'),
      //       createListItem('Johnny Carson'),
      //       createListItem('Michael G Scott'),
      //       createListItem('Michael J Fox'),
      //       createListItem('Mr. Fox'),
      //       createListItem('Nicki Minaj'),
      //       createListItem('The Incredible Mr. Fox'),
      //       createListItem('Santa Bond'),
      //       createListItem('Beyoncé'),
      //       createListItem('Captain Bruisin'),
      //       createListItem('Michael Jackson'),
      //       createListItem("Ryan's (Self Proclaimed) Best Friend"),
      //       createListItem('Mike Tyson'),
      //       createListItem('Dennis the Menace'),
      //       createListItem('Britney Bitch')
      //     ];
      //     items.forEach(function (li) {
      //       myList.appendChild(li);
      //     });
      //     theOfficeUL.style.margin = "2em";