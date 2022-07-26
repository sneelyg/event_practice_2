window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
	});
};
document.querySelector('#btn1').addEventListener('click', (e)=>{
	alert (e.target);

});
document.querySelector('#anchor1').addEventListener('click', (e)=>{
	alert (e.target);
});
document.querySelector('#img1').addEventListener('click', (e)=>{
	alert (e.target);
});