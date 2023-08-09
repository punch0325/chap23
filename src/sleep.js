import { sprintf } from "sprintf-js";
import sleep from "es7-sleep"




async function run(){

	for(;;){
		let  c= new Date();
		console.log(sprintf("%02d:%02d:%02d", c.getHours(), c.getMinutes(), c.getSeconds()))		
		await sleep(1000);
	}
	
	
}

run();

console.log("프로그램 끝!");
