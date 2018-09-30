import Vue from 'vue'
/** 
 * http请求
 */
export default {
  wxHttpRequest(url, method, params = {}) {

    let baseUrl = "http://a-dou.com/ashx/";

    return new Promise((resolve, reject) => {
      let options = {
        url: baseUrl + url,
        data: params,
        method: method,
        header: {
          'Content-Type': 'application/json'
        },
        success: (response) => {
          resolve(response.data);
        },
        fail: (error) => {
          reject(error);
        },
        complete: () => {
          console.log('complete');
        }
      };
      wx.request(options);
    });
  },
  interceptor(response) {
    return response.data;
  }
}
