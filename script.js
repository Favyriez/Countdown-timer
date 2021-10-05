function countdown(){
    var now = new Date()
    var eventDate  = new Date(2021, 10, 25);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    
    h %= 24;
    m %= 60;
    s %= 60; 
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000)

    

}
countdown();


// var countDownDate = new Date(2021, 11, 25).getTime();

// function countdown(){
//     var now = new Date().getTime();
//     var distance = countDownDate - now
//     var days = Math.floor(distance / (1000 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);


//     document.getElementById("days").textContent = days;
//     document.getElementById("days").innerText = days;

//     document.getElementById("hours").textContent = hours;
//     document.getElementById("minutes").textContent = minutes;
//     document.getElementById("seconds").textContent = seconds;

//     if (distance < 0) {
//         clearInterval(countdown());
//     }

    


// }

// setInterval(countdown, 1000);