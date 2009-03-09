function rand( min, max ) {
  if(typeof(max) == 'undefined') {
    var max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}