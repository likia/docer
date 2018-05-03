<template>
  <modal-inner aria-label="Insert image">
    <div class="modal__content">
      <p>请输入外链图片的<b>URL</b></p>
      <form-entry label="链接" error="url">
        <input slot="field" class="textfield" type="text" v-model.trim="url" @keydown.enter="resolve()">
      </form-entry>
      <menu-entry @click.native="upload">
        <span style="padding-left: 5px;">
          <svg style="color: #888888; width: 30px; height: 30px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M938.855808 638.776382l0 270.299169c0 27.41028-22.210861 49.634444-49.621141 49.634444l-754.442728 0c-27.41028 0-49.647747-22.224164-49.647747-49.634444L85.144192 638.776382c0-27.41028 22.224164-49.634444 49.634444-49.634444s49.634444 22.224164 49.634444 49.634444l0 220.664725 655.17384 0L839.58692 638.776382c0-27.41028 22.224164-49.634444 49.634444-49.634444S938.855808 611.366102 938.855808 638.776382zM349.445764 351.817788l112.918769-115.288746 0 429.77837c0 27.411303 22.224164 49.634444 49.634444 49.634444 27.41028 0 49.634444-22.223141 49.634444-49.634444L561.633421 236.534158 674.547073 351.812671c9.722432 9.927093 22.591531 14.904455 35.470863 14.904455 12.524245 0 25.071002-4.716418 34.725896-14.172791 19.583011-19.184945 19.913539-50.608631 0.733711-70.190619L547.478026 80.195483c-9.335622-9.535167-22.116717-14.905478-35.46063-14.905478-13.338796 0-26.120914 5.370311-35.456536 14.900362L278.542924 282.3486c-19.184945 19.588127-18.86465 51.010791 0.722454 70.190619C298.847365 371.724163 330.271052 371.394658 349.445764 351.817788z" /></svg>
        </span>
        <span>上传图片</span>
        <input @change="uploadDone" ref="file" type="file" class="hidden-file">
      </menu-entry>
    </div>
    <div class="modal__button-bar">
      <button class="button" @click="reject()">取消</button>
      <button class="button" @click="resolve()">确定</button>
    </div>
  </modal-inner>
</template>

<script>
import modalTemplate from './common/modalTemplate';
import MenuEntry from '../menus/common/MenuEntry';

export default modalTemplate({
  components: {
    MenuEntry,
  },
  data: () => ({
    url: '',
  }),
  computed: {
  },
  methods: {
    uploadDone(e) {
      const file = e.target.files[0];
      console.log(file);
    },
    /**
     *  上传图片
     */
    upload() {
      this.$refs.file.click();
    },
    resolve() {
      if (!this.url) {
        this.setError('url');
      } else {
        const callback = this.config.callback;
        this.config.resolve();
        callback(this.url);
      }
    },
    reject() {
      const callback = this.config.callback;
      this.config.reject();
      callback(null);
    },
  },
});
</script>
