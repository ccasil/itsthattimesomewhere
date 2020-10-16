console.log('Client-side code running');

const button = document.getElementById('time-btn');
calculatehours();
setInterval(function () {
  let currentminutes = calculateminutes();
  let currentseconds = (60-(new Date().getSeconds())).toString();
  const newnum = currentminutes + ' minutes and ' + currentseconds + ' seconds until the next x:20';
  document.getElementById('time').innerText = newnum;
  console.log(newnum);
  return newnum;
  // document.getElementById('time').innerHTML = newnum;
}, 1000);

function calculateminutes() {
  let mintemp = (new Date().getMinutes()-20);
  console.log(mintemp);
  if (mintemp > 30) {
    mintemp = mintemp - 60;
  }
  return Math.abs(mintemp).toString();
};

function calculatehours() {
  // 04 or 16
  let hourtemp = (new Date().getHours());
  // if 04 to 15
  // if 16 to 24 && 00 to 03
  console.log(hourtemp);
  return hourtemp.toString();
}


button.addEventListener('click', function (e) {
  console.log('button was clicked', newnum);
});

const textcol = document.getElementById('newtextcolor');
textcol.className = "text-success";