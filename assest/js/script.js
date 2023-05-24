URL = {
stone : "https://th.bing.com/th/id/R.8b6cdbc1181159e8db8d53c867962de7?rik=bZkUizfuazZvhA&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn757015.png&ehk=rUEcocz689rNLJs%2fTs2Fu8CRNrG2a5RiiN0Sn1JiDyM%3d&risl=&pid=ImgRaw&r=0",
 paper : "https://th.bing.com/th/id/OIP.faIypYq81lubKAFz_SRp-gHaIL?pid=ImgDet&rs=1",
 sicssor : "https://th.bing.com/th/id/R.2ed32b6ebb490bed78aaa38a57888148?rik=EYK0A5iQZi8N%2bw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fnTB%2fBd6%2fnTBBd6anc.png&ehk=o5eK%2fTCo7bHLGAH%2bg%2bKf8VJgRULjex9Gm8DhDXZh%2fTI%3d&risl=&pid=ImgRaw&r=0",
}
let userScore = 0
let ComputerScore =0
let userScoreDispaly = document.getElementById("u-score");
let ComputerScoreDisplay = document.getElementById("c-score");

ComputerScoreDisplay.innerText = " "+ ComputerScore;
userScoreDispaly.innerText = " " +userScore;

function userInput(input){
    const choices = ["stone", "paper", "sicssor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    document.getElementById("CPU").src =URL[computerChoice];
    document.getElementById("USER").src =URL[input];

    if (input === computerChoice) {
        // displayResult(input, computerChoice, "It's a tie!");

    } else if (
        (input === "stone" && computerChoice === "sicssor") ||
        (input === "paper" && computerChoice === "stone") ||
        (input === "sicssor" && computerChoice === "paper")
    ) {
        userScore++;
        userScoreDispaly.innerHTML = " "+ userScore;
        console.log("user");

    } else {
        ComputerScore++;
        ComputerScoreDisplay.innerHTML = " " +ComputerScore;
        console.log("cpu");
    }
}
