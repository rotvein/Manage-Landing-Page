import '/src/scss/style.scss';


const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const iconHamburger = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');
const primaryNavigation = document.querySelector('.primary-navigation');
const backdrop = document.querySelector('.backdrop');

function toggleHamburger() {	
	console.log(iconClose.style.display)
	if (iconClose.style.display === 'none') {
		iconClose.style.display = 'block';
		iconHamburger.style.display = 'none';
		backdrop.style.display = 'block';
	} else {
		iconClose.style.display = 'none';
		iconHamburger.style.display = 'block';
		backdrop.style.display = 'none';
	}
	primaryNavigation.toggleAttribute('data-visible');
	console.log('1.5')
	
	
}

mobileNavMenu.addEventListener('click', toggleHamburger);



const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
	//arrows: true,
	responsive: {
		480: {
			dots: false
		},
		1440: {
			slidesToShow: 3
		}
	}
  });	