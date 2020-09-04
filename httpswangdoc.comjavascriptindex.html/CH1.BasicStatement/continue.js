//continue終止本輪條件描述循環，重新開始次回條件描述運算

var i = 0;

while(i < 100){
  i++;
  if (i % 2 === 0) continue;
  console.log('i = ' + i);
}