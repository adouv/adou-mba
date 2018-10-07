import Vue from 'vue'
/** 
 * http请求
 */
export default {
  wxHttpRequest(url, method, params = {}) {

    let baseUrl = "https://www.a-dou.com/ashx/";
    //let baseUrl = "http://localhost:54546/ashx/";
    
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
