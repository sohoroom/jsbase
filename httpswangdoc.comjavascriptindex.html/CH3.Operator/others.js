//void運算符，執行一個表達式，不返回任何值，亦或說返回undefined
void 0;  //undefined，不良的使用方法
void(0);  //undefined，正確用法
void 4+7;  //NaN，void優先權高，實際執行為(void 4)+7，不良的使用方法
//void運算符主要用於流覽器的書籤工具(Bookmarklet)，以及在超連結中插入代碼防止網頁跳轉
//void1.html
<script>
function f() {
  console.log('Hello World');
}
</script>
<a href="http://example.com" onclick="f(); return false;">submit(false)</a>
<a href="http://example.com" onclick="f(); return true;">submit(true)</a>

//void2.html
<a href="javascript: void(f())">submit void</a>
<a href="javascript: void(document.form.submit())">
  submit void
</a>

//逗號運算符(,)，用於對兩個表達式求值，並返回後一個表達式的值
var x = 0;
var y = (x++, 10);
x // 1
y // 10

var value = (console.log('Hi!'), true);  // Hi!
value // true

//運算順序
//運算的優先等級
//使用圓括符(())提高運算優先等級，並提昇程式碼的可讀性