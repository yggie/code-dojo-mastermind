var colors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];

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
