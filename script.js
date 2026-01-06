document.addEventListener('DOMContentLoaded', () => {
	// ========== GESTION DU THÈME CLAIR/SOMBRE ==========
	const themeToggle = document.getElementById('themeToggle');
	const themeIcon = document.querySelector('.theme-icon');
	const html = document.documentElement;

	const savedTheme = localStorage.getItem('theme') || 'light';
	html.setAttribute('data-theme', savedTheme);
	if (themeIcon) {
		themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
	}

	if (themeToggle && themeIcon) {
		themeToggle.addEventListener('click', () => {
			const currentTheme = html.getAttribute('data-theme');
			const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

			html.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
		});
	}

	// ========== COMPTEUR DE VISITES ==========
	const visitCounter = document.getElementById('visitCounter');

	if (visitCounter) {
		let visits = parseInt(localStorage.getItem('visits') || '0', 10);
		visits++;
		localStorage.setItem('visits', visits.toString());

		let currentCount = 0;
		const duration = 2000;
		const increment = visits / (duration / 16);

		const animateCounter = () => {
			currentCount += increment;
			if (currentCount < visits) {
				visitCounter.textContent = Math.floor(currentCount);
				requestAnimationFrame(animateCounter);
			} else {
				visitCounter.textContent = visits;
			}
		};
		animateCounter();
	}

	// ========== ANIMATIONS AU SCROLL ==========
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, observerOptions);

	document
		.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-in-up')
		.forEach((el) => {
			el.style.opacity = '0';
			el.style.transform = 'translateY(20px)';
			observer.observe(el);
		});

	// ========== CARROUSEL DE PROJETS ==========
	const carousel = document.querySelector('.projects-carousel');
	const prevBtn = document.querySelector('.carousel-prev');
	const nextBtn = document.querySelector('.carousel-next');
	const indicatorsContainer = document.getElementById('carouselIndicators');
	const projectCards = document.querySelectorAll('.project-card');

	let currentIndex = 0;
	let visibleCards = Array.from(projectCards); // au départ : tous les projets

	function goToSlide(index) {
		if (!carousel || visibleCards.length === 0) return;

		currentIndex = Math.max(0, Math.min(index, visibleCards.length - 1));
		const offset = -currentIndex * 100;
		carousel.style.transform = `translateX(${offset}%)`;

		updateIndicators();
		updateNavButtonsState();
	}

	function createIndicators() {
		if (!indicatorsContainer) return;

		indicatorsContainer.innerHTML = '';

		if (visibleCards.length <= 1) {
			indicatorsContainer.style.display = 'none';
			return;
		}

		indicatorsContainer.style.display = 'flex';

		visibleCards.forEach((_, index) => {
			const indicator = document.createElement('div');
			indicator.classList.add('indicator');
			if (index === currentIndex) {
				indicator.classList.add('active');
			}
			indicator.addEventListener('click', () => goToSlide(index));
   				indicatorsContainer.appendChild(indicator);
		});
	}

	function updateIndicators() {
		if (!indicatorsContainer) return;

		const indicators = indicatorsContainer.querySelectorAll('.indicator');
		indicators.forEach((indicator, index) => {
			indicator.classList.toggle('active', index === currentIndex);
		});
	}

	function updateNavButtonsState() {
		const canNavigate = visibleCards.length > 1;

		if (prevBtn) {
			prevBtn.disabled = !canNavigate || currentIndex === 0;
		}
		if (nextBtn) {
			nextBtn.disabled = !canNavigate || currentIndex === visibleCards.length - 1;
		}
	}

	if (prevBtn) {
		prevBtn.addEventListener('click', () => {
			if (visibleCards.length === 0) return;
			if (currentIndex > 0) {
				goToSlide(currentIndex - 1);
			}
		});
	}

	if (nextBtn) {
		nextBtn.addEventListener('click', () => {
			if (visibleCards.length === 0) return;
			if (currentIndex < visibleCards.length - 1) {
				goToSlide(currentIndex + 1);
			}
		});
	}

	// ========== FILTRAGE DES PROJETS ==========
	const filterBtns = document.querySelectorAll('.filter-btn');

	filterBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			// bouton actif
			filterBtns.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');

			const filter = btn.getAttribute('data-filter');

			if (filter === 'all') {
				// montrer tous les projets
				projectCards.forEach(card => {
					card.classList.remove('hidden');
				});
				visibleCards = Array.from(projectCards);
			} else {
				visibleCards = Array.from(projectCards).filter(card => {
					const category = card.getAttribute('data-category');
					const match = category === filter;
					card.classList.toggle('hidden', !match);
					return match;
				});
			}

			// aucune carte visible
			if (visibleCards.length === 0) {
				currentIndex = 0;
				if (carousel) {
					carousel.style.transform = 'translateX(0)';
				}
				if (indicatorsContainer) {
					indicatorsContainer.innerHTML = '';
					indicatorsContainer.style.display = 'none';
				}
				updateNavButtonsState();
				return;
			}

			// revenir au début, régénérer indicateurs
			currentIndex = 0;
			goToSlide(0);
			createIndicators();
			updateNavButtonsState();
		});
	});

	// Initialisation du carrousel
	createIndicators();
	updateNavButtonsState();
	goToSlide(0);

	// ========== FORMULAIRE DE CONTACT ==========
	const contactForm = document.getElementById('contactForm');
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const messageInput = document.getElementById('message');
	const formSuccess = document.getElementById('formSuccess');

	function validateName() {
		const nameError = document.getElementById('nameError');
		if (!nameInput) return false;
		if (nameInput.value.trim().length < 2) {
			nameInput.classList.add('error');
			if (nameError) {
				nameError.textContent = 'Le nom doit contenir au moins 2 caractères';
			}
			return false;
		} else {
			nameInput.classList.remove('error');
			if (nameError) {
				nameError.textContent = '';
			}
			return true;
		}
	}

	function validateEmail() {
		const emailError = document.getElementById('emailError');
		if (!emailInput) return false;

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(emailInput.value)) {
			emailInput.classList.add('error');
			if (emailError) {
				emailError.textContent = 'Veuillez entrer une adresse email valide';
			}
			return false;
		} else {
			emailInput.classList.remove('error');
			if (emailError) {
				emailError.textContent = '';
			}
			return true;
		}
	}

	function validateMessage() {
		const messageError = document.getElementById('messageError');
		if (!messageInput) return false;
		if (messageInput.value.trim().length < 10) {
			messageInput.classList.add('error');
			if (messageError) {
				messageError.textContent = 'Le message doit contenir au moins 10 caractères';
			}
			return false;
		} else {
			messageInput.classList.remove('error');
			if (messageError) {
				messageError.textContent = '';
			}
			return true;
		}
	}

	if (nameInput) {
		nameInput.addEventListener('input', validateName);
	}

	if (emailInput) {
		emailInput.addEventListener('input', validateEmail);
	}

	if (messageInput) {
		messageInput.addEventListener('input', validateMessage);
	}

	if (contactForm) {
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();

			const isNameValid = validateName();
			const isEmailValid = validateEmail();
			const isMessageValid = validateMessage();

			if (isNameValid && isEmailValid && isMessageValid) {
				if (formSuccess) {
					formSuccess.style.display = 'block';
				}

				contactForm.reset();

				setTimeout(() => {
					if (formSuccess) {
						formSuccess.style.display = 'none';
					}
				}, 5000);
			}
		});
	}

	// ========== NAVIGATION FLUIDE ==========
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (!href || href === '#') return;
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
});