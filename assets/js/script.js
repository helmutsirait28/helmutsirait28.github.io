const darkModeBtn = document.querySelector('#dark-mode-btn');
const setTheme = document.body;
const hamBtn = document.querySelector('.hamburger-btn');
const iconBurger1 = hamBtn.querySelector('.icon-bar1');
const iconBurger2 = hamBtn.querySelector('.icon-bar2');
const iconBurger3 = hamBtn.querySelector('.icon-bar3');

// dark-mode-btn 
darkModeBtn.addEventListener('click', function() {
        let theme;
        if( this.classList.contains('dark-active') && setTheme.classList.contains('light-active') ) {
              this.innerHTML = 'light';
              this.classList.remove('dark-active');
              this.classList.add('light-active');
              setTheme.classList.add('dark-active');
              theme = 'DARK';
        }else {
              this.innerHTML = 'dark';
               this.classList.remove("light-active");
              this.classList.add("dark-active");
              setTheme.classList.remove('dark-active');
              setTheme.classList.add('light-active');
              theme = 'LIGHT';
        }
         localStorage.setItem("PageTheme", JSON.stringify(theme));
});
let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
// console.log(getTheme); 
if(getTheme === "DARK") {
      document.body.classList = 'dark-active';
      darkModeBtn.classList = 'light-active';
      darkModeBtn.innerHTML = 'light';
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