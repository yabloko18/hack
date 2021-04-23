<template>
  <section class="help">
    <div class="container">
      <h2>Мы поможем вам</h2>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="col-body">
            <p class="text-1">Улучшить психо-эмоциональное состояние.</p>
            <p class="text-1">Найти ресурсы для изменений в жизни</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="col-body">
            <p class="text-1">Наладить отношения с супругом, родителями, коллегами, друзьями. Устранить агрессию в отношениях, ссоры, манипуляции, моральное насилие</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="col-body">
            <p class="text-1">Снизить зависимость от партнёра в отношениях, избавиться от душащей ревности.</p>
            <p class="text-1">Преодолеть кризис после развода</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="col-body">
            <p class="text-1">Сформировать с любовь к себе,  избавиться от самокритики и чувства вины и «долга»</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="col-body">
            <p class="text-1">Сформировать здоровую самооценку для старта счастливой жизни по своему сценарию.</p>
            <p class="text-1">Избавиться от груза прошлого, преодолеть психологические травмы</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="col-body">
            <p class="text-1">Научиться не делать старых ошибок в новых отношениях.</p>
            <p class="text-1">Преодолеть страх новых отношений после краха прошлых</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="col-body">
            <p class="text-1">Преодолеть кризис среднего возраста, прокрастинацию и жизненный ступор.</p>
            <p class="text-1">Найти смысл жизни, составить свою картину мира, свои цели и научиться их достигать</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "SectionHelp"
}
</script>

<style scoped lang="scss">
.help {
  .row {
    margin-top: 60px;
    @media (max-width: 998px) {
      margin-top: 40px;
    }
    @media (max-width: 576px) {
      margin-top: 20px;
    }
  }
  .col-12 {
    margin-bottom: 20px;
  }
  .col-body {
    padding: 25px;
    background-color: rgba(10,88,202,.2);
    width: 100%;
    height: 100%;
    border-radius: 18px;
  }
}
</style>
