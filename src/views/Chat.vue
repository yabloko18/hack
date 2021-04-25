<template>
  <div class="app-body">
    <main class="content">
      <div v-if="buttonState">
        <div class="modal-window">
          Мы нашли психолога для вас -
          {{ this.$store.state.psychologyUserInfo.info.name }}

          <button class="button" @click="buttonState = !buttonState">
            Начать диалог
          </button>
        </div>
        <div class="modal-window__bg"></div>
      </div>
      <div v-if="timeModalState">
        <div class="modal-window">
          К сожалению 10 минут бесплатной помощи закончились
          Оплатите, чтобы продолжить
        </div>
        <div class="modal-window__bg"></div>
      </div>
      <div class="chat position-relative d-flex flex-column">
        <header class="chat-header">
          <div class="container d-flex justify-content-between align-items-center">
            <div class="col-2 col-md-1 d-flex justify-content-start">
              <div class="image-container">
                <a href="">
                  <img src="img/chat/1.png" alt="">
                </a>
              </div>
            </div>
            <div class="col-8 col-md-10 d-flex flex-column">
              <div class="name">
                <a href="">{{ this.$store.state.psychologyUserInfo.info.name }}</a>
              </div>
              <small class="state">
                ваш психолог
              </small>
            </div>
            <div class="col-2 col-md-1  d-flex justify-content-end">
              <div class="icon-container">
                <a href=""><img src="img/chat/1.svg" alt=""></a>
              </div>
            </div>
          </div>
        </header>
        <div class="chat-body">
          <div class="container">
            <ul class="row">
              <Massage
                  v-for="massage in massages"
                  :key="massage"
                  v-bind:massage = "massage"
              />
            </ul>
          </div>
        </div>
        <footer class="chat-footer">
          <div>
            <div class="container">
              <div class="d-flex flex-nowrap image-row">
                <label class="d-none">
                  <input type="file" id="files" ref="files" accept="image/*" multiple v-on:change="handleFilesUpload()"/>
                </label>
                <div v-for="(file, key) in files" class="image d-flex flex-column">
                  <img class="preview" v-bind:ref="'image'+parseInt( key )"/>
                </div>
              </div>
            </div>
          </div>
          <div class="container d-flex justify-content-between align-items-center">
            <div class="col-2 col-md-1 d-flex justify-content-start">
              <button v-on:click="addFiles()" class="chat-footer__img"><img src="img/chat/2.svg" alt=""></button>
            </div>
            <div class="col-8 col-md-10 d-flex flex-column chat-textarea">
                <textarea-autosize
                    placeholder="Type something here..."
                    ref="myTextarea"
                    v-model="textarea"
                    :min-height="36"
                    :max-height="150"
                />
            </div>
            <div class="col-2 col-md-1  d-flex justify-content-end">
              <div class="d-flex flex-column">
                <div v-if="textarea">
                  <button v-on:click="sendMassage ()" class="chat-footer__img"><img src="img/chat/4.svg" alt=""></button>
                </div>
                <div class="icon-container" v-else>
                  <a href=""><img src="img/chat/3.svg" alt=""></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
import Massage from '@/components/Massage'
import FileChange from "@/components/FileChange";
import {mapActions} from "vuex";

export default {
  name: 'Chat',
  components: { Massage, FileChange },
  data () {
    return {
      massages: [
      ],
      massage: { id: '', user: '', img: '', text: '', time: ''},
      files: [],
      textarea: [],
      value: [],
      buttonState: true,
      currentTime: 60,
      timer: null,
      timeModalState: false
    }
  },
  mounted() {
    this.GET_INFO_FROM_API()
    this.startTimer()
  },
  destroyed() {
    this.stopTimer()
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer()
      }
    }
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },
    stopTimer() {
      this.timeModalState = true
      clearTimeout(this.timer)
    },
    addFiles(){
      this.$refs.files.click();
    },
    submitFiles(){
      let formData = new FormData();
      for( let i = 0; i < this.files.length; i++ ){
        let file = this.files[i];
        formData.append('files[' + i + ']', file);
      }
    },
    handleFilesUpload(){
      let uploadedFiles = this.$refs.files.files;
      for( var i = 0; i < uploadedFiles.length; i++ ){
        this.files.push( uploadedFiles[i] );
      }
      this.getImagePreviews();
    },
    getImagePreviews(){
      for( let i = 0; i < this.files.length; i++ ){
        if ( /\.(jpe?g|png|gif)$/i.test( this.files[i].name ) ) {
          let reader = new FileReader();
          reader.addEventListener("load", function(){
            this.$refs['image'+parseInt( i )][0].src = reader.result;
          }.bind(this), false);
          reader.readAsDataURL( this.files[i] );
        }
      }
    },
    sendMassage () {
      this.massage.img = this.files
      this.massage.text = this.textarea
      let oneMassage = Object.assign({}, this.massage);
      this.massages.push(oneMassage)
      console.log(this.massages)
      this.textarea = ''
      this.files = ''
    },
    ...mapActions([
      'GET_INFO_FROM_API'
    ])
  }
}
</script>
<style lang="scss" scoped>
input[type="file"]{
  position: absolute;
  top: -500px;
}
div.file-listing img{
  max-width: 90%;
}
main {
  margin: 0;
}
div.asd{
  padding:0.5em;
  background-color:pink;
  width:100px;
}
.chat {
  height: 100vh;
}
.chat-header {
  background: #F6F6F6;
  padding: 5px 0;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #8E8E8E;
  position: fixed;
  z-index: 10;
  .image-container {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .name {
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    a {
      color: #1F1F1F;
    }
  }
}
.icon-container {
  width: 25px;
  height: 25px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}
.chat-body {
  padding: 70px 0 120px 0;
  position: relative;
  background-color: #E5E5E5;
  overflow-y: scroll;
  z-index: 9;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  @media (max-width: 998px) {
    padding: 70px 0 80px 0;
  }
  .container {
    height: auto;
  }
}
.chat-footer {
  background: #F6F6F6;
  border-top: 1px solid #8E8E8E;
  padding: 15px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 10;
  @media (max-width: 998px) {
    padding: 5px 0;
  }
  &__img {
    border: none;
    background-color: transparent;
    position: relative;
    max-width: 30px;
    max-height: 30px;
    width: 15px;
    height: 15px;
    padding: 0;
    margin: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.chat-textarea {
  textarea {
    background: #FFF;
    border: 1px solid #A6A6AA;
    box-sizing: border-box;
    border-radius: 16px;
    padding: 6px 15px;
    resize: none;
    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 145%;
      color: #A6A6AA;
    }
  }
}
.image-row {
  overflow-x: scroll;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  transform: translateY(-100%);
  background-color: rgba(255,255,255,.4);
  @media (max-width: 998px) {
    img {
      max-width: 150px;
    }
  }
  img {
    padding: 10px 0;
    height: 100px;
    width: auto;
    object-fit: cover;
    object-position: center;
    max-width: 300px;
  }
}
.image {
  display: inline-flex;
  margin-right: 10px;
}
</style>
