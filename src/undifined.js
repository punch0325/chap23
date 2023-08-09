



let num;

console.log(typeof num);
console.log(typeof typeof num);
console.log(typeof(num)=='undefined');

num = typeof(num) != 'undefined' ? num : 0;
console.log(num);




function xxx(a,b){
	console.log(`a = [${a}], b = [${b}], `)
	console.log(arguments); // arguments : 매개값을 모두 갖고 있는 명령어 
	console.log();
}

xxx(10,20);
xxx(10);
xxx();
xxx(10,20,30,40);
// 자바 스크립트 처럼 스크립트 언어는 위 처럼 매개값을 막 넘겨줘도 오류가 나지 않기 때문에 딱히 오버로딩이라는 개념이 따로 있지는 않다.


function sum(){
	for (let i =0; i<arguments.length; i++)
		sum += arguments[i]   //arguments는 배열과 사용법이 비슷함
		 
		return sum;	
}









