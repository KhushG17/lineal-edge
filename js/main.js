const headerFallback = `
<nav class="navbar is-transparent" id="navbar">
	<a data-link="index.html" class="nav-logo" aria-label="Lineal Edge home">
		<img data-src="assets/icons/logo-dark.svg" alt="Lineal Edge" class="nav-logo-dark" />
		<img data-src="assets/icons/logo-light.svg" alt="Lineal Edge" class="nav-logo-light" />
	</a>
	<button class="nav-toggle" id="navToggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navLinks">
		<span></span>
		<span></span>
		<span></span>
	</button>
	<div class="nav-links" id="navLinks">
		<a data-link="about.html" data-page-link="about" class="nav-link">About</a>
		<a data-link="services.html" data-page-link="services" class="nav-link">Services</a>
		<a data-link="careers.html" data-page-link="careers" class="nav-link">Careers</a>
		<a data-link="contact.html" data-page-link="contact" class="nav-link">Contact</a>
		<a data-link="policies/faq.html" data-page-link="faq" class="nav-link">FAQ</a>
		<a data-link="policies/disclosure.html" data-page-link="disclosure" class="nav-link">Disclosure</a>
		<div class="nav-login" id="navLogin">
			<button class="nav-login-toggle" id="navLoginToggle" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="navLoginMenu">
				<span>Login</span>
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
			</button>
			<div class="nav-login-menu" id="navLoginMenu" role="menu" aria-label="Login portals">
				<a data-link="contact.html" class="portal-link" role="menuitem">
					<span class="portal-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/></svg></span>
					<span class="portal-copy"><span class="portal-title">Client Portal</span></span>
					<span class="portal-arrow" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
				</a>
				<a data-link="contact.html" class="portal-link" role="menuitem">
					<span class="portal-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
					<span class="portal-copy"><span class="portal-title">Advisor Portal</span></span>
					<span class="portal-arrow" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
				</a>
			</div>
		</div>
	</div>
</nav>`;

const footerFallback = `
<footer class="footer">
	<div class="footer-inner">
		<div class="footer-brand">
			<div class="footer-logo">
				<svg width="30" height="30" viewBox="0 0 1212 1212" fill="none" aria-hidden="true"><rect x="865.719" y="432.857" width="346.282" height="346.286" fill="#2AC558"/><path d="M1211.99 346.286H1125.42V346.186H779.417V717.62H779.134V779.143H432.852V717.62H432.566V311.634H432.847V0H1211.99V346.286Z" fill="white"/><path d="M346.282 173.143H346.186V865.715H346.282V865.796H692.371V866H1038.84V865.715H1211.98V1212H658.856V1211.98H346.282V1212H0V0H346.282V173.143Z" fill="white"/></svg>
				Lineal Edge
			</div>
			<p class="footer-tagline">Legacy Personal Finance Solutions.</p>
			<p class="footer-arn">AMFI-Registered Mutual Fund Distributor · ARN-342205</p>
			<div class="footer-social">
				<a href="https://www.facebook.com/people/Lineal-Edge/61573251729745/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.3V11H8v3h2.7v8h2.8z"/></svg></a>
				<a href="https://www.linkedin.com/company/lineal-edge/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg></a>
				<a href="https://www.instagram.com/linealedge/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
				<a href="https://x.com/LinealEdge" target="_blank" rel="noopener noreferrer" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
			</div>
		</div>
		<div class="footer-col"><h4>Company</h4><div class="footer-col-body"><a data-link="about.html" class="footer-link">About Us</a><a data-link="services.html" class="footer-link">Services</a><a data-link="careers.html" class="footer-link">Careers</a><a data-link="contact.html" class="footer-link">Contact</a></div></div>
		<div class="footer-col"><h4>Policies</h4><div class="footer-col-body"><a data-link="policies/faq.html" class="footer-link">FAQs</a><a data-link="policies/disclosure.html" class="footer-link">Disclosure</a><a data-link="policies/privacy-policy.html" class="footer-link">Privacy Policy</a><a data-link="policies/terms-of-service.html" class="footer-link">Terms of Service</a></div></div>
		<div class="footer-col"><h4>Get in Touch</h4><div class="footer-col-body"><a href="mailto:info@linealedge.com" class="footer-link">info@linealedge.com</a><a href="tel:+919828024449" class="footer-link">+91-9828024449</a><a href="https://maps.app.goo.gl/hKuiCi1wMzkyhKz19" target="_blank" rel="noopener noreferrer" class="footer-link">385 Gurunanak Pura,<br>Adarsh Nagar, Jaipur-302004</a></div></div>
	</div>
	<div class="footer-bottom"><span>© 2026 Lineal Edge. All rights reserved.</span><div class="footer-bottom-links"><a data-link="policies/disclosure.html">Disclosure</a><a data-link="policies/faq.html">FAQs</a></div></div>
</footer>`;

const routeLoaderLogoMarkup = `
<svg class="route-loader-logo" viewBox="260 760 340 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
	<rect class="logo-part-s" x="488.977" y="886.934" width="83.2336" height="83.1465" fill="#2AC558"></rect>
	<path class="logo-part-e" d="M572.201 866.147H551.392V866.122H468.226V955.307H468.158V970.079H384.924V955.307H384.855V857.826H384.923V783H572.201V866.147Z" fill="rgba(10,20,40,0.90)"></path>
	<path class="logo-part-l" d="M364.234 824.573H364.21V990.866H364.234V990.886H447.421V990.935H530.699V990.866H572.315V1074.01H439.365V1074.01H364.234V1074.01H281V783H364.234V824.573Z" fill="rgba(10,20,40,0.90)"></path>
</svg>`;

function prefixRoot(root, value) {
	return value.startsWith('mailto:') || value.startsWith('tel:') || value.startsWith('http') || value.startsWith('#') ? value : `${root}${value}`;
}

async function loadInclude(name, root) {
	try {
		const response = await fetch(`${root}${name}.html`);
		if (!response.ok) throw new Error(`Failed to load ${name}`);
		return await response.text();
	} catch {
		return name === 'header' ? headerFallback : footerFallback;
	}
}

function hydrateInclude(container, root) {
	container.querySelectorAll('[data-link]').forEach((node) => {
		node.setAttribute('href', prefixRoot(root, node.getAttribute('data-link')));
	});
	container.querySelectorAll('[data-src]').forEach((node) => {
		node.setAttribute('src', prefixRoot(root, node.getAttribute('data-src')));
	});
}

function getRouteLoaderTheme(page) {
	if (page === 'services') return 'services';
	if (page === 'about') return 'about';
	if (page === 'careers') return 'careers';
	if (page === 'contact') return 'contact';
	if (page === 'disclosure' || page === 'faq' || page === 'privacy' || page === 'terms') return 'info';
	return 'default';
}

function createRouteLoader() {
	if (document.body.classList.contains('page-home')) return null;
	const existing = document.getElementById('routeLoader');
	if (existing) return existing;

	const loader = document.createElement('div');
	loader.id = 'routeLoader';
	loader.className = `route-loader route-loader--${getRouteLoaderTheme(document.body.dataset.page || 'default')}`;
	loader.setAttribute('aria-hidden', 'true');
	loader.innerHTML = `<div class="route-loader-core">${routeLoaderLogoMarkup}</div>`;
	document.body.appendChild(loader);
	return loader;
}

function showRouteLoader(loader) {
	if (!loader) return;
	document.body.classList.add('route-loader-active');
	loader.setAttribute('aria-hidden', 'false');
	window.requestAnimationFrame(() => {
		loader.classList.add('is-visible');
	});
}

function hideRouteLoader(loader) {
	if (!loader) return;
	loader.classList.remove('is-visible');
	loader.setAttribute('aria-hidden', 'true');
	window.setTimeout(() => {
		document.body.classList.remove('route-loader-active');
	}, 180);
}

function initRouteLoaderNavigation(loader) {
	if (!loader) return;
	document.addEventListener('click', (event) => {
		const link = event.target.closest('a[href]');
		if (!link) return;
		if (event.defaultPrevented || event.button !== 0) return;
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		if (link.target === '_blank' || link.hasAttribute('download')) return;

		const href = link.getAttribute('href');
		if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;

		const destination = new URL(link.href, window.location.href);
		const current = new URL(window.location.href);
		if (destination.pathname === current.pathname && destination.hash) return;

		event.preventDefault();
		showRouteLoader(loader);
		window.setTimeout(() => {
			window.location.href = link.href;
		}, 80);
	});
}

async function loadShell() {
	const root = document.body.dataset.root || '';
	const headerMount = document.querySelector('[data-include="header"]');
	const footerMount = document.querySelector('[data-include="footer"]');
	const tasks = [];

	if (headerMount) {
		tasks.push(loadInclude('header', root).then((html) => {
			headerMount.innerHTML = html;
			hydrateInclude(headerMount, root);
		}));
	}

	if (footerMount) {
		tasks.push(loadInclude('footer', root).then((html) => {
			footerMount.innerHTML = html;
			hydrateInclude(footerMount, root);
		}));
	}

	await Promise.all(tasks);
}

function setActiveNav() {
	const page = document.body.dataset.page;
	if (!page) return;
	document.querySelectorAll('[data-page-link]').forEach((link) => {
		const active = link.getAttribute('data-page-link') === page;
		link.classList.toggle('is-active', active);
		if (active) link.setAttribute('aria-current', 'page');
		else link.removeAttribute('aria-current');
	});
}

function initNav() {
	const nav = document.getElementById('navbar');
	const navLogin = document.getElementById('navLogin');
	const navLoginToggle = document.getElementById('navLoginToggle');
	const navToggle = document.getElementById('navToggle');
	const navLinks = document.getElementById('navLinks');
	if (!nav) return;

	const updateNav = () => {
		if (window.scrollY > 56) {
			nav.classList.remove('is-transparent');
			nav.classList.add('is-solid');
		} else {
			nav.classList.add('is-transparent');
			nav.classList.remove('is-solid');
		}
	};

	updateNav();
	window.addEventListener('scroll', updateNav, { passive: true });

	const setMobileNav = (isOpen) => {
		if (!navLinks || !navToggle) return;
		nav.classList.toggle('nav-open', isOpen);
		navLinks.classList.toggle('is-open', isOpen);
		navToggle.setAttribute('aria-expanded', String(isOpen));
	};

	if (navToggle && navLinks) {
		navToggle.addEventListener('click', (event) => {
			event.stopPropagation();
			setMobileNav(!navLinks.classList.contains('is-open'));
		});

		navLinks.querySelectorAll('a').forEach((link) => {
			link.addEventListener('click', () => setMobileNav(false));
		});

		document.addEventListener('click', (event) => {
			if (!nav.contains(event.target)) setMobileNav(false);
		});

		window.addEventListener('resize', () => {
			if (window.innerWidth > 680) setMobileNav(false);
		});
	}

	if (!navLogin || !navLoginToggle) return;

	let closeTimer = null;
	const setLoginMenu = (isOpen) => {
		if (closeTimer) {
			clearTimeout(closeTimer);
			closeTimer = null;
		}
		navLogin.classList.toggle('is-open', isOpen);
		navLoginToggle.setAttribute('aria-expanded', String(isOpen));
	};

	navLogin.addEventListener('mouseenter', () => setLoginMenu(true));
	navLogin.addEventListener('mouseleave', () => {
		closeTimer = window.setTimeout(() => setLoginMenu(false), 140);
	});
	navLogin.addEventListener('focusin', () => setLoginMenu(true));
	navLogin.addEventListener('focusout', (event) => {
		if (!navLogin.contains(event.relatedTarget)) setLoginMenu(false);
	});
	navLoginToggle.addEventListener('click', (event) => {
		event.stopPropagation();
		setLoginMenu(!navLogin.classList.contains('is-open'));
	});
	document.addEventListener('click', (event) => {
		if (!navLogin.contains(event.target)) setLoginMenu(false);
	});
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') setLoginMenu(false);
	});
}

function initRevealAnimations() {
	const autoReveal = [
		'.section-title',
		'.story-card',
		'.mission-card',
		'.team-card',
		'.solution',
		'.services-card',
		'.service-card',
		'.faq-item',
		'.blueprint-card',
		'.contact-panel',
		'.contact-card',
		'.opportunity-card',
		'.home-story-card',
		'.home-journey-card',
		'.home-service-panel',
		'.home-team-card'
	];

	document.querySelectorAll(autoReveal.join(',')).forEach((node) => {
		if (!node.classList.contains('fade-in') && !node.classList.contains('slide-up')) {
			node.classList.add('slide-up');
		}
	});

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

	document.querySelectorAll('.fade-in, .slide-up').forEach((node) => observer.observe(node));
}

function initAboutJourney() {
	const scroller = document.getElementById('journeyScroller');
	const panels = document.querySelectorAll('.journey-panel');
	const markers = document.querySelectorAll('.journey-year-marker');
	const yearsFill = document.getElementById('journeyYearsFill');
	const treeViz = document.querySelector('.journey-tree-viz');
	const orgTrunk = document.querySelector('.tree-trunk-org');
	const orgBranches = document.querySelector('.tree-branches-org');
	const orgFoliage = document.querySelector('.tree-foliage-org');
	if (!scroller || !panels.length || !markers.length || !yearsFill || !orgTrunk || !orgBranches || !orgFoliage) return;

	function setStage(idx) {
		panels.forEach((panel) => panel.classList.toggle('active', Number(panel.dataset.idx) === idx));
		markers.forEach((marker) => marker.classList.toggle('active', Number(marker.dataset.idx) === idx));
		if (treeViz) treeViz.dataset.treeStage = String(idx);
		yearsFill.style.setProperty('--fill', idx === 0 ? 0 : idx === 1 ? 0.5 : 1);
		orgTrunk.classList.remove('s1', 's2');
		orgBranches.classList.remove('s1', 's2');
		orgFoliage.classList.remove('s1', 's2');
		if (idx >= 1) { orgTrunk.classList.add('s1'); orgBranches.classList.add('s1'); orgFoliage.classList.add('s1'); }
		if (idx >= 2) { orgTrunk.classList.add('s2'); orgBranches.classList.add('s2'); orgFoliage.classList.add('s2'); }
	}

	markers.forEach((marker) => {
		marker.addEventListener('click', () => {
			const idx = Number(marker.dataset.idx);
			const rect = scroller.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const target = window.scrollY + rect.top + (total * (idx / 2));
			window.scrollTo({ top: target, behavior: 'smooth' });
		});
	});

	let currentIdx = 0;
	const onScroll = () => {
		const rect = scroller.getBoundingClientRect();
		const total = rect.height - window.innerHeight;
		if (rect.top > 0 || rect.bottom <= window.innerHeight) {
			if (rect.top > 0 && currentIdx !== 0) { currentIdx = 0; setStage(0); }
			else if (rect.bottom <= window.innerHeight && currentIdx !== 2) { currentIdx = 2; setStage(2); }
			return;
		}
		const progress = Math.max(0, Math.min(1, -rect.top / total));
		const idx = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;
		if (idx !== currentIdx) {
			currentIdx = idx;
			setStage(idx);
		}
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
}

function initHomeIntro() {
	if (!document.body.classList.contains('page-home')) return;

	let hardReloadRequested = false;
	const navEntry = performance.getEntriesByType('navigation')[0];
	const isReload = !!(navEntry && navEntry.type === 'reload');
	const shouldSkipIntro = (window.location.hash && window.location.hash !== '#') || (isReload && sessionStorage.getItem('linealEdgeHardReload') !== '1') || sessionStorage.getItem('linealEdgeSkipIntro') === '1';
	sessionStorage.removeItem('linealEdgeSkipIntro');
	sessionStorage.removeItem('linealEdgeHardReload');

	if (shouldSkipIntro) {
		document.body.classList.add('home-intro-skip');
		document.body.classList.remove('home-intro-pending');
	} else {
		document.body.classList.add('home-intro-pending');
		document.body.classList.remove('home-intro-skip');
		window.setTimeout(() => {
			document.body.classList.remove('home-intro-pending');
		}, 4050);
	}

	window.addEventListener('keydown', (event) => {
		const key = event.key.toLowerCase();
		const isReloadKey = event.key === 'F5' || ((event.ctrlKey || event.metaKey) && key === 'r');
		const isHardReloadKey = event.key === 'F5' ? event.ctrlKey : ((event.ctrlKey || event.metaKey) && event.shiftKey && key === 'r');
		if (!isReloadKey) return;
		hardReloadRequested = isHardReloadKey;
		sessionStorage.setItem('linealEdgeHardReload', hardReloadRequested ? '1' : '0');
	});

	window.addEventListener('beforeunload', () => {
		if (window.location.hash || window.scrollY > 20 || !hardReloadRequested) {
			sessionStorage.setItem('linealEdgeSkipIntro', '1');
		}
		if (hardReloadRequested) {
			sessionStorage.setItem('linealEdgeHardReload', '1');
		}
	});

	window.addEventListener('pageshow', () => {
		if (window.location.hash || window.scrollY > 20) {
			document.body.classList.add('home-intro-skip');
			document.body.classList.remove('home-intro-pending');
		}
	});
}

function initHomeJourney() {
	const scroller = document.getElementById('journeyScroller');
	const panels = document.querySelectorAll('.journey-panel');
	const markers = document.querySelectorAll('.journey-year-marker');
	const yearsFill = document.getElementById('journeyYearsFill');
	const treeViz = document.querySelector('.journey-tree-viz');
	const orgTrunk = document.querySelector('.tree-trunk-org');
	const orgBranches = document.querySelector('.tree-branches-org');
	const orgFoliage = document.querySelector('.tree-foliage-org');
	if (!scroller || !panels.length || !markers.length || !yearsFill || !orgTrunk || !orgBranches || !orgFoliage) return;

	function setStage(idx) {
		panels.forEach((panel) => panel.classList.toggle('active', Number(panel.dataset.idx) === idx));
		markers.forEach((marker) => marker.classList.toggle('active', Number(marker.dataset.idx) === idx));
		if (treeViz) treeViz.dataset.treeStage = String(idx);
		yearsFill.style.setProperty('--fill', idx === 0 ? 0 : idx === 1 ? 0.5 : 1);
		orgTrunk.classList.remove('s1', 's2');
		orgBranches.classList.remove('s1', 's2');
		orgFoliage.classList.remove('s1', 's2');
		if (idx >= 1) { orgTrunk.classList.add('s1'); orgBranches.classList.add('s1'); orgFoliage.classList.add('s1'); }
		if (idx >= 2) { orgTrunk.classList.add('s2'); orgBranches.classList.add('s2'); orgFoliage.classList.add('s2'); }
	}

	markers.forEach((marker) => {
		marker.addEventListener('click', () => {
			const idx = Number(marker.dataset.idx);
			const rect = scroller.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const target = window.scrollY + rect.top + (total * (idx / 2));
			window.scrollTo({ top: target, behavior: 'smooth' });
		});
	});

	let currentIdx = 0;
	const onScroll = () => {
		const rect = scroller.getBoundingClientRect();
		const total = rect.height - window.innerHeight;
		if (rect.top > 0 || rect.bottom <= window.innerHeight) {
			if (rect.top > 0 && currentIdx !== 0) { currentIdx = 0; setStage(0); }
			else if (rect.bottom <= window.innerHeight && currentIdx !== 2) { currentIdx = 2; setStage(2); }
			return;
		}
		const progress = Math.max(0, Math.min(1, -rect.top / total));
		const idx = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;
		if (idx !== currentIdx) {
			currentIdx = idx;
			setStage(idx);
		}
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();
}

function initHomeValues() {
	const valuesSection = document.getElementById('values');
	if (!valuesSection) return;
	const scroller = document.getElementById('valuesScroller');
	const panels = valuesSection.querySelectorAll('.values-panel');
	const dots = valuesSection.querySelectorAll('.values-progress-dot');
	if (!scroller || !panels.length || !dots.length) return;

	let currentIdx = 0;
	let ticking = false;

	function setStage(idx) {
		if (idx === currentIdx) return;
		currentIdx = idx;
		valuesSection.dataset.phase = idx;
		panels.forEach((panel) => panel.classList.toggle('active', Number(panel.dataset.idx) === idx));
		dots.forEach((dot) => dot.classList.toggle('active', Number(dot.dataset.idx) === idx));
	}

	dots.forEach((dot) => {
		dot.addEventListener('click', () => {
			const idx = Number(dot.dataset.idx);
			const rect = scroller.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const target = window.scrollY + rect.top + (total * (idx / 2));
			window.scrollTo({ top: target, behavior: 'smooth' });
		});
	});

	function updateValuesStage() {
		const rect = scroller.getBoundingClientRect();
		const total = rect.height - window.innerHeight;
		if (rect.top > 0 || rect.bottom <= window.innerHeight) {
			if (rect.top > 0 && currentIdx !== 0) setStage(0);
			else if (rect.bottom <= window.innerHeight && currentIdx !== 2) setStage(2);
			return;
		}
		const progress = Math.max(0, Math.min(1, -rect.top / total));
		const idx = progress < 0.34 ? 0 : progress < 0.67 ? 1 : 2;
		setStage(idx);
	}

	function onScroll() {
		if (ticking) return;
		ticking = true;
		window.requestAnimationFrame(() => {
			updateValuesStage();
			ticking = false;
		});
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	updateValuesStage();
}

function initContactForm() {
	const form = document.getElementById('contactForm');
	if (!form) return;

	const status = document.getElementById('contactFormStatus');
	const requiredFields = Array.from(form.querySelectorAll('[required]'));
	const emailField = form.querySelector('input[type="email"]');
	const phoneField = form.querySelector('input[type="tel"]');
	const honeypot = form.querySelector('input[name="company"]');
	const submitButton = form.querySelector('button[type="submit"]');
	const endpoint = form.dataset.endpoint || '';
	const recaptchaSiteKey = form.dataset.recaptchaSiteKey || '';
	const pageField = form.querySelector('#contact-page');
	const submittedAtField = form.querySelector('#contact-submitted-at');
	const recaptchaField = form.querySelector('#contact-recaptcha-token');

	let recaptchaPromise = null;
	let iframeTarget = null;
	let iframeCounter = 0;

	const getFieldLabel = (field) => {
		const label = form.querySelector(`label[for="${field.id}"]`);
		if (!label) return 'This field';
		return label.textContent.replace('*', '').trim();
	};

	const withTimeout = (promise, ms, message) => {
		let timeoutId;
		const timeout = new Promise((_, reject) => {
			timeoutId = window.setTimeout(() => reject(new Error(message)), ms);
		});

		return Promise.race([promise, timeout]).finally(() => {
			window.clearTimeout(timeoutId);
		});
	};

	const setStatus = (message, isError = false) => {
		if (!status) return;
		status.textContent = message;
		status.classList.toggle('is-error', isError);
	};

	const setSubmitting = (isSubmitting) => {
		if (!submitButton) return;
		submitButton.disabled = isSubmitting;
		submitButton.classList.toggle('is-loading', isSubmitting);
	};

	const validateField = (field) => {
		const value = field.value.trim();
		let valid = true;
		let message = '';

		if (field.required && !value) {
			valid = false;
			message = `${getFieldLabel(field)} is required.`;
		}
		if (valid && field === emailField && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			valid = false;
			message = 'Enter a valid email address.';
		}
		if (valid && field === phoneField) {
			const digits = value.replace(/\D/g, '');
			if (!/^[0-9+()\-\s]{7,20}$/.test(value) || digits.length < 7 || digits.length > 15) {
				valid = false;
				message = 'Enter a valid phone number.';
			}
		}

		field.setAttribute('aria-invalid', String(!valid));
		const error = form.querySelector(`[data-error-for="${field.id}"]`);
		if (error) error.textContent = message;
		return valid;
	};

	requiredFields.forEach((field) => {
		field.addEventListener('input', () => {
			if (field.getAttribute('aria-invalid') === 'true') validateField(field);
			if (status && status.classList.contains('is-error')) setStatus('');
		});
		field.addEventListener('blur', () => validateField(field));
	});

	form.querySelectorAll('input, textarea').forEach((field) => {
		field.addEventListener('input', () => {
			const error = form.querySelector(`[data-error-for="${field.id}"]`);
			if (error && field.getAttribute('aria-invalid') !== 'true') error.textContent = '';
		});
	});

	if (phoneField) {
		phoneField.addEventListener('input', () => {
			phoneField.value = phoneField.value.replace(/[^\d+()\-\s]/g, '');
		});
	}

	const loadRecaptcha = () => {
		if (!recaptchaSiteKey) return Promise.resolve(null);
		if (window.grecaptcha) return Promise.resolve(window.grecaptcha);
		if (recaptchaPromise) return recaptchaPromise;

		recaptchaPromise = new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`;
			script.async = true;
			script.defer = true;
			script.onload = () => resolve(window.grecaptcha || null);
			script.onerror = () => reject(new Error('Unable to load verification.'));
			document.head.appendChild(script);
		});

		return withTimeout(recaptchaPromise, 8000, 'Verification could not load. Please refresh and try again.');
	};

	if (recaptchaSiteKey) {
		loadRecaptcha().catch(() => {});
	}

	const getRecaptchaToken = async () => {
		const grecaptcha = await loadRecaptcha();
		if (!grecaptcha || !recaptchaSiteKey) return '';

		return withTimeout(new Promise((resolve, reject) => {
			grecaptcha.ready(() => {
				grecaptcha.execute(recaptchaSiteKey, { action: 'contact' })
					.then(resolve)
					.catch(() => reject(new Error('Unable to verify this request.')));
			});
		}), 10000, 'Verification is taking too long. Please refresh and try again.');
	};

	const ensureIframeTarget = () => {
		if (iframeTarget) {
			iframeTarget.remove();
			iframeTarget = null;
		}
		const iframe = document.createElement('iframe');
		iframeCounter += 1;
		iframe.name = `contactFormTarget${iframeCounter}`;
		iframe.title = 'Contact form submission';
		iframe.setAttribute('aria-hidden', 'true');
		iframe.tabIndex = -1;
		iframe.style.position = 'absolute';
		iframe.style.width = '1px';
		iframe.style.height = '1px';
		iframe.style.opacity = '0';
		iframe.style.pointerEvents = 'none';
		iframe.style.left = '-9999px';
		iframe.style.top = '0';
		document.body.appendChild(iframe);
		iframeTarget = iframe;
		return iframeTarget;
	};

	const submitToEndpoint = async () => {
		const token = await getRecaptchaToken();
		if (pageField) pageField.value = window.location.href;
		if (submittedAtField) submittedAtField.value = new Date().toISOString();
		if (recaptchaField) recaptchaField.value = token || '';

			const iframe = ensureIframeTarget();

		return withTimeout(new Promise((resolve, reject) => {
			let settled = false;

			const cleanup = () => {
				iframe.removeEventListener('load', onLoad);
			};

			const onLoad = () => {
				if (settled) return;
				settled = true;
				cleanup();
				resolve();
			};

			iframe.addEventListener('load', onLoad);

			try {
				form.setAttribute('action', endpoint);
				form.setAttribute('method', 'post');
				form.setAttribute('target', iframe.name);
				HTMLFormElement.prototype.submit.call(form);
			} catch (error) {
				cleanup();
				reject(error);
			}
		}), 12000, 'Submission is taking too long. Please try again.');
	};

	const openMailFallback = (formData) => {
		const subject = encodeURIComponent(formData.get('subject'));
		const lines = [
			`Name: ${formData.get('name') || ''}`,
			`Email: ${formData.get('email') || ''}`,
			`Phone: ${formData.get('phone') || ''}`,
			'',
			'Message:',
			`${formData.get('message') || ''}`
		];
		const body = encodeURIComponent(lines.join('\n'));

		setStatus('Opening your email app so you can send this inquiry.');
		window.location.href = `mailto:info@linealedge.com?subject=${subject}&body=${body}`;
	};

	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		if (honeypot && honeypot.value.trim()) {
			setStatus('Thanks. Your inquiry has been received.');
			form.reset();
			return;
		}

		const invalidFields = requiredFields.filter((field) => !validateField(field));
		if (emailField && emailField.value.trim()) validateField(emailField);
		if (invalidFields.length) {
			setStatus('Please fill in the required details before submitting.', true);
			invalidFields[0].focus();
			return;
		}
		if (emailField && emailField.getAttribute('aria-invalid') === 'true') {
			setStatus('Please correct the highlighted email address.', true);
			emailField.focus();
			return;
		}

		if (!endpoint) {
			const formData = new FormData(form);
			openMailFallback(formData);
			form.reset();
			requiredFields.forEach((field) => field.setAttribute('aria-invalid', 'false'));
			return;
		}

		try {
			setSubmitting(true);
			setStatus('Submitting your inquiry...');
			await submitToEndpoint();
			setStatus('Thank you. Your inquiry has been submitted successfully.');
			form.reset();
			form.querySelectorAll('input, textarea').forEach((field) => {
				field.setAttribute('aria-invalid', 'false');
				const error = form.querySelector(`[data-error-for="${field.id}"]`);
				if (error) error.textContent = '';
			});
		} catch (error) {
			setStatus(error.message || 'Something went wrong while submitting the form. Please try again.', true);
		} finally {
			setSubmitting(false);
		}
	});
}

document.addEventListener('DOMContentLoaded', async () => {
	const routeLoader = createRouteLoader();
	if (routeLoader) showRouteLoader(routeLoader);

	await loadShell();
	setActiveNav();
	initNav();
	initRevealAnimations();
	initHomeIntro();
	initHomeJourney();
	initHomeValues();
	initAboutJourney();
	initContactForm();
	initRouteLoaderNavigation(routeLoader);

	if (routeLoader) {
		window.setTimeout(() => {
			hideRouteLoader(routeLoader);
		}, 650);
	}
});
