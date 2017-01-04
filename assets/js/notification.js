
function showNotification() {
  var n = new Notification("いらっしゃい", {body: "セールやってます", icon: '/img/bag.jpg'});
  n.onclick = function() {
    n.close();
    open('/featured');
  }
}

switch(Notification.permission) {
  case 'denied':
    break;
  case 'granted':
    showNotification();
    break;
  default:
    Notification.requestPermission(function(p) {
      if (p === 'granted') {
        showNotification();
      }
    });
}
