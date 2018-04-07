setInterval(function() {
	if(Date.now() >= new Date("2018-02-02 10:00:01")){

			if (document.getElementById('pointer_list')) {
				document.getElementById('pointer_list').childNodes[1].click();
				console.log("执行0000000000");
			}
			


			var button = document.getElementById("btn_submit");
			if (button) {
				button.click();
				console.log("执行2222222222");
			}



		
	}
	else {
		console.log('未开始')
	}

},10);