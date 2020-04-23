
var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
//this is the variable for the name of the character
var name;




input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    name =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};



var changeText = function(words) {
  text.innerHTML = words.replace("name", name);
};


var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};



var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};






//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
var scenario = {
  one: {
    image: "https://usatodaysports.files.wordpress.com/2017/03/usp_indycar-_indianapolis_500.jpg?w=1000&h=667", //stadium
    text: "This is it. The moment you've been training for your entire life - the Hack Club 3000. The biggest race in the entire world, from San Fransisco to New Haven. \n",
  },
  two: {
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mclaren-f1-gtr-fina-1528724324.png", //car
    text: "You walk towards the race track, hearing the crowd roar up as the time to race is nearing. Before you head to your car, you see your bitter rival Zach out the corner of your eye.",
    buttons: [["Approach Zach", "advanceTo(scenario.three)"],["Head to your car", "advanceTo(scenario.six)"]]
  },
  three: {
    image: "pictures/racingzach.png",//
    text: "Hey name! Are you ready to get destroyed? Everybody knows I'm the best racer around.",
    buttons: [["'In your dreams, Latta!'", "advanceTo(scenario.four)"],["Head to your car", "advanceTo(scenario.six)"],["*Punch Zach*", "advanceTo(scenario.five)"]]
  },
  four: {
    text: "Zach laughs in your face. `Whatever you say, name. At the end of the day, I'll be holding the Hack Club 3000 trophy and you'll be eating my dust.`",
    buttons: [["Head to your car", "advanceTo(scenario.six)"]]
  },
  five: {
    image:"pictures/knockout.png",
    text: "You grit your teeth, plant your foot, and swing your fist, channeling your inner Mike Tyson as Zach is knocked out. Before you can pat yourself on the back, a racing official comes up to you. `YOU PUNCHED HIM? YOU'RE DISQUALIFIED!`",
    buttons: [["Bad ending! Keep your composure. Let's try again. Reload",]]
},
  six: {
    image:"https://cdn6.dissolve.com/p/D985_52_254/D985_52_254_1200.jpg",
    text:"You head to your car, and take a look at the crowd, cheering as they watch the racers approach. This is it. Everything you've been training for. You, name Speed Wofford, have been preparing everyday for this very race. And now, there are only 3000 miles between you and glory. You get in your car.",
    buttons: [["Start your engine.", "advanceTo(scenario.eight)"],["Flip Off Zach", "advanceTo(scenario.seven)"]]
  },
  seven: {
    text:"`Hey, screw you name!` Zach yells. Worth it!",
    buttons:[["Start your engine.", "advanceTo(scenario.eight)"]]
  },
  eight:{
    image:"https://flagexpressions.files.wordpress.com/2010/05/nascargreenflag.jpg",
    text:"You feel your heart pounding as the roars of the engines rise to meet the roars of the crowd. You see the green flag waving and you take off full speed.",
    buttons:[["GO GO GO", "advanceTo(scenario.nine)"]]
  },
  nine:{
    image:"",
    text:"The first turn is coming up, and you're holding a solid spot - in 117th place... Do you",
    buttons:[["Accelerate through the inner lane," "advanceTo(scenario.ten)"],["Hold your spot, wait for a better oppurtunity", "advanceTo(scenario.eleven)"]]
  },
  ten:{
    image:"",
    text:"",
    buttons:[[]]
  },
  eleven:{
    image:"",
    text:"",
    buttons:[[]]
  }



};


//this is the code that starts the game
advanceTo(scenario.one);
