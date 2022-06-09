// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states, validador){
		validaEstado(states, validador);
      	var location = states[0];		
		document.getElementById("Estados").innerHTML+="<br>Estados por los que pasó: ".concat(validador[0]).concat(validador[1]).concat(validador[2]).concat(validador[3]).concat(validador[4]).concat(validador[5]).concat(validador[6]).concat(validador[7]);
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";
 		
	
		if (validador[0]=="1" && validador[1]=="1" && validador[2]=="1" && validador[3]=="1" && validador[4]=="1" && validador[5]=="1" && validador[6]=="1" && validador[7]=="1"){
			document.getElementById("Estados").innerHTML+="<br>Fin."
			return; //se sale
		}
		azarEnsuciar(states);
		setTimeout(function(){ test(states, validador); }, 2000);
}

var states = ["A","DIRTY","DIRTY"];
var validador = ["0","0","0","0","0","0","0","0"];
//validaEstado(states, validador);
test(states, validador);



function azarEnsuciar(states) {
    const estados = ['DIRTY', 'CLEAN']; 
    states[1] = estados[Math.floor(Math.random() * 2)];
    states[2] = estados[Math.floor(Math.random() * 2)];
}

function validaEstado(states, validador) {
	if(states[0] == 'A' && states[1] == 'CLEAN' && states[2] == 'CLEAN'){ validador[6]="1"; console.log("estado[6]=1");} //estado 7 ya pasó.
	if(states[0] == 'B' && states[1] == 'CLEAN' && states[2] == 'CLEAN'){ validador[7]="1"; console.log("estado[7]=1");} //estado 8 ya pasó.
	if(states[0] == 'A' && states[1] == 'CLEAN' && states[2] == 'DIRTY'){ validador[4]="1"; console.log("estado[4]=1");} //estado 7 ya pasó.
	if(states[0] == 'B' && states[1] == 'CLEAN' && states[2] == 'DIRTY'){ validador[5]="1"; console.log("estado[5]=1");} //estado 7 ya pasó.
	if(states[0] == 'A' && states[1] == 'DIRTY' && states[2] == 'CLEAN'){ validador[2]="1"; console.log("estado[2]=1");} //estado 7 ya pasó.
	if(states[0] == 'B' && states[1] == 'DIRTY' && states[2] == 'CLEAN'){ validador[3]="1"; console.log("estado[3]=1");} //estado 7 ya pasó.
	if(states[0] == 'A' && states[1] == 'DIRTY' && states[2] == 'DIRTY'){ validador[0]="1"; console.log("estado[0]=1");} //estado 7 ya pasó.
	if(states[0] == 'A' && states[1] == 'DIRTY' && states[2] == 'DIRTY'){ validador[1]="1"; console.log("estado[1]=1");} //estado 7 ya pasó.
}