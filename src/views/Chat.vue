<template>
  <div class="app-body">
    <main class="content">
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
                <a href="">Анастасия Флюшина</a>
              </div>
              <small class="state">
                печатает...
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
              <div class="d-flex flex-nowrap flex-lg-wrap image-row">
                <label>
                  <input type="file" id="files" ref="files" accept="image/*" multiple v-on:change="handleFilesUpload()"/>
                </label>
                <div v-for="(file, key) in files" class="image d-flex flex-column">
                  {{ file.name }}
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
                  <button v-on:click="submitFiles()" class="chat-footer__img"><img src="img/chat/4.svg" alt=""></button>
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

export default {
  name: 'Chat',
  components: { Massage, FileChange },
  data () {
    return {
      massages: [
        { id: 1, user: 'A', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam dolores magnam nemo neque odit optio sequi temporibus? Animi aspernatur aut beatae commodi excepturi itaque iusto labore laudantium nesciunt nihil nostrum odit quas sit, temporibus, ut? Dignissimos error excepturi libero placeat rem! Architecto assumenda aut eum eveniet excepturi, hic incidunt magnam molestias officiis perferendis saepe totam, vero? Accusantium atque consequuntur debitis earum eos esse, explicabo fuga fugit harum ipsa maxime minus nam nulla perspiciatis, quae, quam repellendus unde. Atque eum fugiat laboriosam numquam officia quia quisquam quos sapiente vel! Aperiam, debitis fuga illum magnam magni non porro quidem quos veritatis!', time: '11:30' },
        { id: 2, user: 'A', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, fugit!', time: '11:34' },
        { id: 3, user: 'B', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae corporis eius harum nisi pariatur provident sapiente sequi, soluta voluptatum. Amet, blanditiis dolorem dolores dolorum ea esse fugit in magni maxime quasi ratione totam ullam voluptas? Aliquid beatae dolores quo tempora tempore. Cumque est iure quis sed voluptatum. Commodi, obcaecati.', time: '11:36' },
        { id: 4, user: 'B', text: 'Lorem ipsum dolor.', time: '11:40' },
        { id: 5, user: 'B', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam dolores magnam nemo neque odit optio sequi temporibus? Animi aspernatur aut beatae commodi excepturi itaque iusto labore laudantium nesciunt nihil nostrum odit quas sit, temporibus, ut? Dignissimos error excepturi libero placeat rem! Architecto assumenda aut eum eveniet excepturi, hic incidunt magnam molestias officiis perferendis saepe totam, vero? Accusantium atque consequuntur debitis earum eos esse, explicabo fuga fugit harum ipsa maxime minus nam nulla perspiciatis, quae, quam repellendus unde. Atque eum fugiat laboriosam numquam officia quia quisquam quos sapiente vel! Aperiam, debitis fuga illum magnam magni non porro quidem quos veritatis!', time: '11:44' },
        { id: 6, user: 'A', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae consequatur iste iure laboriosam magni recusandae unde. Atque cupiditate ex fugiat impedit nostrum officiis! Aliquam assumenda inventore placeat quae qui.', time: '11:53' }
      ],
      files: [],
      textarea: [],
      value: []
    }
  },
  methods: {
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
    }
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
  padding: 10px 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: #E5E5E5;
  overflow-y: scroll;
}
.chat-footer {
  background: #F6F6F6;
  border-top: 1px solid #8E8E8E;
  padding: 15px 0;
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
  @media (max-width: 998px) {
    overflow-x: scroll;
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
