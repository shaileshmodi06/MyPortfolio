let modi = document.getElementById('modi').innerText;
var str = modi.split("");
var el = document.getElementById("str");
(function animate(){
str.length > 0 ? el.innerHTML += str.shift():
clearTimeout(running);
var running = setTimeout(animate , 90)

});


// window.addEventListener('scroll', () => {

// let value = window.scrollY ;
// modi.style.Left =value* 1.5 + 'px';

// }

// );

