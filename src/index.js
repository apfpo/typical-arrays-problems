exports.min = function min (array) {
  return array !== undefined && array.length !== 0 ? array.sort(
  	function(a, b) { return a - b; } )[0] : 0;
}

exports.max = function max (array) {
  return  array !== undefined && array.length !== 0 ? array.sort(
  	function(a, b) { return a - b; }).reverse()[0] : 0;
}

exports.avg = function avg (array) {
  return  array !== undefined && array.length !== 0 ? array.reduce((prev, curr, ind)=>{
    return prev = prev + curr; })/array.length : 0; 
}
