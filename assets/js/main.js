// console.log 'hello there!'

console.log('priming');

var sp = Snap("#shieldpattern");
var circ = sp.circle(36,36,36).attr({fill:'#A479AC'});

console.log('a circle')

// // THE BALL PARADE
//   var bp = Snap("#ballparade");
//   var circ = bp.circle(36,36,36).attr({fill:'#A479AC'}).toPattern(0,0,90,90);
//   var circ2 = bp.circle(36,36,36).attr({fill:'#A479AC'}).transform("t0,0").toPattern(0,0,90,90);

//   circ2.transform("t0,45");

//   var col1 = bp.rect(0,0,'90','2000').attr({fill: circ});
//   var col2 = bp.rect(90,0,'90','2000').attr({fill: circ2});

//   var twoColumns = bp.g(col2, col1).toPattern(0,0,180,90);

//   var tiledBalls = bp.rect(-400,0,'4000','4000').attr({fill: twoColumns});