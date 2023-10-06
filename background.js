document.addEventListener('DOMContentLoaded', function() {


var cross = document.getElementsByClassName("close")[0];
if (cross) {
	
	cross.addEventListener("click", () => {
		document.getElementById("about").style.display = "none";
		document.getElementById("mainPage").style.zIndex = 0;
	});
}

var learn = document.getElementById("learnMore");
if (learn) {
	
	learn.addEventListener("click", () => {
		document.getElementById("about").style.display = "flex";
		document.getElementById("mainPage").style.zIndex = -1;
		document.getElementById("about").style.zIndex = 9999;
	});
}


	var el = document.getElementById('checkPage');
	if(el){
		el.addEventListener('click', () => {
			function modifyDOM() {
				return document.getElementsByClassName("FFVAD")[0].src;
			}

			chrome.tabs.executeScript({
				code: '(' + modifyDOM + ')();'
			}, (results) => {
				
				var newURL = results[0];
				if (results[0] != null) {
					chrome.tabs.create({ url: newURL });
				} else {
					
					if (document.getElementsByClassName("story")[0].style.display = "block") {
						document.getElementsByClassName("story")[0].style.display = "none";
					}
					
					
					document.getElementsByClassName("mainPic")[0].style.display = "block";
				}
				//console.log(results);
			});
		});
	}

	var el2 = document.getElementById('checkStory');
	if(el2){
		el2.addEventListener('click', () => {
			function modifyDOM() {
				return document.getElementsByClassName("y-yJ5")[0].src;
			}

			chrome.tabs.executeScript({
				code: '(' + modifyDOM + ')();'
			}, (results) => {
				var newURL = results[0];
				if (results[0] != null) {
					chrome.tabs.create({ url: newURL });
				} else {
					
					if (document.getElementsByClassName("mainPic")[0].style.display = "block") {
						document.getElementsByClassName("mainPic")[0].style.display = "none";
					}

					document.getElementsByClassName("story")[0].style.display = "block";

				}
				//console.log(results);
			});
		});
	}

}, false);