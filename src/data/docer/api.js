import Api from '../../services/api';


export default {
  /**
   * 上传图片文件
   * @param file
   */
  uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    return new Promise((res, rej) => {
      new Api('/upload/')
        .success((resp) => {
          res(resp);
        })
        .fail((resp) => {
          rej(resp);
        })
        .post(formData);
    });
  },

};
