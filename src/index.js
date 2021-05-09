function sohbeteBasla() {
  myName = nameInput.value;
  if (myName.length > 0) {
    console.log(myName);
    login.classList.add('hidden');
  }
}

function mesajGonder() {
  var msg = document.getElementById('myInput').value;
  if (msg.length > 0) {
    var html = '';
    html += '<li class="message mine">';
    html += '<p class="text">' + msg + '</p>';
    html += '<span class="date">12:00</span>';
    html += '</li>';
    messages.innerHTML += html;
    messages.scroll({ behavior: 'smooth', top: 999999999999999999999 });
  }
  document.getElementById('myInput').value = '';
}

var login = document.querySelector('.login');
var nameInput = document.getElementById('myName');
var messages = document.querySelector('.messages');
var myName = '';
