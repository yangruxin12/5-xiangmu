//面向对象实现弹窗
function  ShotBox(obj){
	this.id = obj.id;
	this.class_name = obj.class_name;
	this.shot_container = document.getElementById("shot-container");
	this.tanKuang = obj.getDom(this.class_name[0]);
	this.title_name = obj.getDom(this.class_name[1]);
	this.close = obj.getDom(this.class_name[2]);
	this.div_content = obj.getDom(this.class_name[3]);
	this.press_true = obj.getDom(this.class_name[4]);
	this.press_false = obj.getDom(this.class_name[5]);
	this.success = obj.getDom(this.class_name[6]);
	this.cancel= obj.getDom(this.class_name[7]);
	this.mask = obj.getDom(this.class_name[8]);
	this._w = obj.width;
	this._h = obj.height;
	this.title = obj.title;
	this.content = obj.content;
	this.title_color = obj.title_color;
	this.title_fontSize = obj.title_fontSize;
	this.content_color = obj.content_color;
	this.content_fontSize = obj.content_fontSize;
	this.deg = obj.deg;//关闭按钮旋转的角度
	this.clickX = 0;//保存鼠标按下与弹窗X轴的相对量
	this.clickY = 0;//保存鼠标按下与弹窗Y轴的相对量
	this.init(); // 此方法创建弹窗的宽高，内容，字体大小等
	this.addEvent(); // 此方法用来对弹窗的取消，确认按钮，以及取消事件；
}
ShotBox.prototype.init = function(){
	console.log(this);
	console.log(this.tanKuang);
	this.tanKuang.style.width = this._w ;
	this.tanKuang.style.height = this._h;
	this.title_name.innerHTML = this.title;
	this.div_content.innerHTML = this.content;
	// 设置标题字体颜色与字体大小
	this.title_name.style.color = this.title_color;
	this.title_name.style.fontSize = this.title_fontSize;
	//设置内容的字体颜色和大小
	this.div_content.style.color = this.content_color;
	this.div_content.style.fontSize = this.content_fontSize;
		
};
ShotBox.prototype.addEvent = function(){
	var  that = this; 
	setTimeout(function(){that.shot_container.style.display = "block";},500);
		this.mask.style.display = "block";
		this.tanKuang.style.display = "block";
	// 点击关闭按钮，遮罩与弹窗消失
	this.close.onclick = function(){
		that.mask.style.display = "none";
		that.tanKuang.style.display = "none";
	};
	//点击确认按钮，遮罩与弹窗消失，成功弹出框出现,两秒后消失
	this.press_true.onclick = function(){
		that.mask.style.display = "none";
		that.tanKuang.style.display = "none";
		that.success.style.display = "block";
		setTimeout(function(){
			console.log(that);
			that.success.style.display = "none";
			},2000);
	};
	//点击取消按钮，遮罩与弹窗消失，取消弹出框出现,两秒后消失
	this.press_false.onclick = function(){
		that.mask.style.display = "none";
		that.tanKuang.style.display = "none";
		that.cancel.style.display = "block";
		setTimeout(function(){
			console.log(that);
			that.cancel.style.display = "none";
			},2000);
	};
	//悬浮在close关闭按钮，添加一个旋转效果
	 this.close.onmouseover = function(){
		 console.log("ok");
		 that.close.style.transform = "rotate("+that.deg+"deg)"; 
	 };
	 //当鼠标离开后，将关闭按钮回到初始角度
	 this.close.onmouseout = function(){
	 		 console.log("ok");
	 		 that.close.style.transform = "rotate(0deg)"; 
	 };
	 
	this.tanKuang.onmousedown = function(event){
		that.clickX = event.clientX - that.tanKuang.offsetLeft;
		that.clickY = event.clientY - that.tanKuang.offsetTop;
		document.onmousemove = function(event){
			that.tanKuang.style.left = event.clientX - that.clickX + "px";
			that.tanKuang.style.top  = event.clientY - that.clickY + "px";
		};
		document.onmouseup = function(event){
			document.onmousemove = null;
			document.onmouseup = null;
		};
	};
	
};


