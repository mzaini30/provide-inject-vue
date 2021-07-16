<template>
  <router-view></router-view>
  <ReloadPrompt/>
</template>

<script setup>
	import ReloadPrompt from './ReloadPrompt.vue'
  provide('counter', ref(0))
</script>
