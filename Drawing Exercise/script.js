var my_canvas = document.getElementById('canvas');
var context = my_canvas.getContext("2d");
context.beginPath();
context.arc(75,75,65,0,2*Math.PI);
context.stroke();
context.fillStyle = 'green';
context.fillRect(30,30,400,50);
context.strokeRect(29,29,402,52);
context.font = "50px Garamond";
context.fillText("JETS", 45, 45);
context.strokeText("JETS", 45, 45);