<script setup="">
	document.title = 'Latihan Vue'
	const counter = inject('counter')
	import TambahCounter from './TambahCounter.vue'
</script>

<template>
	<p>{{counter}}</p>
	<tambah-counter></tambah-counter>
</template>