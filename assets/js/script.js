// dark-mode-btn 
const darkModeBtn = document.querySelector('.dark-mode-btn');
darkModeBtn.addEventListener('click', function() {
        if( this.classList.contains('dark-active') ) {
              this.innerHTML = 'lightMode';
              this.classList.remove('dark-active');
              this.classList.add('light-active');
        }else {
              this.innerHTML = 'darkMode';
               this.classList.remove("light-active");
              this.classList.add("dark-active");
        }
});