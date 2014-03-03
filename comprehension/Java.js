// Simple functions
function emergency(){
	alert("Emergency!");
};

function opposite(theBoolean){
	if (theBoolean == true ){
		console.log("false")

	}
	else{
		console.log("true")
	}	
};

opposite(true)

//For loops

for (i=5; i<0; i--)
{
	console.log(i);

}

function waterStatus(temp){
	if (temp<32){
		console.log("Frozen");
	}

	else if (temp>212){
		console.log("Boiling");

	}

	else{
		console.log("Normal");
	}

}

waterStatus(21);
waterStatus(215);
waterStatus(77);

//Objects

bicycle = new Object();
bicycle.tireSize=20;
bicycle.height=50;
bicycle.color="blue";

dog = new Object(){
	'name': "Dude";

	;

dog.name;




