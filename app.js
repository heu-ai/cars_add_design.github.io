// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];


// Opening the 1st Image
openfile(imges[0]);
clickpattern();

// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});

// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};

function page1func(op){
    document.getElementById("btn1").style = "display:none !important";
    document.getElementById("btn2").style = "display:none !important";
    document.getElementById("btn3").style = "display:none !important";
    document.getElementById("btn4").style = "display:none !important";
    document.getElementById("btn5").style = "display:none !important";
    document.getElementById("btn6").style = "display:none !important";
    document.getElementById("btn7").style = "display:none !important";
    document.getElementById("btn8").style = "display:none !important";
    document.getElementById("cartype1").style = "display:none !important";
    document.getElementById("cartype2").style = "display:none !important";
    document.getElementById("cartype3").style = "display:none !important";
    document.getElementById("time1").style = "display:none !important";
    document.getElementById("time2").style = "display:none !important";
    document.getElementById("time3").style = "display:none !important";
    document.getElementById("hold").style = "display:none !important";
    document.getElementById("confirm").style = "display:none !important";
    document.getElementById("close").style = "display:none !important";

    var menu1 = document.getElementById("menu1");
    menu1.style = "position: absolute;top: 368px;left: 8px;height: 39px;background: transparent;width: 320px;border-radius: 2%;border: 1px solid transparent;";
    menu1.onclick = function(){op.src=imges[1]; page2func(op);};

    var menu2 = document.getElementById("menu2");
    menu2.style = "position: absolute;top: 408px;left: 8px;height: 39px;background: transparent;width: 320px;border-radius: 2%;border: 1px solid transparent;";
    menu2.onclick = function(){op.src=imges[2]; page3func(op);};

    var menu3 = document.getElementById("menu3");
    menu3.style = "position: absolute;top: 448px;left: 8px;height: 39px;background: transparent;width: 320px;border-radius: 2%;border: 1px solid transparent;";
    menu3.onclick = function(){op.src=imges[3]; page4func(op);};
};

function page2func(op){
    var select = 0;
    document.getElementById("menu1").style = "display:none !important";
    document.getElementById("menu2").style = "display:none !important";
    document.getElementById("menu3").style = "display:none !important";
    document.getElementById("cartype1").style = "display:none !important";
    document.getElementById("cartype2").style = "display:none !important";
    document.getElementById("cartype3").style = "display:none !important";
    document.getElementById("time1").style = "display:none !important";
    document.getElementById("time2").style = "display:none !important";
    document.getElementById("time3").style = "display:none !important";
    document.getElementById("hold").style = "display:none !important";

    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 264px;left: 64px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn1.onclick = function(){select=1;};

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 296px;left: 64px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn2.onclick = function(){select=1;};

    var btn3 = document.getElementById("btn3");
    btn3.style = "position: absolute;top: 329px;left: 64px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn3.onclick = function(){select=1;};

    var btn4 = document.getElementById("btn4");
    btn4.style = "position: absolute;top: 361px;left: 64px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn4.onclick = function(){select=1;};

    var btn5 = document.getElementById("btn5");
    btn5.style = "position: absolute;top: 264px;left: 181px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn5.onclick = function(){select=1;};

    var btn6 = document.getElementById("btn6");
    btn6.style = "position: absolute;top: 296px;left: 181px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn6.onclick = function(){select=1;};

    var btn7 = document.getElementById("btn7");
    btn7.style = "position: absolute;top: 329px;left: 181px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn7.onclick = function(){select=1;};

    var btn8 = document.getElementById("btn8");
    btn8.style = "position: absolute;top: 361px;left: 181px;height: 27px;background: transparent;width: 93px;border-radius: 2%;border: 1px solid transparent;";
    btn8.onclick = function(){select=1;};

    var confirm = document.getElementById("confirm");
    confirm.style = "position: absolute;top: 411px;left: 96px;height: 43px;background: transparent;width: 150px;border-radius: 2%;border: 1px solid transparent;";
    confirm.onclick = function(){if(select==1) {op.src=imges[0]; page1func(op);};};

    var close = document.getElementById("close");
    close.style = "position: absolute;top: 20px;left: 302px;height: 20px;background: transparent;width: 20px;border-radius: 50%;border: 1px solid transparent;";
    close.onclick = function(){op.src=imges[0]; page1func(op);};
};

function page3func(op){
    var ct3 = 0;
    document.getElementById("menu1").style = "display:none !important";
    document.getElementById("menu2").style = "display:none !important";
    document.getElementById("menu3").style = "display:none !important";
    document.getElementById("btn1").style = "display:none !important";
    document.getElementById("btn2").style = "display:none !important";
    document.getElementById("btn3").style = "display:none !important";
    document.getElementById("btn4").style = "display:none !important";
    document.getElementById("btn5").style = "display:none !important";
    document.getElementById("btn6").style = "display:none !important";
    document.getElementById("btn7").style = "display:none !important";
    document.getElementById("btn8").style = "display:none !important";
    document.getElementById("time1").style = "display:none !important";
    document.getElementById("time2").style = "display:none !important";
    document.getElementById("time3").style = "display:none !important";
    document.getElementById("hold").style = "display:none !important";

    var cartype1 = document.getElementById("cartype1");
    cartype1.style = "position: absolute;top: 205px;left: 28px;height: 70px;background: transparent;width: 87px;border-radius: 2%;border: 1px solid transparent;";

    var cartype2 = document.getElementById("cartype2");
    cartype2.style = "position: absolute;top: 205px;left: 120px;height: 70px;background: transparent;width: 87px;border-radius: 2%;border: 1px solid transparent;";

    var cartype3 = document.getElementById("cartype3");
    cartype3.style = "position: absolute;top: 205px;left: 218px;height: 70px;background: transparent;width: 87px;border-radius: 2%;border: 1px solid transparent;";
    cartype3.onclick = function(){ct3=1;}

    var confirm = document.getElementById("confirm");
    confirm.style = "position: absolute;top: 316px;left: 73px;height: 44px;background: transparent;width: 185px;border-radius: 2%;border: 1px solid transparent;";
    confirm.onclick = function(){if (ct3==1) {op.src=imges[4]; page1func(op);};};

    var close = document.getElementById("close");
    close.style = "position: absolute;top: 111px;left: 302px;height: 20px;background: transparent;width: 20px;border-radius: 50%;border: 1px solid transparent;";
    close.onclick = function(){op.src=imges[0]; page1func(op);};
};

function page4func(op){
    document.getElementById("menu1").style = "display:none !important";
    document.getElementById("menu2").style = "display:none !important";
    document.getElementById("menu3").style = "display:none !important";
    document.getElementById("btn1").style = "display:none !important";
    document.getElementById("btn2").style = "display:none !important";
    document.getElementById("btn3").style = "display:none !important";
    document.getElementById("btn4").style = "display:none !important";
    document.getElementById("btn5").style = "display:none !important";
    document.getElementById("btn6").style = "display:none !important";
    document.getElementById("btn7").style = "display:none !important";
    document.getElementById("btn8").style = "display:none !important";
    document.getElementById("cartype1").style = "display:none !important";
    document.getElementById("cartype2").style = "display:none !important";
    document.getElementById("cartype3").style = "display:none !important";

    var btn1 = document.getElementById("time1");
    btn1.style = "position: absolute;top: 214px;left: 46px;height: 33px;background: transparent;width: 33px;border-radius: 50%;border: 1px solid transparent;";

    var btn2 = document.getElementById("time2");
    btn2.style = "position: absolute;top: 214px;left: 145px;height: 33px;background: transparent;width: 33px;border-radius: 50%;border: 1px solid transparent;";

    var btn3 = document.getElementById("time3");
    btn3.style = "position: absolute;top: 214px;left: 252px;height: 33px;background: transparent;width: 33px;border-radius: 50%;border: 1px solid transparent;";

    var btn4 = document.getElementById("hold");
    btn4.style = "position: absolute;top: 320px;left: 28px;height: 40px;background: transparent;width: 126px;border-radius: 2%;border: 1px solid transparent;";
    btn4.onclick = function(){op.src=imges[0]; page1func(op);};

    var btn5 = document.getElementById("confirm");
    btn5.style = "position: absolute;top: 320px;left: 165px;height: 40px;background: transparent;width: 140px;border-radius: 2%;border: 1px solid transparent;";
    btn5.onclick = function(){op.src=imges[0]; page1func(op);};

    var close = document.getElementById("close");
    close.style = "position: absolute;top: 112px;left: 303px;height: 20px;background: transparent;width: 20px;border-radius: 50%;border: 1px solid transparent;";
    close.onclick = function(){op.src=imges[0]; page1func(op);};
};

// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;

    if (op.src.search('1.png') > -1)
    {
        page1func(op);
    }
};


function FindPosition(oElement){
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};

//Getting a Co-ordinates of Mouse click
function GetCoordinates(e){

  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);

  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};