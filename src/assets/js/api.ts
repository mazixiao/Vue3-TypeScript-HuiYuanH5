import config from './config'
import axios from 'axios'
import desCode from './aesUtil'
import mdCode from './md5'

const apiUrl = config.apiUrl.dev
if (location.origin == config.originUrl.test) {
  apiUrl = config.apiUrl.test
}

if (location.origin == config.originUrl.prod) {
  apiUrl = config.apiUrl.prod
}





// 惠元接口


// ==========================(100)进入页================================================

export const EntryPage = () => {
  const formData = new FormData();
  
  // const hello : string = "Hello World!"

  const wMsgID = desCode.wMsgID();
  const md = mdCode.hexMD5('8888' + '100' + wMsgID + 'q1w2e3r4t5y6');
  formData.append('wAgent', '8888');
  formData.append('wAction', '100');
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}


// ==========================(101)首页================================================

export const Home = () => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const md = mdCode.hexMD5('8888' + '101' + wMsgID + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "101");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}


// ================================================ (102) 你好惠元-你好惠元 ================================================
export const Hello = () => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const md = mdCode.hexMD5('8888' + '102' + wMsgID + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "102");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}



// ================================================ (103) 你好惠元模块 ============================================																														
// 入参：bannerposition ///banner位置 
// 						你好惠元/你好惠元/头图上传 4
// 						你好惠元/你好惠元/品牌历程 5
// 						你好惠元/董事寄语/头图上传 6
// 						你好惠元/慈善公益/头图上传 7
// 						你好惠元/新闻管理/头图上传 9
// 	  typename ///类型名称【你好惠元-董事寄语】【你好惠元-慈善公益-图文管理】【你好惠元-慈善公益-图文管理】


export const HelloChildBanner = (params: any) => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const wParam = desCode.to3des(`bannerposition=${params.bannerposition}_typename=${params.typename}`);
  const md = mdCode.hexMD5('8888' + '103' + wMsgID + wParam + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "103");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wParam', wParam);
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}





// ================================================ (104) 查询Banner================================================


export const AllBanner = (params: any) => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const wParam = desCode.to3des(`bannerposition=${params.bannerposition}`);
  const md = mdCode.hexMD5('8888' + '104' + wMsgID + wParam + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "104");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wParam', wParam);
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}


// ================================================ (105) 查询内容================================================																														
// 入参：typename ///类型
// 	  sort ///0默认排序 大于0按时间排序

export const AllContent = (params: any) => {
  const id = 0;
  if (params.id == undefined) {
    id = 0;
  } else {
    id = params.id;
  }

  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const wParam = desCode.to3des(`typename=${params.typename}_sort=${params.sort}_id=${id}`);
  const md = mdCode.hexMD5('8888' + '105' + wMsgID + wParam + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "105");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wParam', wParam);
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}








// ================================================ (106) 查询分类================================================																														
// 入参：type ///类型 1=新闻一级分类 2=新闻二级分类 3=视频分类


export const Classify = (params: any) => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const wParam = desCode.to3des(`type=${params.type}`);
  const md = mdCode.hexMD5('8888' + '106' + wMsgID + wParam + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "106");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wParam', wParam);
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}




// ================================================ (107)新闻资讯 ================================================		
// 入参：  id ///分类id

export const NewsList = (params: any) => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const wParam = desCode.to3des(`id=${params.id}`);
  const md = mdCode.hexMD5('8888' + '107' + wMsgID + wParam + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "107");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wParam', wParam);
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}



// ================================================ (108)查询主体详情 ================================================																														
// 入参： id ///主体id

export const NewsDetail = (params: any) => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const wParam = desCode.to3des(`id=${params.id}`);
  const md = mdCode.hexMD5('8888' + '108' + wMsgID + wParam + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "108");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wParam', wParam);
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}






// ================================================ (109)精品新闻 ================================================	

export const NewsListTop = () => {
  const formData = new FormData();
  const wMsgID = desCode.wMsgID();
  const md = mdCode.hexMD5('8888' + '109' + wMsgID + 'q1w2e3r4t5y6');
  formData.append('wAgent', "8888");
  formData.append('wAction', "109");
  formData.append('wMsgID', wMsgID.toString());
  formData.append('wSign', md);
  formData.append('wImei', '222');
  formData.append('wVersion', '2');
  formData.append('wRequestUserID', '4');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  return axios.post(apiUrl, formData, config)
}