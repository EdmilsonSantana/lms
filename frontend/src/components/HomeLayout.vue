<template>
	<div class="relative flex h-full flex-col">
		<div class="h-full flex-1">
			<div class="flex h-screen text-base">
				<div class="w-full overflow-auto" id="scrollContainer">
					<slot />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
/**
 * Home Layout doesn't show any sidebar
 */
</script>