export default {
  /** 
   * 获取当前页url
   */
  getCurrentPageUrl() {
    //获取加载的页面
    var pages = getCurrentPages();
    //获取当前页面的对象
    var currentPage = pages[pages.length - 1];
    //当前页面url
    var url = currentPage.route;

    return url;
  },
  /** 
   * 获取当前页面参数的url
   */
  getCurrentPageUrlWithArgs() {
    //获取加载的页面
    var pages = getCurrentPages();
    //获取当前页面的对象
    var currentPage = pages[pages.length - 1];
    //当前页面url
    var url = currentPage.route;
    //如果要获取url中所带的参数可以查看options
    var options = currentPage.options;

    return options;
  }
}
