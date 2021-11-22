
var holloprice = 479;
var connectprice = 0;
function toggleHolloSize(Id)
{
  document.getElementById("piccolo").style.border="2px solid #393D42";
  document.getElementById("magnum").style.border="2px solid #393D42";
  var selected = document.getElementById(Id);
  selected.style.border="2px solid #45a29e";
  if(Id=="piccolo"){
    holloprice=479;
  }
  else if(Id=="magnum"){
    holloprice=499;
  }
  let price = holloprice + connectprice;
  let strprice= price.toString();
  document.getElementById('buy now').innerText = "Buy Now\n" + "$" + strprice;
}
function toggleBandSize(Id)
{
  document.getElementById("large").style.border="2px solid #393D42";
  document.getElementById("regular").style.border="2px solid #393D42";
  var selected = document.getElementById(Id);
  selected.style.border="2px solid #45a29e";
}
function toggleColour(Id)
{
  document.getElementById("blue").style.border="2px solid #393D42";
  document.getElementById("green").style.border="2px solid #393D42";
  document.getElementById("yellow").style.border="2px solid #393D42";
  document.getElementById("red").style.border="2px solid #393D42";
  var selected = document.getElementById(Id);
  selected.style.border="6px solid #45a29e";
}
function toggleConnectivity(Id)
{
  document.getElementById("gps").style.border="2px solid #393D42";
  document.getElementById("cell").style.border="2px solid #393D42";
  var selected = document.getElementById(Id);
  selected.style.border="2px solid #45a29e";
  if(Id=="gps"){
    connectprice=0;
  }
  else if(Id=="cell"){
    connectprice=200;
  }
  let price = holloprice + connectprice;
  let strprice= price.toString();
  document.getElementById('buy now').innerText = "Buy Now\n" + "$" + strprice;
  document.getElementById('buy now').style.color = "#66fcf1";
}
