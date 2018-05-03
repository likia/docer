<template>
  <modal-inner aria-label="Insert link">
    <div class="modal__content">
      <p>请输入链接的<b>URL</b></p>
      <form-entry label="链接" error="链接">
        <input slot="field" class="textfield" type="text" v-model.trim="url" @keydown.enter="resolve()">
      </form-entry>
    </div>
    <div class="modal__button-bar">
      <button class="button" @click="reject()">取消</button>
      <button class="button" @click="resolve()">确定</button>
    </div>
  </modal-inner>
</template>

<script>
import modalTemplate from './common/modalTemplate';

export default modalTemplate({
  data: () => ({
    url: '',
  }),
  methods: {
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
