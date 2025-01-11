const scriptURL = 'https://script.google.com/macros/s/AKfycbxGSweTXSIBikZokb2yquFu7NOTkaJJP6_AvajG35E0adQJVzdn3CjqBPgH27N3uTgd7g/exec'
  const form = document.forms['helmut-contact-form'];
  const sentBtn = document.querySelector('.btn-sent');
  const btnLoading = document.querySelector('.btn-loading');
  const myAlert = document.querySelector('.my-alert');


  form.addEventListener('submit', e => {
    e.preventDefault();
    // click submit button 
    // show button loading, remove button send
    btnLoading.classList.toggle('button-active');
    sentBtn.classList.toggle('button-remove');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         // show  sent button, remove button loading 
         btnLoading.classList.toggle('button-active');
         sentBtn.classList.toggle('button-remove');
         // show alert 
         myAlert.classList.toggle('alert-active');
         // reset form 
         form.reset();
        console.log('Success!', response)
    })
      .catch(error => console.error('Error!', error.message))
  })

const darkModeBtn = document.querySelector('#dark-mode-btn');
const setTheme = document.body;
const hamBtn = document.querySelector('.hamburger-btn');
const iconBurger1 = hamBtn.querySelector('.icon-bar1');
const iconBurger2 = hamBtn.querySelector('.icon-bar2');
const iconBurger3 = hamBtn.querySelector('.icon-bar3');
const nav = document.querySelector('.navigation');
const hero = document.querySelector('.hero');

// change color navigation, to scroll 
window.addEventListener('scroll', function() {
      if (window.scrollY > 20) { 
        nav.classList.add('changeBC');
    } else {
        nav.classList.remove('changeBC');
    }
})

// dark-mode-btn 
darkModeBtn.addEventListener('click', function() {
        let theme;
        if( this.classList.contains('dark-active') && setTheme.classList.contains('light-active') ) {
              this.innerHTML = 'Light';
              this.classList.remove('dark-active');
              this.classList.add('light-active');
              setTheme.classList.add('dark-active');
              theme = 'DARK';
              hero.classList.add('bg-dark');
              
        }else {
              this.innerHTML = 'Dark';
               this.classList.remove("light-active");
              this.classList.add("dark-active");
              setTheme.classList.remove('dark-active');
              setTheme.classList.add('light-active');
              theme = 'LIGHT';
               hero.classList.remove('bg-dark');

        }
         localStorage.setItem("PageTheme", JSON.stringify(theme));
});
let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
// console.log(getTheme); 
if(getTheme === "DARK") {
      setTheme.classList = 'dark-active';
      darkModeBtn.classList = 'light-active';
      darkModeBtn.innerHTML = 'Light';
      hero.classList.add('bg-dark')
}

// hamburger button 
hamBtn.addEventListener('click', function() {
       const navMenu = document.querySelector('.nav-menu');
       const navLink = document.querySelectorAll('.nav-link');
       iconBurger1.classList.toggle('active');
       iconBurger2.classList.toggle('active');
       iconBurger3.classList.toggle('active');
       navMenu.classList.toggle('active');
       
       for( let i = 0; i < navLink.length; i++) {
            navLink[i].addEventListener('click', function() {
                 if( navMenu.classList.contains('active')) {
                     hamBtn.click();
                 }
            });
       }
});

// tabs 
// const tab = document.querySelector('.skills-button');
// const tabButton = document.querySelectorAll('.tab-button');
// const list = document.querySelectorAll('.list');

// tab.addEventListener('click', function(e) {
//     const id = e.target.dataset.id;
//     if( id ) {
//           for(let i = 0; i < tabButton.length; i++) { 
//                tabButton[i].classList.remove('active');
//           }
//           e.target.classList.add('active');
//              for(let i = 0; i < list.length; i++) { 
//                list[i].classList.remove('active');
//           }
//           const element = document.getElementById(id);
//             element.classList.add("active");
//     }
// });


