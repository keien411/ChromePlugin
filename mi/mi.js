setInterval(function() {
	if(Date.now() >= new Date("2018-02-01 14:00:01")){
		if (document.getElementsByClassName('modal modal-hide modal-bigtap-queue in').length > 0) {
			if (document.getElementsByClassName('modal modal-hide modal-bigtap-queue in')[0].style.display == "block") {
				console.log('正在排队');
			}
		}
		
		else{
			if (document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec in').length > 0) {
				document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec in')[0].childNodes[1].click();
			}

			if (document.getElementById('J_miAlertConfirm')) {
				document.getElementById('J_miAlertConfirm').click();
			}

			if (document.getElementById('J_bigtapRetry')) {
				document.getElementById('J_bigtapRetry').click();
			}

			if (document.getElementsByClassName('modal-backdrop fade in').length > 0) {
				for(var i = 0; i < document.getElementsByClassName('modal-backdrop fade in').length; i++){
					document.getElementsByClassName('modal-backdrop fade in')[i].parentNode.removeChild(document.getElementsByClassName('modal-backdrop fade in')[i]);
				}
			}

			if (document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec in').length > 1) {
				for(var a = 0; a < document.getElementsByClassName('modal-backdrop fade in').length; a++){
					document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec in')[a].parentNode.removeChild(document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec in')[a]);
				}
			}

			if (document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec').length > 1) {
				for(var a = 0; a < document.getElementsByClassName('modal-backdrop fade in').length; a++){
					document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec')[a].parentNode.removeChild(document.getElementsByClassName('modal fade modal-hide modal-bigtap-soldout  modal-bigtap-soldout-norec')[a]);
				}
			}

			document.getElementsByClassName('btn btn-primary  btn-biglarge J_proBuyBtn')[0].click(); 
		}
	}
	else {
		console.log('未开始')
	}

},10);


