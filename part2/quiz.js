var i = 0;
var j = 0;
var correct = 0 ;
data(0);
function data(index) {
    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("opt1").innerHTML = jsonData[index].o1;
    document.getElementById("opt2").innerHTML = jsonData[index].o2;
    document.getElementById("opt3").innerHTML = jsonData[index].o3;
}

function checkans() {
    if(i > jsonData.length-1){
        alert("The Quiz is complete")
    }


    if (document.getElementById("o1").checked && jsonData[i].o1 == jsonData[i].answer) {
       correct++;
    }
    else if (document.getElementById("o2").checked && jsonData[i].o2 == jsonData[i].answer) {
        correct++;
    }
    else if(document.getElementById("o3").checked && jsonData[i].o3 == jsonData[i].answer) {
        correct++;
    }

    i++;
    
    if(jsonData.length-1 < i){
		document.getElementById('ans').innerHTML="Your score is "+correct+"/"+i + "(" + ((correct/i)*100).toFixed(0) + "%)";
        document.getElementById('qheading').innerHTML="Quiz answers";
        
        document.getElementById('q1').innerHTML="Question 1: " + jsonData[0].q;
        document.getElementById('a1').innerHTML="Answer 1: "+ jsonData[0].answer;

        document.getElementById('q2').innerHTML="Question 2: " + jsonData[1].q;
        document.getElementById('a2').innerHTML="Answer 2: "+ jsonData[1].answer;
        
        document.getElementById('q3').innerHTML="Question 3: " + jsonData[2].q;
        document.getElementById('a3').innerHTML="Answer 3: "+ jsonData[2].answer;

        document.getElementById('q4').innerHTML="Question 4: " + jsonData[3].q;
        document.getElementById('a4').innerHTML="Answer 4: "+ jsonData[3].answer;
               
        document.getElementById('q5').innerHTML="Question 5: " + jsonData[4].q;
        document.getElementById('a5').innerHTML="Answer 5: "+ jsonData[4].answer;

    }
    

    data(i);
}
