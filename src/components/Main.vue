<template>
	<header-component></header-component>
	<slot name="body">
		没有任何内容哦
	</slot>
	<footer-component></footer-component>
</template>
<style>

</style>
<script>
	import HeaderComponent from './HeaderComponent.vue'
	import FooterComponent from './FooterComponent.vue'
	export default {
		name: 'Main',
		components: {
			HeaderComponent,
			FooterComponent
		}
	}
</script>
