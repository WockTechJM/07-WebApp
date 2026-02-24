const moods = ["😎", "😂", "🤯", "🥳", "🤔", "😴", "😍"];
const moodBtn = document.getElementById("moodBtn");
const moodDisplay = document.getElementById("moodDisplay");

moodBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * moods.length);
  moodDisplay.textContent = moods[randomIndex];
});