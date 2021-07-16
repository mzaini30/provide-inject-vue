<script setup="">
	const counter = inject('counter')
</script>

<template>
	<button @click='counter++'>Tambah</button>
	<button @click='counter--'>Kurangi</button>
</template>