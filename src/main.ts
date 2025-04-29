const rockBtn = document.getElementById("rock") as HTMLButtonElement;
const paperBtn = document.getElementById("paper") as HTMLButtonElement;
const scissorsBtn = document.getElementById("scissors") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

let playerWins : number = 0;
let computerWins : number = 0;
let draws : number = 0;

function computerChoice(): string {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playerChoice(playerSelection: string) {
    const computerSelection = computerChoice();
    console.log(`انت اخترت: ${playerSelection}`);
    console.log(`الكمبيوتر اختار: ${computerSelection}`);

let result = "";

if (playerSelection === computerSelection) {
    result = "تعادل! 🤝";
    draws++;
} else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
) {
    result = "انت كسبت! 🎉";
    playerWins++;
} else {
    result = "الكمبيوتر كسب! 😔";
    computerWins++;
}

resultDiv.innerHTML = `
    <div class="text-2xl font-bold mb-2 animate-pulse">نتيجتك:</div>
    <div class="mb-1">🧍‍♂️ انت اخترت: <span class="font-semibold">${playerSelection}</span></div>
    <div class="mb-1">🖥️ الكمبيوتر اختار: <span class="font-semibold">${computerSelection}</span></div>
    <div class="mt-2 p-2 rounded bg-gray-200 text-black">${result}</div>
    <div class="mt-4 text-sm">
        ✅ مرات الفوز: <span class="font-semibold text-green-600">${playerWins}</span> | 
        ❌ مرات الخسارة: <span class="font-semibold text-red-600">${computerWins}</span> | 
        🤝 مرات التعادل: <span class="font-semibold text-blue-600">${draws}</span>
    </div>
`;


}

rockBtn.addEventListener("click", function () {
    playerChoice("rock");
});

paperBtn.addEventListener("click", function () {
    playerChoice("paper");
});

scissorsBtn.addEventListener("click", function () {
    playerChoice("scissors");
});

