
var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');

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
    image:"https://i.ytimg.com/vi/UVtwbe1jwH4/maxresdefault.jpg",
    text:"The first turn is coming up, and you're holding a solid spot - in 117th place... Do you",
    buttons: [["Accelerate through the inner lane", "advanceTo(scenario.ten)"],["Hold your place, and wait for a better oppurtunity", "advanceTo(scenario.eleven)"]]
  },
  ten:{
    image:"pictures/chris.png",
    text:"You accelerate through the inner lane, avoiding collisions. Just then, your coach Chris Walker, radios you. `ATTA BOY! Stay aggressive, this is HOW YOU WIN RACES. You're in 50th place now, Zach is in third. You got this. There's a ramp coming up. Either hit the nitro and take it or go around it`",
    buttons:[["Hit the nitro and take the ramp", "advanceTo(scenario.fourteen)"],["Go around", "advanceTo(scenario.fifteen)"],["Start Over", "advanceTo(scenario.one)"]]
  },
  eleven:{
    image:"pictures/chris.png",
    text:"You play it safe and hold your spot...but then your coach, Chris Walker, radios you. `Dude, WHAT ARE YOU DOING? You've been waiting your entire life for this, and you decide to play it safe? Now you're in 200th place, get back in it!'",
    buttons:[["Tell Chris He's An Idiot", "advanceTo(scenario.tweve)"],["`My fault Chris! I'll catch up, I promise`", "advanceTo(scenario.thirteen)"],["Start Over", "advanceTo(scenario.one)"]]
  },
  twelve:{
    image:"",
    text:"'Yea! I'm quitting! Well good luck winning without a coach!'You hear the slam of the headset and realize Chris has quit.",
    buttons:[["You're going to lose without a coach! Ugh, let's try again", "advanceTo(scenario.one)"]]
  },
  thirteen:{
    image:"",
    text:"`Yes, I know you will. There is a ramp coming up, either go on the ramp and hit the nitro or go around it.`",
    buttons:[["Hit the nitro and take the ramp", "advanceTo(scenario.sixteen)"],["Go around", "advanceTo(scenario.seventeen)"],["Start Over", "advanceTo(scenario.one)"]]
  },
  fourteen:{
    image:"",
    text:"You hit the nitro, jump the ramp, and you go FLYING over the rest of the cars, landing a bit roughly, but you're not sitting pretty in 25th place. Zach is in 15th. You see Zach in front of you, Do you",
    buttons:[["Pass Zach, despite it being a narrow road", "advanceTo(scenario.eighteen)"], ["Wait for Zach to mess up", "advanceTo(scenario.ninteen)"]]
  },
  // Safe Ramp Nitro 50th
  fifteen:{
    text:"You hit the nitro, jump the ramp, and you go FLYING over the rest of the cars, landing in 50th place. Good, you're catching up. You see Zach in front of you. Do you",
    buttons:[["Pass Zach, despite it being a narrow road", "advanceTo(scenario.twenty)"], ["Wait for Zach to mess up", "advanceTo(scenario.twenty)"]]
  },
  // Acceleration no Ramp 40th
  sixteen:{
    text:"You go around the ramp, passing some cars, letting other cars fly over you. Now in 40th place, you see Zach ahead of you. Do you",
    buttons:[["Pass Zach, despite it being a narrow road", "advanceTo(scenario.eighteen)"], ["Wait for Zach to mess up", "advanceTo(scenario.twentyone)"]]
  },
  // Safe No Ramp 75th
  seventeen: {
    text:"You go around the ramp, passing some cars, yet letting other cars fly over you. Chris radios you again. `YOU PLAYED IT SAFE AGAIN? We're in SEVENTY-FIFTH. We'll never catch up. I'm sorry Max, it's over'",
    buttons:[["Looks like you're too far behind to catch up. I'm sorry, let's try again", "advanceTo(scenario.one)"]]
  },
  // crash
    eighteen:{
      text:"You pass Zach, and let out a victory howl! But...your tire slips off the road for a moment, and you're spent spiraling off the road. Luckily, you're not hurt...but you're out of the race. I'm sorry soldier. Next time.",
      buttons:[["This is a tough race. Let's try this again, pal.", "advanceTo(scenario.one()"]]
    },
  // 25-win
  ninteen:{
    text:"You stay behind Zach, and he pokes his head out the window to laugh at you. 'Hah! The finish line is just ahead, and I'm going to win! It's over, name' Just then, Zach's tires slip off the road, and he's spiraled off the track. He's not hurt, but he's out of the race. The finish line is just ahead, let's finish.",
    buttons:[["Finish the race.", "advanceTo(scenario.twentytwo)"]]

  },
  // 50 -> 10
  twenty:{
      text:"You stay behind Zach, and he pokes his head out the window to laugh at you. 'Hah! The finish line is just ahead, and I'm going to win! It's over, name' Just then, Zach's tires slip off the road, and he's spiraled off the track. He's not hurt, but he's out of the race. The finish line is just ahead, let's finish.",
      buttons:[["Finish the race.", "advanceTo(scenario.twentythree)"]]

  },

  // 40 - 3

  twentyone:{
      text:"You stay behind Zach, and he pokes his head out the window to laugh at you. 'Hah! The finish line is just ahead, and I'm going to win! It's over, name' Just then, Zach's tires slip off the road, and he's spiraled off the track. He's not hurt, but he's out of the race. The finish line is just ahead, let's finish.",
      buttons:[["Finish the race.", "advanceTo(scenario.twentyfour)"]]

  },

  //win
  twentytwo:{
    text:"You zoom pass the finish line, and could it be, YES, YOU DID IT. YOU'VE ONE THE HACK CLUB 500, NAME. YOU'RE THE FASTEST RACER IN THE WORLD!! There are no better endings. You've won. Congratulations.",
    buttons:[["Start Over","advanceTo(scenario.two)"]]
  },


  // ten
  twentythree:{
    text:"You zoom pass the finish line, but some cars are still in front of you. You finish in tenth, out of 300. Hey, that's not bad at all soldier. This is impressive, and you've earned it. Congratulations. Tenth place? That's still really great. This is the end of the game. But if you want to start over, I understand.",
    buttons:[["Start Over", "advanceTo(scenario.two)"]]
  },

  //three

  twentyfour:{
    text:"This is a dead heat to the finish line, you race and you race, and BOOM. You cross the finish line, in third place. Out of 300? That's incredible! Great work name. That's a bronze medal. That's the end of the game, Kid. Third place? That's absolutely incredible. Great work!",
    buton:[["Start Over", "advanceTo(scenaro.one)",]]
  },




};


//this is the code that starts the game
advanceTo(scenario.one);
