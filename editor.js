/*document.getElementsByClassName('run').onkeyup=function(){myfunction()};

function myfunction(){
	let htmlcode=document.getElementById('html-code').value;
	let csscode=document.getElementById('css-code').value;
	let jscode=document.getElementById('js-code').value;
	let output=document.getElementById('output');

	output.contentDocument.body.innerHTML=htmlcode;
}
*/

document.getElementById('html-code').onkeyup=function(){
	let htmlcode=document.getElementById('html-code').value;
	let csscode=document.getElementById('css-code').value;
	let output=document.getElementById('output');

	output.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";

}

document.getElementById('css-code').onkeyup=function(){
    let csscode=document.getElementById('css-code').value;
    let htmlcode=document.getElementById('html-code').value;
    let output=document.getElementById('output');
    output.contentDocument.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";
}

document.getElementById('js-code').onkeyup=function(){
	let jscode=document.getElementById('js-code').value;
	let output=document.getElementById('output');

	output.ContentWindow.eval(jscode);
}