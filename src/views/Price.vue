<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content">
      <h1>Цены</h1>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'Price',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss" scoped>

</style>
