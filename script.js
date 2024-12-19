//lahjoitus
const donateButton = document.getElementById('donateButton');
const donationAmountInput = document.getElementById('donationAmount');
const donationAmountDisplay = document.getElementById('donationAmountDisplay');
const donationPopup = document.getElementById('donationPopup');
const closePopupButton = document.getElementById('closePopup');

donateButton.addEventListener('click', () => {
  const donationAmount = donationAmountInput.value;


  if (donationAmount === "" || isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return; 
  }


  donationAmountDisplay.textContent = donationAmount;

  donationPopup.style.display = 'block'; 
});


//yhteydenotto 
const contactForm = document.getElementById('contactForm');
const messageSentPopup = document.getElementById('messageSentPopup');
const closePopupButton2 = document.getElementById('closePopup2'); 


contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  messageSentPopup.style.display = 'block';
});


closePopupButton2.addEventListener('click', () => {
  messageSentPopup.style.display = 'none';
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


//darkmode
function toggleDarkMode() {
  if (localStorage.getItem('darkMode') === 'true') {
    localStorage.setItem('darkMode', 'false');
    body.classList.remove('dark-mode');
    darkModeToggle.textContent = 'Dark Mode';
  } else {
    localStorage.setItem('darkMode', 'true');
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
  }
}

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Light Mode';
}

darkModeToggle.addEventListener('click', toggleDarkMode);