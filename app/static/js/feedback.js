document.addEventListener('DOMContentLoaded', function() {
	const fadeElements = document.querySelectorAll('.fade-in');
	const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
					if (entry.isIntersecting) {
							entry.target.classList.add('is-visible');
					}
			});
	}, { threshold: 0.1 });
	fadeElements.forEach(element => observer.observe(element));

	const fileInput = document.querySelector('.file-input');
	const fileName = document.querySelector('.file-name');
	fileInput.addEventListener('change', (e) => {
			if (e.target.files.length > 0) {
					fileName.textContent = e.target.files[0].name;
			} else {
					fileName.textContent = 'No file uploaded';
			}
	});
});