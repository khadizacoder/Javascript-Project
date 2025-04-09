function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const userInput = document.getElementById('userinput');
const resultDiv = document.getElementById('result');
const historyDiv = document.getElementById("history");
const primeListDiv = document.getElementById("prime_list");

userInput.addEventListener('input', () => {
    const input = userInput.value;
    const number = parseFloat(input);

    if (isNaN(number)) {
        resultDiv.innerHTML = '❌ Please enter a valid number!';
        resultDiv.style.color = 'red';
    } else {
        let massage;
        if (isPrime(number)) {
            massage = `✅ ${number} is a Prime Number!`;
            resultDiv.style.color = 'green';
        } else {
            massage = `❌ ${number} is NOT a Prime Number.`;
            resultDiv.style.color = 'red';
        }
        resultDiv.innerHTML = massage;
        updateHistory(number, massage);
    }
})

// Load history from LocalStorage
const history = JSON.parse(localStorage.getItem('primeHistory')) || [];
renderHisttury();

function updateHistory(num, msg) {
    history.unshift(`${num}: ${msg}`);
    if (history.length > 10) history.pop(); // keep last 10 items
    localStorage.setItem("primeHistory", JSON.stringify(history));
    renderHistory();
}

function renderHisttury() {
    if (history.length === 0) {
        historyDiv.innerHTML = 'No history found.';
    } else {
        historyDiv.innerHTML = history.map(item => `<div>➤ ${item}</div>`).join('');
    }
}

function showPrimeList() {
    let primes = [];
    for (let i = 1; i <= 100; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    primeListDiv.innerHTML = `Prime numbers from 1 to 100: <br><strong>${primes.join(', ')}</strong>`;
  }

function toggleDarkMood() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('.dark #history');
}