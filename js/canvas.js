
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var ball = {
    x: 100,
    y: 100,
    radius: 25,
    color:"black",
    draw: function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillstyle = this.color;
        ctx.fill();
    },
}