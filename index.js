const $btnSpeech = document.querySelector(".btn-speech");
const $textArea = document.getElementById("textarea");


$btnSpeech.addEventListener("click", ()=>{
  const message = $textArea.value;
  let utterance = new SpeechSynthesisUtterance(message)

  speechSynthesis.speak(utterance)
})