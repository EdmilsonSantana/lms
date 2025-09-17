<template>
	<!-- Top Bar (Navbar) -->
	<header class="bg-blue-900 py-4 text-white sticky top-0 z-40 shadow-lg">
		<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
			<!-- Logo-->
			<div class="text-xl text-white font-bold font-montserrat">Universidade do Automóvel</div>

			<!-- Navigation Menu -->
			<nav class="flex items-center space-x-6">
				<!-- Section Links -->
				<div class="hidden md:flex space-x-1">
					<a href="#hero"
						class="px-4 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2 group">
						<span>Início</span>
					</a>
					<a href="#features"
						class="px-4 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2 group">
						<span>Cursos</span>
					</a>
					<a href="#products"
						class="px-4 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2 group">
						<span>Produtos</span>
					</a>
					<a href="#cta"
						class="px-4 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2 group">
						<span>Contato</span>
					</a>
				</div>

				<!-- Platform Access Button -->
				<router-link :to="{ name: 'Batches' }"
					class="bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full transition-all hover:scale-105 flex items-center space-x-2 shadow-lg">
					<span>Entrar na Plataforma</span>
					<FeatherIcon icon="log-in" label="Entrar na Plataforma" />
				</router-link>

				<!-- Mobile Menu Button -->
				<button @click="toggleMobileMenu" class="md:hidden flex items-center">
					<FeatherIcon :icon="isMobileMenuOpen ? 'x' : 'menu'" label="Menu" />
				</button>
			</nav>
		</div>

		<!-- Mobile Menu -->
		<div v-if="isMobileMenuOpen" class="md:hidden bg-blue-800 border-t border-blue-700">
			<div class="px-4 py-2 space-y-1">
				<a href="#hero" @click="closeMobileMenu"
					class="flex items-center space-x-3 py-3 px-3 rounded-lg hover:bg-blue-700 transition-all duration-300 group">
					<FeatherIcon icon="home" class="w-5 h-5 group-hover:scale-110 transition-transform" />
					<span>Início</span>
				</a>
				<a href="#features" @click="closeMobileMenu"
					class="flex items-center space-x-3 py-3 px-3 rounded-lg hover:bg-blue-700 transition-all duration-300 group">
					<FeatherIcon icon="book-open" class="w-5 h-5 group-hover:scale-110 transition-transform" />
					<span>Cursos</span>
				</a>
				<a href="#products" @click="closeMobileMenu"
					class="flex items-center space-x-3 py-3 px-3 rounded-lg hover:bg-blue-700 transition-all duration-300 group">
					<FeatherIcon icon="shopping-bag" class="w-5 h-5 group-hover:scale-110 transition-transform" />
					<span>Produtos</span>
				</a>
				<a href="#cta" @click="closeMobileMenu"
					class="flex items-center space-x-3 py-3 px-3 rounded-lg hover:bg-blue-700 transition-all duration-300 group">
					<FeatherIcon icon="phone" class=" group-hover:scale-110 transition-transform" />
					<span>Contato</span>
				</a>
			</div>
		</div>
	</header>

	<!-- Hero Section with Background Image + Overlay -->
	<section id="hero" class="relative min-h-screen flex items-center justify-center text-white text-center 
			   bg-[url('/assets/lms/frontend/home-banner.jpg')] bg-cover bg-center bg-no-repeat">
		<!-- Optional overlay to make text more readable -->
		<div class="absolute inset-0 bg-black bg-opacity-80"></div>

		<div class="relative z-10 max-w-xl p-4">
			<h1 class="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-lg">
				Cursos e consultorias em vendas e pós-vendas para
				destacar sua empresa no setor automotivo
			</h1>
			<div class="flex flex-wrap gap-4 justify-center">
				<router-link :to="{ name: 'Batches' }"
					class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg">
					Inscreva-se Agora
				</router-link>
				<a href="#features"
					class="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 border border-white shadow-lg">
					Conheça os Cursos
				</a>
			</div>
		</div>
	</section>


	<!-- Features Section -->
	<section id="features" class="py-12 px-4 bg-white">
		<div class="max-w-7xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Por que escolher nossos Cursos?</h2>
			<p class="text-gray-600 mb-10">
				Aprenda com especialistas do setor, unindo aulas online dinâmicas e práticas de laboratório para
				conquistar uma vantagem competitiva na área automotiva
			</p>
			<div class="grid gap-8 md:grid-cols-3">
				<!-- Feature 1 -->
				<div class="bg-white shadow rounded p-6">
					<div class="mb-4">
						<div
							class="w-16 h-16 bg-red-100 text-red-500 rounded-full mx-auto flex items-center justify-center text-2xl">
							<PlugZap />
						</div>
					</div>
					<h3 class="text-xl font-semibold mb-2">Formação para Eletricista Automotivo</h3>
					<p class="text-gray-600">
						Preparar os participantes para realizarem diagnóstico e reparação de instalações elétricas
						veiculares, incluso sistemas de gerenciamento motor.
					</p>
				</div>
				<!-- Feature 2 -->
				<div class="bg-white shadow rounded p-6">
					<div class="mb-4">
						<div
							class="w-16 h-16 bg-green-100 text-green-500 rounded-full mx-auto flex items-center justify-center text-2xl">
							<SquareActivity />
						</div>
					</div>
					<h3 class="text-xl font-semibold mb-2">Diagnóstico de Sistemas Arla Diesel - Euro 5 e 6</h3>
					<p class="text-gray-600">
						Desenvolver a capacidade de realizar análises e reparo em sistemas de pós-tratamento de veículos
						Diesel Pesados, atendendo as normas Euro 05 e Euro 06.
					</p>
				</div>
				<!-- Feature 3 -->
				<div class="bg-white shadow rounded p-6">
					<div class="mb-4">
						<div
							class="w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto flex items-center justify-center text-2xl">
							<Droplets />
						</div>
					</div>
					<h3 class="text-xl font-semibold mb-2">Injeção Eletrônica Ciclo Otto Indireta e Direta</h3>
					<p class="text-gray-600">
						Capacitar para promover reparos em sistema de gerenciamento motor de veículos Ciclo Otto de
						Injeção Eletrônica indireta e direta.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Products Section -->
	<section id="products" class="py-12 px-4 bg-gray-50">
		<div class="max-w-7xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6 text-gray-800">Produtos dos Nossos Parceiros</h2>
			<p class="text-gray-600 mb-10">
				Ferramentas e equipamentos oferecidos pelos nossos parceiros especializados no setor automotivo
			</p>

			<!-- Products Carousel -->
			<div class="relative" @keydown="handleCarouselKeydown" tabindex="0">
				<!-- Navigation Buttons with improved styling -->
				<button v-if="products.length > visibleCards && canScrollLeft" 
					@click="scrollLeft"
					class="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label="Produto anterior">
					<FeatherIcon icon="chevron-left" class="w-6 h-6 text-gray-700" />
				</button>
				
				<button v-if="products.length > visibleCards && canScrollRight" 
					@click="scrollRight"
					class="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
					aria-label="Próximo produto">
					<FeatherIcon icon="chevron-right" class="w-6 h-6 text-gray-700" />
				</button>

				<!-- Products Container with improved touch handling -->
				<div ref="carousel" 
					class="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide px-2"
					@scroll="updateScrollButtons"
					@touchstart="handleTouchStart"
					@touchmove="handleTouchMove"
					@touchend="handleTouchEnd">
					
					<!-- Enhanced Product Cards -->
					<div v-for="product in products" :key="product.name"
						class="flex-none w-72 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group transform hover:-translate-y-1"
						@click="openProductModal(product)"
						@mouseenter="preloadImage(product.image)">
						
						<!-- Image container with loading state -->
						<div class="relative aspect-square bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-xl">
							<!-- Loading skeleton -->
							<div v-if="!product.imageLoaded" class="absolute inset-0 bg-gray-200 animate-pulse"></div>
							
							<img :src="product.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'"
								:alt="product.title" 
								@load="product.imageLoaded = true"
								@error="handleProductImageError(product)"
								class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								loading="lazy">
							
							<!-- Overlay on hover -->
							<div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-t-xl"></div>
							
							<!-- Quick view icon -->
							<div class="absolute top-3 right-3 bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full p-2 transition-all duration-300 transform scale-0 group-hover:scale-100">
								<svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
								</svg>
							</div>
						</div>
						
						<!-- Enhanced content section -->
						<div class="p-5 flex flex-col flex-grow">
							<h3 class="font-bold text-gray-900 mb-2 text-lg leading-tight group-hover:text-blue-600 transition-colors">
								{{ product.title }}
							</h3>
							<p class="text-sm text-gray-600 mb-3 flex-grow leading-relaxed line-clamp-3">
								{{ product.description }}
							</p>
							<div class="flex items-center justify-between mt-auto">
								<div class="flex items-center gap-2">
									<div class="w-2 h-2 bg-blue-600 rounded-full"></div>
									<p class="text-xs text-blue-600 font-semibold">{{ product.partner_name }}</p>
								</div>
								<div class="text-gray-400 group-hover:text-blue-600 transition-colors">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>

					<!-- Enhanced empty state -->
					<div v-if="products.length === 0" class="flex-none w-full text-center py-12">
						<div class="text-gray-400 mb-4">
							<svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
							</svg>
						</div>
						<p class="text-gray-500 text-lg font-medium">Nenhum produto disponível no momento</p>
						<p class="text-gray-400 text-sm mt-1">Novos produtos serão adicionados em breve</p>
					</div>
				</div>

				<!-- Enhanced scroll indicators -->
				<div v-if="products.length > visibleCards" class="flex justify-center mt-6 space-x-2">
					<button v-for="(dot, index) in Math.ceil(products.length / visibleCards)" :key="index"
						class="w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
						:class="currentPage === index ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'"
						@click="scrollToPage(index)"
						:aria-label="`Ir para página ${index + 1}`">
					</button>
				</div>
			</div>
		</div>

		<!-- Product Modal -->
		<div v-if="selectedProduct"
			class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
			@click="closeProductModal"
			@keydown="handleModalKeydown"
			tabindex="0"
			ref="modalRef">
			<div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300" 
				@click.stop
				@keydown.stop>
				<!-- Image Section with Loading State -->
				<div class="relative bg-gray-50 overflow-hidden">
					<button @click="closeProductModal"
						class="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-700 hover:text-gray-900 z-30 rounded-full p-2 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
						aria-label="Fechar modal"
						ref="closeButton">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
					
					<!-- Loading Spinner -->
					<div v-if="imageLoading" 
						class="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
						<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
					</div>
					
					<!-- Image container with original size display -->
					<div class="relative w-full flex items-center justify-center bg-gray-50 p-4">
						<!-- Image with original sizing -->
						<img :src="selectedProduct.image" 
							:alt="selectedProduct.title"
							@load="imageLoading = false"
							@error="handleImageError"
							class="max-w-full h-auto select-none"
							style="max-height: 40vh;"
							draggable="false">
					</div>
				</div>
				
				<!-- Content Section with more space -->
				<div class="p-6 md:p-8 flex-1">
					<div class="flex flex-col gap-4 mb-6">
						<div class="flex-grow">
							<h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{{ selectedProduct.title }}</h3>
							<div class="flex items-center gap-2 mb-4">
								<div class="w-3 h-3 bg-blue-600 rounded-full"></div>
								<p class="text-blue-600 font-semibold">{{ selectedProduct.partner_name }}</p>
							</div>
						</div>
					</div>
					
					<div class="prose prose-lg max-w-none">
						<p class="text-gray-700 text-lg leading-relaxed mb-6">{{ selectedProduct.description }}</p>
					</div>
					
					<!-- Enhanced Action Buttons -->
					<div class="flex flex-col sm:flex-row gap-3">
						<button @click="contactAboutProduct"
							class="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500">
							<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
									d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
							</svg>
							<span>Entrar em Contato</span>
						</button>
						<button @click="closeProductModal"
							class="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500">
							Fechar
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section id="cta" class="py-12 px-4 bg-green-600 text-white text-center">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl font-bold mb-4">Pronto para Transformar Sua Carreira?</h2>
			<p class="mb-8 text-green-100">
				Participe de nossos laboratórios presenciais ou workshops online e abra as portas para novas
				oportunidades na área automotiva.
			</p>
			<div class="flex justify-center">
				<router-link :to="{ name: 'Batches' }"
					class="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 border border-white shadow-lg">
					Inscreva-se Agora
				</router-link>
			</div>
		</div>
	</section>

	<!-- Footer Section -->
	<footer class="py-8 px-4 bg-blue-900 text-gray-300">
		<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
			<!-- Footer Logo -->
			<div class="text-xl text-white font-bold font-montserrat">Universidade do Automóvel</div>

			<!-- Footer Navigation -->
			<nav class="flex">
				<a href="/lms/privacy-policy" target="_blank" rel="noopener noreferrer"
					class="px-3 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 transition-all">
					Política de Privacidade
				</a>
				<a href="/lms/terms-and-conditions" target="_blank" rel="noopener noreferrer"
					class="px-3 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 transition-all">
					Termos de Serviço
				</a>
			</nav>
		</div>

		<!-- Social Links (With Icons) -->
		<div v-if="socialSettings.data?.length"
			class="max-w-7xl mx-auto mt-4 flex justify-center md:justify-end">
			<a v-for="social in socialSettings.data" :key="social.name" :href="social.url"
				class="px-2 py-2 rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center" target="_blank" rel="noopener noreferrer">
				<!-- Icon Component -->
				<FeatherIcon :icon="icons[social.name]" :label="social.name" />
			</a>
		</div>
	</footer>
</template>

<script setup>

import { computed, ref, onMounted, onUnmounted, nextTick } from 'vue';
import FeatherIcon from '@/components/Icons/FeatherIcon.vue'
import { PlugZap, SquareActivity, Droplets } from 'lucide-vue-next';
import { updateDocumentTitle } from '@/utils'
import { useSettings } from '@/stores/settings';
import { createResource } from 'frappe-ui'

const settings = useSettings();
const socialSettings = settings.socialSettings;

const icons = {
	'Instagram': 'instagram',
	'Facebook': 'facebook',
	'YouTube': 'youtube',
	'WhatsApp': 'message-circle'
};


const selectedProduct = ref(null);
const isMobileMenuOpen = ref(false);
const products = ref([]);
const imageLoading = ref(true);
const modalRef = ref(null);
const closeButton = ref(null);

// Touch handling for carousel
const touchStartX = ref(0);
const touchEndX = ref(0);

// Carousel variables
const carousel = ref(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);
const currentPage = ref(0);
const visibleCards = ref(4); // Default for xl screens

const pageMeta = computed(() => {
	return {
		title: 'Home',
		description: 'Universidade do Automóvel Home page',
	}
})

updateDocumentTitle(pageMeta)

// Lifecycle hooks
onMounted(() => {
	initializeCarousel();
});

onUnmounted(() => {
	cleanupCarousel();
});

// Modal and Menu Functions
const openProductModal = (product) => {
	selectedProduct.value = product;
	imageLoading.value = true;
	
	// Prevent body scroll when modal is open
	document.body.style.overflow = 'hidden';
	
	// Focus the modal for keyboard navigation
	nextTick(() => {
		if (modalRef.value) {
			modalRef.value.focus();
		}
	});
};

const closeProductModal = () => {
	selectedProduct.value = null;
	imageLoading.value = true;
	// Restore body scroll
	document.body.style.overflow = 'auto';
};

// Enhanced modal keyboard navigation
const handleModalKeydown = (event) => {
	switch (event.key) {
		case 'Escape':
			event.preventDefault();
			closeProductModal();
			break;
		case 'Tab':
			// Handle tab navigation within modal
			handleTabNavigation(event);
			break;
		default:
			// Prevent other keyboard shortcuts from affecting the background
			if (event.ctrlKey || event.metaKey) {
				event.preventDefault();
			}
			break;
	}
};

const handleTabNavigation = (event) => {
	const modal = modalRef.value;
	if (!modal) return;

	const focusableElements = modal.querySelectorAll(
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
	);
	
	const firstElement = focusableElements[0];
	const lastElement = focusableElements[focusableElements.length - 1];

	if (event.shiftKey) {
		// Shift + Tab (backward)
		if (document.activeElement === firstElement) {
			event.preventDefault();
			lastElement.focus();
		}
	} else {
		// Tab (forward)
		if (document.activeElement === lastElement) {
			event.preventDefault();
			firstElement.focus();
		}
	}
};

const handleImageError = (event) => {
	// Fallback to a default image or hide the image
	event.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop';
};

const handleProductImageError = (product) => {
	product.image = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop';
	product.imageLoaded = true;
};

const preloadImage = (src) => {
	if (src) {
		const img = new Image();
		img.src = src;
	}
};

const contactAboutProduct = () => {
	if (!selectedProduct.value) return;

	const product = selectedProduct.value;	
	if (product?.partner_contact) {
		const message = `Olá! Gostaria de saber mais sobre o produto: ${product.title}`;
		const url = new URL(product.partner_contact)
      	url.searchParams.set('text', message)
      	window.open(url.href, '_blank')
	}
};

// Mobile Menu Functions
const toggleMobileMenu = () => {
	isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false;
};

// Carousel Functions
const updateScrollButtons = () => {
	if (!carousel.value) return;
	
	const container = carousel.value;
	const maxScroll = container.scrollWidth - container.clientWidth;
	
	canScrollLeft.value = container.scrollLeft > 5; // Small threshold
	canScrollRight.value = container.scrollLeft < maxScroll - 5; // Small threshold
	
	// Update current page indicator
	const cardWidth = 300; // Approximate card width + gap
	currentPage.value = Math.round(container.scrollLeft / cardWidth);
};

const scrollLeft = () => {
	if (!carousel.value) return;
	const cardWidth = 288 + 24; // w-72 (288px) + gap (24px)
	carousel.value.scrollBy({ left: -cardWidth, behavior: 'smooth' });
};

const scrollRight = () => {
	if (!carousel.value) return;
	const cardWidth = 288 + 24; // w-72 (288px) + gap (24px)
	carousel.value.scrollBy({ left: cardWidth, behavior: 'smooth' });
};

const scrollToPage = (page) => {
	if (!carousel.value) return;
	const cardWidth = 288 + 24;
	carousel.value.scrollTo({ left: page * cardWidth, behavior: 'smooth' });
};

// Enhanced keyboard navigation
const handleCarouselKeydown = (event) => {
	switch (event.key) {
		case 'ArrowLeft':
			event.preventDefault();
			if (canScrollLeft.value) scrollLeft();
			break;
		case 'ArrowRight':
			event.preventDefault();
			if (canScrollRight.value) scrollRight();
			break;
		case 'Home':
			event.preventDefault();
			scrollToPage(0);
			break;
		case 'End':
			event.preventDefault();
			scrollToPage(Math.ceil(products.value.length / visibleCards.value) - 1);
			break;
	}
};

// Touch handling for mobile
const handleTouchStart = (event) => {
	touchStartX.value = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
	// Optional: prevent default scrolling behavior if needed
	// event.preventDefault();
};

const handleTouchEnd = (event) => {
	touchEndX.value = event.changedTouches[0].clientX;
	handleSwipeGesture();
};

const handleSwipeGesture = () => {
	const swipeThreshold = 50;
	const diff = touchStartX.value - touchEndX.value;
	
	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0 && canScrollRight.value) {
			// Swipe left - scroll right
			scrollRight();
		} else if (diff < 0 && canScrollLeft.value) {
			// Swipe right - scroll left
			scrollLeft();
		}
	}
};

// Update visible cards based on screen size
const updateVisibleCards = () => {
	const width = window.innerWidth;
	if (width >= 1280) visibleCards.value = 4; // xl
	else if (width >= 1024) visibleCards.value = 3; // lg
	else if (width >= 768) visibleCards.value = 2; // md
	else visibleCards.value = 1; // sm
};

// Initialize carousel on mount
const initializeCarousel = () => {
	updateVisibleCards();
	setTimeout(() => {
		updateScrollButtons();
	}, 100);
	window.addEventListener('resize', updateVisibleCards);
};

// Cleanup on unmount
const cleanupCarousel = () => {
	window.removeEventListener('resize', updateVisibleCards);
};

// Watch for products changes to update carousel
const watchProducts = () => {
	nextTick(() => {
		setTimeout(() => {
			updateScrollButtons();
		}, 100);
	});
};

createResource({
	url: 'lms.lms.api.get_partner_products',
	onSuccess(data) {
		console.log(data);
		if (data && Array.isArray(data)) {
			// Add loading state to each product
			products.value = data.map(product => ({
				...product,
				imageLoaded: false
			}));
			watchProducts();
		} else {
			products.value = [];
		}
	},
	onError(error) {
		console.error('Error loading products:', error);
		products.value = [];
	},
	auto: true,
});

</script>

<style scoped>
@import '@fontsource/montserrat/index.css';

/* Smooth scrolling for anchor links */
html {
	scroll-behavior: smooth;
}

/* Offset scroll position to account for fixed header */
section {
	scroll-margin-top: 80px;
}

/* Hide scrollbar for carousel */
.scrollbar-hide {
	-ms-overflow-style: none;  /* Internet Explorer 10+ */
	scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar { 
	display: none;  /* Safari and Chrome */
}

/* Smooth carousel transitions */
.scroll-smooth {
	scroll-behavior: smooth;
}

/* Line clamp utility for description text */
.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

/* Enhanced focus styles */
.focus\:ring-2:focus {
	outline: 2px solid transparent;
	outline-offset: 2px;
	box-shadow: 0 0 0 2px var(--ring-color, #3b82f6);
}

/* Loading animation */
@keyframes pulse {
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
}

.animate-pulse {
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>