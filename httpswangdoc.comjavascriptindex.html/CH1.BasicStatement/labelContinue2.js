/*
label:
  statement
*/
top:
  for (var i = 0; i <= 3; i++){
    for (var j = 0; j <= 3; j++){
      if (i === 1 && j === 1) continue; //continue top¸õ¥XÂù´`ÀôÄ~Äò
      console.log('i=' + i + ', j=' + j);
    }
  }