function submitAnswers() {
    var total = 5;
    var score = 0;
    
    
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    
    
    
	
	for(var i = 1; i <= total; i++){
		if(eval('q'+i) == '' || eval('q'+i) == null){
			alert("You have missed question " + i);
			return false;
		}
	}
	
	//Set correct answers
	
	var answers = ["a", "a", "a", "a", "d"];
	
	// check answers
	
	for(var i = 1; i <= total; i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	//displaying results
	
	var result = document.getElementById('result');
	
	result.innerHTML = '<h3>You Scored <span>'+score+'</span> Out Of <span>'+total+'</span></h3>';
	//alert("Your Score Is "+score+" Out Of "+total);
	
	
	return false;
}
