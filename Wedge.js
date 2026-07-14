const btn = document.getElementById('magicBtn');
const text = document.getElementById('messageText');
let count = 0; // Keep track of the number

btn.addEventListener('click', () => {
    count = count + 1; // Add 1 to the count
    text.textContent = `🚀 You have clicked the button ${count} times!`;
    
    // Reward the user at 10 clicks
    if (count === 10) {
        text.textContent += " 🎉 Awesome job!";
        text.style.color = "#ffc107";
    }
});
