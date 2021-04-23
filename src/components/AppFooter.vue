<template>
  <footer>
    <div class="container">
      <div class="row justify-content-between align-items-start">
        <div class="col-12 col-md-6 footer-logo">
          <router-link :to="{ name: 'Home' }" class="logo">Wisdom</router-link>
        </div>
        <ul class="footer-list col-12 col-md-6">
          <li><router-link :to="{ name: 'About' }">О нас</router-link></li>
          <li><router-link :to="{ name: 'Price' }">Цены</router-link></li>
          <li><router-link :to="{ name: 'Psychology' }">Для психологов</router-link></li>
          <li><router-link :to="{ name: 'About' }">О нас</router-link></li>
          <li><router-link :to="{ name: 'Price' }">Цены</router-link></li>
          <li><router-link :to="{ name: 'Psychology' }">Для психологов</router-link></li>
          <li><router-link :to="{ name: 'About' }">О нас</router-link></li>
          <li><router-link :to="{ name: 'Price' }">Цены</router-link></li>
          <li><router-link :to="{ name: 'Psychology' }">Для психологов</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang="scss">
footer {
  overflow: hidden;
  background-color: #1F1F1F;
  padding: 60px 0;
  ul {
    column-count: 2;
    column-gap: 40px;
    li {
      width: 170px;
      a {
        color: #fff;
        text-decoration: none;
        position: relative;
        transition: .1s linear all;
        &:after {
          width: 100%;
          height: 1px;
          background-color: #0a58ca;
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          transform: scale(0);
          transition: .1s linear all;
        }
        &:hover {
          color: #0a58ca;
          &:after {
            transform: scale(1);
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  footer {
    padding: 40px 10px;
  }
  .footer-logo {
    padding: 0;
    margin-bottom: 20px;
  }
}
</style>
