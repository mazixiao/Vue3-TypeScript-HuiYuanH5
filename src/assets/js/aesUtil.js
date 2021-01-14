import crypto from './aes'
//十六位十六进制数作为秘钥
var key = crypto.CryptoJS.enc.Latin1.parse('1qaz2wsx3edc4rfv');
//十六位十六进制数作为秘钥偏移量
var iv = crypto.CryptoJS.enc.Latin1.parse('qwertyuioplkjhgf');

function to3des (message) {
  // var des3 = encrypt('u82iy12d0gske6g830fnl92y', message);
  // console.log("des3的值" + des3)
  // return des3.replace(/\+/g, '*').replace(/\//g, '^').replace(/\=/g, '-')
  //return message;
  console.log("原来的值----------------" + message);
  var des3 ="";
  var encrypted = crypto.CryptoJS.AES.encrypt(message, key, {
  iv: iv,
  mode: crypto.CryptoJS.mode.CBC,
  padding: crypto.CryptoJS.pad.ZeroPadding
  });
  des3 = encrypted.toString();
  
  console.log("des3加密的值----------------" + des3);
  
  
  var desDecrypt="";
  var decrypted = crypto.CryptoJS.AES.decrypt(des3, key, { iv: iv, padding: crypto.CryptoJS.pad.ZeroPadding });
  desDecrypt=decrypted.toString(crypto.CryptoJS.enc.Utf8)
  console.log("decrypted解密的值-------------" + desDecrypt);
  
  
  console.log("des3的replace值-------------" + des3.replace(/\+/g, '*').replace(/\//g, '^').replace(/\=/g, '-'));
  return des3.replace(/\+/g, '*').replace(/\//g, '^').replace(/\=/g, '-')
}

function wMsgID () {
  return Date.parse(new Date())
}

export default{
  to3des,
  wMsgID
}