<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content position-relative">
      <section class="psychology">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-6 d-flex flex-column justify-content-between psychology-col">
              <h1 class="color-white">Работа с Wisdom</h1>
              <div>
                <router-link :to="{ name: 'Registration' }" class="button">Зарегистрируйтесь</router-link>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <h2 class="color-white">Кто нам нужен?</h2>
              <p class="text-1 color-white">Психологи с:</p>
              <p class="text-1 color-white">- профильным психологическим образованием</p>
              <p class="text-1 color-white">- опытом консультирования – от 1 года</p>
              <p class="text-1 color-white">- грамотная речь</p>
              <h2 class="color-white">Почему нужно работать с нами?</h2>
              <p class="text-1 color-white">- работа между записями ваших клиентов</p>
              <p class="text-1 color-white">- работа удалено </p>
              <p class="text-1 color-white">- автоматические выплаты</p>
            </div>
          </div>
        </div>
        <div class="section-bg">
          <img src="img/psychology/1.jpg" alt="">
          <div class="section-bg__shadow"></div>
        </div>
      </section>
    </main>

    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'Psychology',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss" scoped>
.psychology {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  .container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  &-col {
    margin-bottom: 20px;
  }
}
</style>
