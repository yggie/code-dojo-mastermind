var colors = ['#ff0000', '#0000ff', '#00ff00', '#ffff00', '#000000', '#ffffff'];

function randomInt(range) {
  return Math.floor(range * Math.random());
}

function pickRandomColors(num) {
  var chosen = [];
  if (num >= colors.length) {
    throw 'Number is too large';
  }
  while (chosen.length < num) {
    var number = randomInt(colors.length);
    if (chosen.indexOf(number) === -1) {
      chosen.push(number);
    }
  }
  return chosen.map(function(index) { return colors[index]; });
}

function getNumMatchingColors(code, guess) {
  var counter = 0;
  for (var i=0; i < guess.length; i++)
  {
    for (var j=0; j < code.length; j++)
    {
      if (guess[i]== code[j])
        {
          counter = counter + 1
        }
    }
  }

  return counter;
}

function getNumMatchingPos(code, guess) {
  var counter = 0;
  for (var i=0; i < guess.length; i++)
  {
    if (guess[i] == code[i])
      {
        counter = counter + 1
      }
  }
  return counter;
}
