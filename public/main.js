console.log('Client-side code running');

const button = document.getElementById('time-btn');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
    document.getElementById('time').innerHTML = new Date().toString();
});