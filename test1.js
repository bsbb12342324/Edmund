function checkpost(){
if(document.forms[0].name.value=="w@devhub.co"&&document.forms[0].pw.value=="123123123"){
window.location.href='http://www.baidu.com';
}else{
alert("用户名或密码不正确！")
window.history.back(-1);
return false;

}
}