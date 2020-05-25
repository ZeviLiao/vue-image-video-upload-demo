

<template>
  <div class="container">
    <img class="img-size" src="https://imgcdn.cna.com.tw/www/WebPhotos/newstopic/202002/800x600_871437977434.jpg" alt=""/>
    <div class="large-12 medium-12 small-12 cell">
      <label>
        Files
        <input
          type="file"
          id="files"
          ref="files"
          accept="image/*"
          multiple
          v-on:change="handleFilesUpload()"
        />
      </label>
    </div>
    <div class="large-12 medium-12 small-12 cell">
      <div class="grid-x">
        <div v-for="(file, key) in files" class="large-4 medium-4 small-6 cell file-listing" :key="key">
          {{ file.name }}
          <img class="preview" v-bind:ref="'image'+parseInt( key )" />
        </div>
        
      </div>
    </div>
    <h1>hello</h1>
    
    <br />
    <div class="large-12 medium-12 small-12 cell clear">
      <button v-on:click="addFiles()">Add Files</button>
    </div>
    <br />
    <div class="large-12 medium-12 small-12 cell">
      <button v-on:click="submitFiles()">Submit</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  /*
      Defines the data used by the component
    */
  data() {
    return {
      files: [], 
      uploadedFileUrl: 'https://i2.kknews.cc/SIG=kmegkb/2p3r0001n47soqn35q85.jpg'
    };
  },

  /*
      Defines the method used by the component
    */
  methods: {
    addFiles() {
      this.$refs.files.click();
    },
    submitFiles() {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);
      }
      axios
        .post("https://www.mocky.io/v2/5185415ba171ea3a00704eed", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");

        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    },

    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }

      this.getImagePreviews();
    },

    getImagePreviews() {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          let reader = new FileReader();

          reader.addEventListener(
            "load",
            function() {
              this.$refs["image" + parseInt(i)][0].src = reader.result;
            }.bind(this),
            false
          );

          reader.readAsDataURL(this.files[i]);
        }
      }
    }
  }
};
</script>

<style>
input[type="file"] {
  position: absolute;
  top: -500px;
}
div.file-listing img {
  max-width: 90%;
}


.img-size{
  object-fit: contain;
  width:300px;
  height:300px;
  /* background-color:#fafafa; */
  border:1px solid #ccc;
  border-radius:4px;
}
</style>
