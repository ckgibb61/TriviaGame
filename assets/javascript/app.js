$(document).ready(function(){
// function startGame() {
console.log("ready")    
//this function will keep track of the questions being asked
    var triviaQuestions = [{
        question: "What chemical element gives the blood of a lobster a bluish tint?",
        answerList: ["Copper", "Zinc", "Iron", "Sulfur"],
        answer: "Copper"
    },{
        question: "What is the name for the offspring of a male donkey and a female horse?",
        answerList: ["Mule", "Dorse", "Ass", "Horse"],
        answer: "Mule"
    },{
         question: "A panda's daily diet consists almost entirely of what plant?",
        answerList: ["Grass", "Reeds", "Bamboo", "Bark"],
        answer: "Bamboo"
     },{       
        question: "What type of animal is the largest primate in the world?",
        answerList: ["Ape", "Gorilla", "Chimpanzee", "Orangutan"],
        answer: "Gorilla"
    },{
        question: "Groups of lions are known as what?",
        answerList: ["Pack", "Collective", "Herd", "Pride"],
        answer: "Pride"
    }];

    // var questionArray = ["Question #1", "Question #2", "Question #3", "Question #4", "Question #5"];

    var score = 0;
    var currentQ = 0;

    var intervalId;
    var number = 10;

    //these two functions keep track of time
    function time(){
        seconds = 10;
        $(".timer").html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
        time = setInterval(showTime, 1000);
    };
    
    function showTime(){
        seconds--;
        $(".timer").html('<h3>Time Remaining: ' + seconds + '</h3>');
        if(seconds < 1){
            clearInterval(time);
            answered = false;
            console.log(".timer")
         }
    };

//how the game starts on the users click
    $('#start').on('click', function(){
        console.log("click")
        nextQuestion();  

    })
    function nextQuestion() {
        console.log("working")
        $(".questions").empty();
        var title = $("<h1>").text(triviaQuestions[currentQ].question);
        $(".questions").append(title);

        for (var i = 0; i < triviaQuestions[currentQ].answerList.length; i++) {
            console.log(triviaQuestions[currentQ].answerList[i]);
            var myBtn = $("<button>").text(triviaQuestions[currentQ].answerList[i]);
            myBtn.attr("answer", triviaQuestions[currentQ].answerList[i]);
            myBtn.attr("id", "choice");
            $(".questions").append(myBtn);
        };
        time();
        showTime();

        // if (currentQ === triviaQuestions.length) {
        //     $(".questions").append(score)
        // };
    };
    
    $(".questions").on('click', "#choice", function(){
        console.log("choice click", $(this)[0].attributes.answer.value);

        if ($(this)[0].attributes.answer.value === triviaQuestions[currentQ].answer) {
            alert("correct");
            currentQ++; 
            score++;
            nextQuestion();
            // time();
            // showTime();
        } else { 
            currentQ++; 
            nextQuestion();
            // time();
            // showTime();

        }
        clearInterval(showTime);
        time();
        // showTime();
    });

})
