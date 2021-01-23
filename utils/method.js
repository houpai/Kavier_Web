export let _Vue
export default {
  install(Vue) {
    if (this.installed && _Vue === Vue) return
    this.installed = true
    _Vue = Vue
    _Vue.prototype.NOTICE = true
    _Vue.mixin({
      created: function () {
      },
      mounted() {
      },
      methods: {}
    })
    //验证手机号码
    _Vue.prototype.TestPhone = value => {
      if (/^1[0-9]{10}$/.test(value)) {
        return true
      } else {
        return false
      }
    }

    /**
     *@desc blob转换base64
     *@return callBack
     *@author houpai
     *@date 2020/02/14 09:39:12
     */
    _Vue.prototype.$blobToBase64 = (blob_data, callback) => {
      let reader = new FileReader()
      reader.onload = (e) => {
        if (callback) {
          callback(e.target.result)
        }
      }
      reader.readAsDataURL(blob_data)
    }

    /**
     * @Description: 数组平均分成number份;
     * @Author: 侯湃
     * @Date: 2020/11/9
     */
    _Vue.prototype.$averageArray = (arr, number) => {
      let newArr = [];
      for (let i = 0; i < arr.length; i += number) {
        newArr.push(arr.slice(i, i + number));
      }
      return newArr;
    };
  }
}
