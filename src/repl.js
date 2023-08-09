import repl from "repl"   //repl : nodejs에 있는 기본 라이브러리 

//터미널이나 cmd에서 실행할 것
repl.start({
	prompt: "숫자 입력 >> ", 
	eval : function(command, x, y, finish) {
		console.log(command)
		command = Number(command)
		if(isNaN(command))
			console.log("숫자가 아닙니다.")
		else
			console.log("입력하신 숫자는 "+command+"입니다.") 
		finish();
	}
});


console.log("프로그램 종료...")