/* This file may contains your javascript features */
function changeColors (newCSS){
  document.getElementById('currentCSS').href = 'css/themes/'+newCSS+('.css');
};


	var n = document.getElementById('wrappernav');
	n.classList.add('is-closed');
	function navi() {
		
		if (window.matchMedia("(max-width:40em)").matches && document.getElementById("toggle-nav")==undefined) {			
			n.insertAdjacentHTML('afterBegin','<button id="toggle-nav">Voir les liens</button>');

			
			t = document.getElementById('toggle-nav');  
			t.onclick=function(){
				n.classList.toggle('is-closed');
			}
		}
		if (window.matchMedia("(min-width:40em)").matches && document.getElementById("toggle-nav")) {
			document.getElementById("toggle-nav").outerHTML="";
		}
		
	}

	navi();
	window.addEventListener('resize', navi);
