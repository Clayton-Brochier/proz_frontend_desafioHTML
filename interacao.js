document.addEventListener('DOMContentLoaded', function() {
	const navbar = document.getElementById('navbar');
	window.addEventListener('scroll', function() {
		if (window.pageYOffset > 0) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});
});