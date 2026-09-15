let str = '';

// 오늘 날짜...Date()
const today = new Date();
const year = today.getFullYear(); // 년도 4자리

str += "오늘 년도는 : " + year + "년";

const month = today.getMonth() + 1; // 월
str += "<br>오늘 월은 : " + month + "월"; 

const date = today.getDate(); // 월
str += "<br>오늘 일은 : " + date + "일"; 

const hour = today.getHours(); // 월
str += "<br>현재 시간 : " + hour + "시"; 

const minute = today.getMinutes(); // 월
str += "<br>현재 분은 : " + minute + "분"; 

const second = today.getSeconds(); // 월
str += "<br>현재 초는 : " + second + "초"; 

// 오늘 날짜/시간 : 2026년 9월 15일 9시 52분 32초
str += "<br>오늘 날짜 / 시간 : " + year + "년 " + month + "월 " + date + "일 " + hour + "시 " + minute + "분 " + second + "초"

// 밀리초(1/1000)
str += "<br>밀리초 단위 : " + today.getMilliseconds();

str += "<br>국제 표준시로부터 밀리초 단위 불러오기 : " + today.getTime();

// 요일은 숫자로 표기되기에 한글로 변환처리한다
let weekDay = today.getDay();
str += "<br>오늘은 무슨 요일 : " + weekDay;

let weekStr = ['일', '월', '화', '수', '목', '금', '토'];
let weekDayStr = weekStr[weekDay];
str += "<br>오늘은 " + weekDayStr + "요일 입니다"

// 이번 달의 마지막 일자를 찾아내기...
let lastDate = new Date(2026, 9, 0);
str += "<br>이번달의 마지막 일자는 : " + lastDate.getDate() + "일 입니다.";

demo.innerHTML = "<font size='4' color='red'><b>" + str + "</b></font>"

// 마지막 일자를 출력하는 함수(demo2에 출력)
function dateCheck() {
  
  let yy = document.getElementById("yy").value;
  let mm = document.getElementById("mm").value;
  let strDate = new Date(yy, mm, 0);

  demo2.innerHTML = `${yy}년 ${mm}월의 마지막 일자는? <font color="red"><b>${strDate.getDate()}</b></font>`;
}