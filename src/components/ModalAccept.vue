<template>
  <div>
    <div class="modal-window">
      Мы нашли психолога для вас -
      {{ this.$store.state.psychologyUserInfo.info.name }}

      <button class="button" @click="buttonState = !buttonState">
        Начать диалог
      </button>
    </div>
    <div class="modal-window__bg"></div>
  </div>
</template>

<script>
export default {
  name: "ModalAccept"
}
</script>

<style scoped>

</style>
