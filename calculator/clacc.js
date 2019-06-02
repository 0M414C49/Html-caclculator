var numbers = [];
var numbers2 = [];
var numbers3 = [];
var k = 0;
var k2 = 0;
var aa = 0;
var ea;
var sa = 0;
var fa;
var offMyFun = 1;
var select = "";
///////////////////////////////////////////////////
function myFunction(x) {
  /////////////////////////////////////
  function myFunction2(x){
    numbers3.push(x)
    document.getElementById("demo").innerHTML = numbers3.join('');
  }
  myFunction2(x)
  /////////////////////////////////////
  if (offMyFun<10) {
    numbers.push(x)
    //document.getElementById("demo").innerHTML = numbers.join('');
    //////////////////////////////////////
    function num(numbersx) {
      for (i = 0; i < numbersx.length; i++)
         k = 10 * k + numbersx[i];
         numbersx.shift();
      return k;
  }
  ///////////////////////////////////////
  aa = num(numbers);
}
//////////////////////////////////////////////////
  else{
    numbers2.push(x)
    //document.getElementById("demo").innerHTML = numbers2.join('');
    // ////////////////////
    function num2(numbersx) {
      for (i = 0; i < numbersx.length; i++)
         k2 = 10 * k2 + numbersx[i];
         numbersx.shift();
      return k2;
    };
    //////////////////////
    sa = num2(numbers2);
  };
  };
///////////////////////////////////////////////////
function erase() {
  numbers = [];
  numbers2 = [];
  numbers3 = [];
  k = 0;
  sa =0;
  k2 = 0;
  document.getElementById("demo").innerHTML = 0;
};
/////////////////////////////////////////////////
// function num(numbersx) {
//   for (i = 0; i < numbersx.length; i++)
//      k = 10 * k + numbersx[i];
//      numbersx.shift();
//   return k;
// };

// /////////////////////////////////////////////
function sum() {
  numbers3 = [];
  offMyFun = 11;
  document.getElementById("demo").innerHTML = 0;
  select = 1;
  return fa = aa + sa;
}

function sub() {
  numbers3 = [];
  offMyFun = 11;
  document.getElementById("demo").innerHTML = 0;
  select = 2;
  return fa = aa - sa;
}

function mult() {
  numbers3 = [];
  offMyFun = 11;
  document.getElementById("demo").innerHTML = 0;
  select = 3;
  return fa = aa * sa;
}

function divid() {
  numbers3 = [];
  offMyFun = 11;
  document.getElementById("demo").innerHTML = 0;
  select = 4;
  return fa = aa / sa;
}

function ba8y() {
  numbers3 = [];
  offMyFun = 11;
  document.getElementById("demo").innerHTML = 0;
  select = 5;
  return fa = aa % sa;
}
////////////////////////////////////////////////
function equal() {
  // document.getElementById("demo").innerHTML = sum();
  switch (select) {
    case 1:
      document.getElementById("demo").innerHTML = sum();
      break;
    case 2:
      document.getElementById("demo").innerHTML = sub();
      break;
    case 3:
      document.getElementById("demo").innerHTML = mult();
      break;
    case 4:
      document.getElementById("demo").innerHTML = divid();
      break;
    case 5:
      document.getElementById("demo").innerHTML = ba8y();
      break;
    default:
      document.getElementById("demo").innerHTML = 0;

  }
  offMyFun = 1;
  numbers = [];
  numbers2 = [];
  numbers3 = [];
  // sa = 0;
  // aa = 0;
};

//////////////////////////////
function sign() {
  // document.getElementById("demo").innerHTML = sum();
  switch (select) {
    case 1:
      document.getElementById("demo").innerHTML = sum() * -1;
      break;
    case 2:
      document.getElementById("demo").innerHTML = sub() * -1;
      break;
    case 3:
      document.getElementById("demo").innerHTML = mult() * -1;
      break;
    case 4:
      document.getElementById("demo").innerHTML = divid() * -1;
      break;
    case 5:
      document.getElementById("demo").innerHTML = ba8y() * -1;
      break;
    default:
      document.getElementById("demo").innerHTML = 0;

  }
  // offMyFun = 1;
  // numbers = [];
  // numbers2 = [];
  // numbers3 = [];
  // sa = 0;
  // aa = 0;
};
