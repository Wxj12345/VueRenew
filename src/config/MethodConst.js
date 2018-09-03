
const methodinfo = {
  // 获取酒店信息
  gethotel: '/PUB/hotelid/gethotel',
  //	获取可登陆的酒店列表
  getloginhotel: '/STATION/station/getLoginHotel',
  //获取本店授权的且该工号可管理的应用列表
  getenabledappid:'/STATION/station/getEnabledAppid',
  // 获取当前应用的站点设备
  getstationinhotel:'/STATION/station/getStationInHotel',
  //获取指定站点，指定应用的授权信息
  getstationappinfor:'/STATION/station/getStationAppInfor',
  // 修改站点描述
  updatestationdes:'/STATION/station/updateStationDes',
  // 修改设备使用状态
  updatestationsta:'/STATION/station/updateStationSta',
  //修改设备对应的APP授权状态
  updatestationappsta:'/STATION/station/updateStationAppSta',
  /*
   *
   * 工号相关接口
   *
   */
  //注册
  regist: '/STATION/station/regist',
//  登录
  login: '/STATION/station/login',
  // 修改密码
  modifypassword: '/SC/reserve/sysempno/modifypassword',
  // 根据工号获取酒店信息
  getempnohotellist: '/SC/reserve/sysempno/getempnohotellist',
  // 获取工号信息列表
  getempnolist: '/SC/reserve/sysempno/getempnolist',
  // 获取工号详情
  getempnoinfo: '/SC/reserve/sysempno/getempnoinfo',
 /*
  系统相关接口
 */
  auth: '/auth',
  getloginhotellist: '/getloginhotellist',

  url: 'http://172.10.60.61:8083/'
}
module.exports = exports = methodinfo
