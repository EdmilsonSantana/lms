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
			<div class="relative">
				<!-- Navigation Buttons -->
				<button v-if="products.length > visibleCards && canScrollLeft" 
					@click="scrollLeft"
					class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all hover:scale-110"
					aria-label="Produto anterior">
					<FeatherIcon icon="chevron-left" class="w-6 h-6 text-gray-600" />
				</button>
				
				<button v-if="products.length > visibleCards && canScrollRight" 
					@click="scrollRight"
					class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all hover:scale-110"
					aria-label="Próximo produto">
					<FeatherIcon icon="chevron-right" class="w-6 h-6 text-gray-600" />
				</button>

				<!-- Products Container -->
				<div ref="carousel" 
					class="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
					@scroll="updateScrollButtons">
					<!-- Dynamic Product Cards -->
					<div v-for="product in products" :key="product.name"
						class="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
						@click="openProductModal(product)">
						<div class="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
							<img :src="product.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'"
								:alt="product.title" class="w-full h-full object-cover">
						</div>
						<div class="p-4 flex flex-col flex-grow">
							<h3 class="font-semibold text-gray-800 mb-2">{{ product.title }}</h3>
							<p class="text-sm text-gray-600 mb-2 flex-grow">{{ product.description }}</p>
							<p class="text-xs text-blue-600 font-medium mt-auto">Parceiro: {{ product.partner_name }}</p>
						</div>
					</div>

					<!-- Show message when no products are available -->
					<div v-if="products.length === 0" class="flex-none w-full text-center py-8">
						<p class="text-gray-500">Nenhum produto disponível no momento.</p>
					</div>
				</div>

				<!-- Scroll Indicators -->
				<div v-if="products.length > visibleCards" class="flex justify-center mt-4 space-x-2">
					<div v-for="(dot, index) in Math.ceil(products.length / visibleCards)" :key="index"
						class="w-2 h-2 rounded-full transition-colors cursor-pointer"
						:class="currentPage === index ? 'bg-blue-600' : 'bg-gray-300'"
						@click="scrollToPage(index)">
					</div>
				</div>
			</div>
		</div>

		<!-- Product Modal -->
		<div v-if="selectedProduct"
			class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
			@click="closeProductModal">
			<div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
				<div class="relative">
					<button @click="closeProductModal"
						class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</button>
					<img :src="selectedProduct.image" :alt="selectedProduct.title"
						class="w-full h-64 md:h-80 object-cover">
				</div>
				<div class="p-6">
					<h3 class="text-2xl font-bold mb-2">{{ selectedProduct.title }}</h3>
					<p class="text-blue-600 font-medium mb-4">{{ selectedProduct.partner_name }}</p>
					<p class="text-gray-700 mb-4">{{ selectedProduct.description }}</p>
					<div class="flex gap-4">
						<button @click="contactAboutProduct"
							class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
							<span>Saiba Mais</span>
						</button>
						<button @click="closeProductModal"
							class="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
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
	// Prevent body scroll when modal is open
	document.body.style.overflow = 'hidden';
};

const closeProductModal = () => {
	selectedProduct.value = null;
	// Restore body scroll
	document.body.style.overflow = 'auto';
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

const productFields = [
	'name', 'partner.partner_name',
	'partner.partner_contact', 'title', 'description', 'image'];

createResource({
	url: 'frappe.client.get_list',
	makeParams(values) {
		return {
			doctype: 'Partner Product',
			fields: productFields
		}
	},
	onSuccess(data) {
		console.log(data);
		if (data && Array.isArray(data)) {
			products.value = data;
			watchProducts();
		} else {
			products.value = [];
		}
	},
	onError(error) {
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
</style>