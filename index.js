function remove() {

  var name = document.querySelector('.input1').value;
  console.log(name);
  var crushName = document.querySelector('.input2').value;
  console.log(crushName);

  if (name.length === 0 || crushName.length === 0) {
    alert("please fill all field");
  } else {

    var r = document.querySelector('.name');
    var p = document.querySelector('.p1');
    p.removeChild(r);
    var r1 = document.querySelector('.names');
    p.removeChild(r1);
    var r2 = document.querySelector('input');
    p.removeChild(r2);
    r2 = document.querySelector('input');
    p.removeChild(r2);
    var p2 = document.querySelector('.p2');
    var r3 = document.querySelector('button');
    p2.removeChild(r3);

    var result = document.createElement('p');
    result.innerHTML = "<strong>" + name + "</strong> and <strong>" + crushName + "</strong> love score is";
    p.appendChild(result);

    var percentage =Math.floor(Math.random() * 100);

    var pc = document.createElement('p');
    pc.innerHTML = "<strong>" + percentage + "%</strong>";
    pc.style.fontSize = '3rem';
    p.appendChild(pc);

    var message = document.createElement('p');
    if (percentage === 100) {
      message.innerHTML = "Match made in heaven." + name + " and " + crushName + " love each other like kanye love kanye";
    } else if (percentage < 100 && percentage > 74) {
      message.innerHTML = "There's chemistry between you two.One of you needs to take a step closer and make your love Blossom";
    } else if (percentage < 75 && percentage > 39) {
      message.innerHTML = crushName + " was so easy to love yet you wonder why it's not working.its because easy love is never enough.But its still summer time build your relationship";
    } else if (percentage < 40 && percentage > 0) {
      message.innerHTML = name + ",i know your love is huge.But you need cupid's arrow.you shall never give up.and if things doesn't work out contact guru gang we will kidnap " + crushName + " for you";
    } else {
      message.innerHTML = "Sorry " + name + ".Try mathang mapok!"
    }
    message.style.padding = "0 3%";
    p2.appendChild(message)

  }

}
