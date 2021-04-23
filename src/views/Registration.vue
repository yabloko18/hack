<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content">
      <h1>Регистрация</h1>
    </main>

    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'Registration',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss" scoped>

</style>
