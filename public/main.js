console.log('Client-side code running');

const button = document.getElementById('time-btn');
let current = new Date().getTime()

button.addEventListener('click', function(e) {
  console.log('button was clicked');
    // document.getElementById('time').innerHTML = (3600000 - current % 3600000).toString();
});

setInterval(function(){
  const newnum = (3600000 - current % 3600000).toString()
  document.getElementById('time').innerHTML = newnum;
 }, 100);

const textcol = document.getElementById('newtextcolor');
textcol.className = "text-success";