import Vue from 'vue';

/**
 * 链式调用axios封装
 * 用法:
 * Api('/api/member/index')
 * .post({ id: 1 })
 * .toast()
 */
export default class Api {
  constructor(url) {
    this._url = url;
  }

  /**
   * 成功回调
   * @param callback
   */
  success(callback) {
    this._onsuccess = callback;
    return this;
  }

  /**
   * 失败回调
   * @param callback
   */
  fail(callback) {
    this._onfail = callback
    return this;
  }

  /**
   * 发送数据
   * @param data
   */
  post(data) {
    Vue.prototype.$http.post(this._url, data).then((r) => {
      const resp = r.data
      if (resp.status) {
        // 调成功
        if (typeof this._onsuccess === 'function') {
          this._onsuccess(resp);
        }
        // 自带回调
        if (typeof this._suc === 'function') {
          this._suc(resp);
        }
      } else {
        // 调失败
        if (typeof this._onfail === 'function') {
          this._onfail(resp);
        }
        // 自带回调
        if (typeof this._fail === 'function') {
          this._fail(resp);
        }
      }
    });
    return this;
  }

  // /**
  //  * 弹出提示框
  //  */
  // alert() {
  //   this._suc = this._fail = (resp) => {
  //     Vue.prototype.$Messagebox.alert(resp.prompt);
  //   };
  // }

  // /**
  //  * 弹出toast
  //  */
  // toast() {
  //   this._suc = this._fail = (resp) => {
  //     Vue.prototype.$Toast(resp.prompt);
  //   };
  // }
}
