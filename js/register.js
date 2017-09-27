//登录注册按钮特效
var adInput = document.querySelector('.input_btn');
var adInputSpan = document.querySelector('.input_btn span');
adInput.onmouseover = function(){
	adInputSpan.style.right = 105 + 'px';
	this.style.backgroundColor = '#0a6a9e';
}
adInput.onmouseout = function(){
	adInputSpan.style.right = 125 + 'px';
	this.style.backgroundColor = '#0286cd';
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
/*
	验证用户名
	get
		guestbook/index.php
			m : index
			a : verifyUserName
			username : 要验证的用户名
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	var oUsername = document.getElementById('input1');
	var oPassword1 = document.getElementById('input2');
	var oPassword2 = document.getElementById('input3');
	var oVerifyUserNameMsg = document.getElementById('verifyUserNameMsg');
	var oVerifyPassword1 = document.getElementById('verifyPassword1');
	var oVerifyPassword2 = document.getElementById('verifyPassword2');
	var usernameDoor = false;
	var passwordDoor = false;
	oPassword2.onblur = function(){
		if (oPassword2.value!=oPassword1.value) {
			oVerifyPassword2.innerHTML = '请您重新确认输入的密码';
			oVerifyPassword2.style.color = 'red';
			passwordDoor = false;
		}else{
			oVerifyPassword2.innerHTML = '两次密码输入正确';
			oVerifyPassword2.style.color = 'green';
		 	passwordDoor = true;
		}
	}
	oUsername.onblur = function() {
		ajax('get', 'guestbook/index.php', 'm=index&a=verifyUserName&username=' + this.value, function(data) {
			//alert(data);
			var d = JSON.parse(data);
			
			oVerifyUserNameMsg.innerHTML = d.message;
			
			if (d.code) {
				oVerifyUserNameMsg.style.color = 'red';
				usernameDoor = false;
			} else {
				oVerifyUserNameMsg.style.color = 'green';
				usernameDoor = true;
			}
		});
	}
	
	/*
	用户注册
	get/post
		guestbook/index.php
			m : index
			a : reg
			username : 要注册的用户名
			password : 注册的密码
		返回
			{
				code : 返回的信息代码 0 = 没有错误，1 = 有错误
				message : 返回的信息 具体返回信息
			}
	*/
	var oRegBtn = document.getElementById('register');
	oRegBtn.onclick = function() {
		if (passwordDoor&&usernameDoor) {
			ajax('post', 'guestbook/index.php', 'm=index&a=reg&username='+encodeURI(oUsername.value)+'&password=' + oPassword1.value, function(data) {
				var d = JSON.parse(data);
				alert(d.message);
				window.location = 'login.html';
			});
		}else{
			alert('请重新更改您的注册信息！');
		}
	}