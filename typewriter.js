var i = 0;
var txt = 'S P A C E';
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrita").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
