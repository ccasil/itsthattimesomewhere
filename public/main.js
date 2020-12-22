console.log('Client-side code running');

const button = document.getElementById('time-btn');
const subtext = document.getElementById('time-location');
setInterval(function () {
  let currenthours = calculatehours();
  let currentminutes = calculateminutes();
  let currentseconds = (60-(new Date().getSeconds())).toString();
  const newnum = currenthours + ' hours and ' + currentminutes + ' minutes and ' + currentseconds + ' seconds until the next x:20';
  document.getElementById('time').innerText = newnum;
  // console.log(newnum);
  return newnum;
  // document.getElementById('time').innerHTML = newnum;
}, 1000);

function calculateminutes() {
  let mintemp = (new Date().getMinutes()-20);
  // console.log(mintemp);
  if (mintemp > 30) {
    mintemp = mintemp - 60;
  }
  return Math.abs(mintemp).toString();
};

function calculatehours() {
  // 04 or 16
  let hourtemp = (new Date().getHours());
  // if 04 to 15
  if (hourtemp >= 4 && hourtemp <= 15) {
    hourtemp = hourtemp - 12;
  } else {
    // if 16 to 24 && 00 to 03
    hourtemp = hourtemp - 18;
  }
  console.log(hourtemp);
  return hourtemp.toString();
}

setInterval(function () {
  var now = new Date();
  var mins = now.getMinutes();
  var secs = now.getSeconds();
  var response = "it will be " + (80 - mins - 1) + " minutes and " + (60 - secs) + " seconds until the next x:20";
  document.getElementById('responsehour').innerText = response;
}, 1000);

button.addEventListener('click', function (e) {
  subtext.innerHTML += '<p>add</p>';
});

const textcol = document.getElementById('newtextcolor');
textcol.className = "text-success";