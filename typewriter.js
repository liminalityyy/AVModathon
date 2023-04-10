var i = 0;
var txt = 'You were too late :(';
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrita").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
