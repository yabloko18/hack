<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content">
      <h1>О нас</h1>
    </main>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'About',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss" scoped>

</style>
