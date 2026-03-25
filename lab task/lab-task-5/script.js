function analyzeText() {
  const text = document.getElementById("textInput").value;
  const resultBox = document.getElementById("resultBox");
  const charCount = document.getElementById("charCount");
  const wordCount = document.getElementById("wordCount");
  const reversedText = document.getElementById("reversedText");
  const errorMsg = document.getElementById("errorMsg");

  resultBox.style.display = "block";
  errorMsg.textContent = "";

  const trimmedText = text.trim();

  if (trimmedText === "") {
    charCount.textContent = "0";
    wordCount.textContent = "0";
    reversedText.textContent = "";
    errorMsg.textContent = "Please enter some text.";
    return;
  }

  const totalCharacters = text.length;
  const totalWords = trimmedText.split(/\s+/).length;
  const reversed = text.split("").reverse().join("");

  charCount.textContent = totalCharacters;
  wordCount.textContent = totalWords;
  reversedText.textContent = reversed;
}
