<template>
	<!-- Top Bar (Navbar) -->
	<header class="bg-blue-900 py-4 text-white">
		<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
			<!-- Logo-->
			<div class="text-xl text-white font-bold font-montserrat">Universidade do Automóvel</div>

			<!-- Navigation Menu -->
			<nav class="flex space-x-4">
				<router-link :to="{ name: 'Batches' }" class="hover:text-gray flex items-center space-x-1">
					<span>Acesso à Plataforma</span>
					<FeatherIcon icon="arrow-right" label="Conheça nossas Turmas" />
				</router-link>
			</nav>
		</div>
	</header>

	<!-- Hero Section with Background Image + Overlay -->
	<section class="relative min-h-screen flex items-center justify-center text-white text-center 
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
					class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded transition-colors">
					Inscreva-se Agora
				</router-link>
				<a href="#features"
					class="bg-white hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded transition-colors">
					Saiba Mais
				</a>
			</div>
		</div>
	</section>


	<!-- Features Section -->
	<section id="features" class="py-12 px-4 bg-white">
		<div class="max-w-7xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Por que escolher nossos Cursos?</h2>
			<p class="text-gray-600 mb-10">
				Aprenda com especialistas do setor, unindo aulas online dinâmicas e práticas de laboratório para conquistar uma vantagem competitiva na área automotiva
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

	<!-- CTA Section -->
	<section class="py-12 px-4 bg-green-600 text-white text-center">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl font-bold mb-4">Pronto para Transformar Sua Carreira?</h2>
			<p class="mb-8 text-green-100">
				Participe de nossos laboratórios presenciais ou workshops online e abra as portas para novas oportunidades na área automotiva.
			</p>
			<router-link :to="{ name: 'Batches' }"
				class="bg-black text-white font-bold py-3 px-6 rounded hover:text-white transition-colors">
				Garanta sua Vaga
			</router-link>
		</div>
	</section>

	<!-- Footer Section -->
	<footer class="py-8 px-4 bg-blue-900 text-gray-300">
		<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
			<!-- Footer Logo -->
			<div class="text-xl text-white font-bold font-montserrat">Universidade do Automóvel</div>

			<!-- Footer Navigation -->
			<nav class="flex space-x-4">
				<a href="/lms/privacy-policy" target="_blank" rel="noopener noreferrer"
					class="hover:text-white">Política de Privacidade</a>
				<a href="/lms/terms-and-conditions" target="_blank" rel="noopener noreferrer"
					class="hover:text-white">Termos de Serviço</a>
			</nav>
		</div>

		<!-- Social Links (With Icons) -->
		<div v-if="socials?.length" class="max-w-7xl mx-auto mt-6 flex space-x-4 justify-center md:justify-end">
			<a v-for="social in socials" :key="social.name" :href="social.url"
				class="hover:text-white flex items-center space-x-1" target="_blank" rel="noopener noreferrer">
				<!-- Icon Component -->
				<FeatherIcon :icon="social.icon" :label="social.name" />
			</a>
		</div>
	</footer>
</template>

<script setup>

import { createResource } from 'frappe-ui'
import { ref, computed } from 'vue';
import FeatherIcon from '@/components/Icons/FeatherIcon.vue'
import { PlugZap, SquareActivity, Droplets } from 'lucide-vue-next';
import { updateDocumentTitle } from '@/utils'

const socials = ref(false);

const icons = {
	'Instagram': 'instagram',
	'Facebook': 'facebook',
	'YouTube': 'youtube',
	'WhatsApp': 'message-circle'
};

createResource({
	url: 'lms.lms.branding.get_social_media',
	auto: true,
	transform(data) {
		socials.value = data.map((d) => ({
			name: d.name,
			icon: icons[d.name],
			url: d.url,
		}));
	},
});

const pageMeta = computed(() => {
	return {
		title: 'Home',
		description: 'Universidade do Automóvel Home page',
	}
})

updateDocumentTitle(pageMeta)

</script>

<style scoped>
@import '@fontsource/montserrat/index.css';
</style>