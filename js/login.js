window.onload=function(){
	var aInput = document.querySelectorAll('.login_input>input');
	for (var i = 0; i < aInput.length; i++) {
		aInput[i].onfocus = function(){
			this.parentNode.className = 'login_input hide_close';
			this.style.borderBottom = '3px solid black';
		}
		aInput[i].onblur = function(){
			this.style.borderBottom = '';
			if(this.value==''){
				this.parentNode.className = 'login_input show_close';
				this.style.borderBottom = '3px solid red';
			}
		}
	}
	//登录注册按钮特效
	var adInput = document.querySelectorAll('.input_btn');
	var adInputSpan = document.querySelectorAll('.input_btn span');
	for (let i = 0; i < adInput.length; i++) {
		adInput[i].onmouseover = function(){
			if (i==0) {
				adInputSpan[i].style.right = 150 + 'px';
			}else{
				adInputSpan[i].style.right = 105 + 'px';
			}
			this.style.backgroundColor = '#0a6a9e';
		}
		adInput[i].onmouseout = function(){
			if (i==0) {
				adInputSpan[i].style.right = 170 + 'px';
			}else{
				adInputSpan[i].style.right = 125 + 'px';
			}
			this.style.backgroundColor = '#0286cd';
		}
	}
	/*
	用户登陆
	get/post
		guestbook/index.php
			m : index
			a : login
			username : 要登陆的用户名
			password : 登陆的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	var oLogin = document.getElementById('login');
	var oUsername = document.getElementById('username');
	var oPassword = document.getElementById('password');
	var oSucUsername = document.getElementById('suc_username');
	var oMain = document.getElementById('main');
	var oMainChild = document.querySelector('#main>div');
	var oRemenber = document.getElementById('remenber');
	oLogin.onclick = function(){
		ajax('get','guestbook/index.php','m=index&a=login&username='+encodeURI(oUsername.value)+'&password='+oPassword.value,function(data){
			d = JSON.parse(data);
			alert(d.message);
			if (!d.code) {
				oSucUsername.innerHTML = oUsername.value;
				oSucUsername.href = '#';
				oMain.style.height = 500 + 'px';
				oMain.removeChild(oMainChild);
				//记住我的信息
				if (oRemenber.checked) {
					oUsername.value = getCookie('username');
					oPassword.value = getCookie('password');
				}
			}
		});
	} 
	/*
	用户退出
	get/post
		guestbook/index.php
			m : index
			a : logout
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	var oLogout = document.getElementById('logout');
	oLogout.onclick = function() {
		
		ajax('get', 'guestbook/index.php', 'm=index&a=logout', function(data) {
			
			var d = JSON.parse(data);
			alert(d.message);
			
			if (!d.code) {
				oSucUsername.innerHTML = '登录';
				oSucUsername.href = 'login.html';
				oMain.style.height = '100%';
				oMain.appendChild(oMainChild);
			}
			
		});
		
		return false;
		
	}
}
function getCookie(key) {
	var arr1 = document.cookie.split('; ');
	for (var i=0; i<arr1.length; i++) {
		var arr2 = arr1[i].split('=');
		if (arr2[0]==key) {
			return arr2[1];
		}
	}
}