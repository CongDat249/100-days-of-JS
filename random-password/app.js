const $ = document.querySelector.bind(document);
const resultEl = $(".password");

const chars = {
  upperCase: "ABCDEFGHIJKMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijkmnoprstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+=-/",
}

resultEl.disabled = true;

function getRandNumber(min, max) {
  return Math.floor(Math.random()*(max - min)) + min;
}

$(".btn-generate").onclick = () => {
  let patterns = "";
  let password = "";
  const config = {
    length: parseInt($("#length").value),
    lowerCase: $("#lowercase").checked,
    upperCase: $("#uppercase").checked,
    symbols: $("#symbols").checked,
    numbers: $("#numbers").checked,
  }

  for (const property in config) {
    if (property !== "length" && config[property]) {
      patterns += chars[property]; 
    }
  }

  for (let i = 0; i < config.length; i++) {
    password += patterns[getRandNumber(0, patterns.length)]; 
  }

  resultEl.value = password;
  resultEl.disabled = false;
}

$(".btn-copy").onclick = () => {
  navigator.clipboard.writeText(resultEl.value);
  $(".tooltiptext").textContent = "Copied";
}

$(".btn-copy").onmouseout = () => {
  $(".tooltiptext").textContent = "Copy to clipboard";
}