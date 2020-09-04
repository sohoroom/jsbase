//break 直接跳出(最內層)代碼塊、條件描述式

var i = 0;

while(i < 100) {
  console.log('i = ' + i);
  i++;
  if (i === 10) break;
}