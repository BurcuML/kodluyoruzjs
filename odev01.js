let name= prompt("Adınızı giriniz:");
document.getElementById("myName").innerHTML= name;

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var d= date.getDay();

    if (d == 1) {
        d = "Pazartesi";
      } else if (d == 2) {
        d = "Salı";
      } else if (d == 3) {
        d = "Çarşamba";
      } else if (d == 4) {
        d = "Perşembe";
      } else if (d == 5) {
        d = "Cuma";
      } else if (d == 6) {
        d = "Cumartesi";
      } else if (d == 7) {
        d = "Pazar";
      }
      else {
        d="Veri Alınamadı"
      }
    
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
    
      var time = h + ":" + m + ":" + s + " " + d;
      document.getElementById("myClock").innerText = time;
      document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();