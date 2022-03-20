
 var c = document.getElementById("desenho");
 var ctx = c.getContext("2d");
    
    ctx.strokeStyle = "red";
    ctx.moveTo(20,20);
    ctx.lineTo(20,90);
	ctx.lineTo(70,115);
	ctx.lineTo(120,90);
	ctx.lineTo(120,20);
	ctx.lineTo(20,20);
	ctx.stroke();