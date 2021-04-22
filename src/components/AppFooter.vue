<template>
<footer>
  <router-link :to="{ name: 'Home' }">Главная</router-link>
  <router-link :to="{ name: 'About' }">О нас</router-link>
</footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  overflow: hidden;
}
</style>
