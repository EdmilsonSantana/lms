<template>
	<!-- Top Bar (Navbar) -->
	<header class="bg-blue-900 py-4 text-white">
		<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
			<!-- Logo-->
			<div class="text-xl text-white font-bold font-montserrat">Universidade do Automóvel</div>

			<!-- Navigation Menu -->
			<nav class="flex space-x-4">
				<router-link :to="{ name: 'Courses' }" class="hover:text-gray flex items-center space-x-1">
					<span>Explorar cursos</span>
					<FeatherIcon icon="arrow-right" label="Explorar Cursos" />
				</router-link>
			</nav>
		</div>
	</header>

	<!-- Hero Section with Background Image + Overlay -->
	<section class="relative min-h-screen flex items-center justify-center text-white text-center 
			   bg-[url('/assets/lms/frontend/home-banner.jpg')] bg-cover bg-center bg-no-repeat">
		<!-- Optional overlay to make text more readable -->
		<div class="absolute inset-0 bg-blue-900/60"></div>

		<div class="relative max-w-xl p-4">
			<h1 class="text-lg md:text-xl mb-8 leading-relaxed">
				Cursos e consultorias em vendas e pós-vendas para
				destacar sua empresa no setor automotivo.
			</h1>
			<div class="flex flex-wrap gap-4 justify-center">
				<a :href="whatsAppUrl" target="_blank" rel="noopener noreferrer"
					class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded transition-colors">
					Inscreva-se Agora
				</a>
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
			<h2 class="text-3xl font-bold mb-6">Por que Escolher Nossos Cursos?</h2>
			<p class="text-gray-600 mb-10">
				Dos laboratórios práticos às aulas online interativas, aprenda com veteranos do setor e conquiste
				uma
				vantagem competitiva na engenharia mecânica.
			</p>
			<div class="grid gap-8 md:grid-cols-3">
				<!-- Feature 1 -->
				<div class="bg-white shadow rounded p-6">
					<div class="mb-4">
						<div
							class="w-16 h-16 bg-red-100 text-red-500 rounded-full mx-auto flex items-center justify-center text-2xl">
							<span class="font-bold">CAD</span>
						</div>
					</div>
					<h3 class="text-xl font-semibold mb-2">Treinamento Prático em CAD</h3>
					<p class="text-gray-600">
						Domine as mais recentes ferramentas de Design Assistido por
						Computador usadas pelas principais empresas de engenharia ao redor
						do mundo.
					</p>
				</div>
				<!-- Feature 2 -->
				<div class="bg-white shadow rounded p-6">
					<div class="mb-4">
						<div
							class="w-16 h-16 bg-green-100 text-green-500 rounded-full mx-auto flex items-center justify-center text-2xl">
							<span class="font-bold">Lab</span>
						</div>
					</div>
					<h3 class="text-xl font-semibold mb-2">Laboratórios Presenciais</h3>
					<p class="text-gray-600">
						Obtenha experiência real com equipamentos de nível industrial em
						nossas instalações de última geração.
					</p>
				</div>
				<!-- Feature 3 -->
				<div class="bg-white shadow rounded p-6">
					<div class="mb-4">
						<div
							class="w-16 h-16 bg-blue-100 text-blue-500 rounded-full mx-auto flex items-center justify-center text-2xl">
							<span class="font-bold">Live</span>
						</div>
					</div>
					<h3 class="text-xl font-semibold mb-2">Aulas Remotas ao Vivo</h3>
					<p class="text-gray-600">
						Não pode comparecer presencialmente? Participe de nossas transmissões
						ao vivo e sessões virtuais interativas de qualquer lugar do mundo.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="py-12 px-4 bg-gray-50">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-8">O que Nossos Alunos Dizem</h2>
			<div class="grid gap-8 md:grid-cols-3">
				<!-- Testimonial 1 -->
				<div class="bg-white shadow rounded p-6 text-center">
					<p class="italic text-gray-600 mb-4">
						“Consegui um estágio em uma grande empresa após concluir as sessões
						de laboratório. Os instrutores são realmente especialistas!”
					</p>
					<h3 class="font-semibold">Alice Zhang</h3>
					<span class="text-gray-500 text-sm">Estudante de Engenharia Mecânica</span>
				</div>
				<!-- Testimonial 2 -->
				<div class="bg-white shadow rounded p-6 text-center">
					<p class="italic text-gray-600 mb-4">
						“Aprender princípios de design através de exemplos reais foi um
						divisor de águas. Recomendo muito os cursos remotos!”
					</p>
					<h3 class="font-semibold">Carlos Mendoza</h3>
					<span class="text-gray-500 text-sm">Engenheiro Júnior, TechCorp</span>
				</div>
				<!-- Testimonial 3 -->
				<div class="bg-white shadow rounded p-6 text-center">
					<p class="italic text-gray-600 mb-4">
						“O treinamento em CAD elevou minhas habilidades de design a outro
						patamar. O melhor de tudo? Flexibilidade para profissionais que
						trabalham, como eu.”
					</p>
					<h3 class="font-semibold">Rebecca White</h3>
					<span class="text-gray-500 text-sm">Engenheira Sênior, Innovative Solutions</span>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-12 px-4 bg-green-600 text-white text-center">
		<div class="max-w-3xl mx-auto">
			<h2 class="text-3xl font-bold mb-4">Pronto para Transformar Sua Carreira?</h2>
			<p class="mb-8 text-green-100">
				Matricule-se em nossos laboratórios presenciais ou workshops online e
				comece a conquistar novas oportunidades na engenharia mecânica.
			</p>
			<a :href="whatsAppUrl" target="_blank" rel="noopener noreferrer" class="bg-black text-white font-bold py-3 px-6 rounded hover:text-white transition-colors">
				Garanta sua Vaga
			</a>
		</div>
	</section>

	<!-- Footer Section -->
	<footer class="py-8 px-4 bg-blue-900 text-gray-300">
		<div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
			<!-- Footer Logo -->
			<div class="text-xl text-white font-bold font-montserrat">Universidade do Automóvel</div>

			<!-- Footer Navigation -->
			<nav class="flex space-x-4">
				<a href="#" class="hover:text-white">Política de Privacidade</a>
				<a href="#" class="hover:text-white">Termos de Serviço</a>
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
import { ref } from 'vue';
import FeatherIcon from '@/components/Icons/FeatherIcon.vue'

const socials = ref(false);

const whatsAppUrl = ref('');

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
		whatsAppUrl.value = socials.value.find((s) => s.name === 'WhatsApp').url;
	},
});

</script>

<style scoped>
@import '@fontsource/montserrat/index.css';
</style>