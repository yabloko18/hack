<template>
  <AppHeader/>
  <main class="content">
    <div class="container">
      <h1>Цены</h1>
    </div>
  </main>
  <AppFooter/>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'Price',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>

</style>
