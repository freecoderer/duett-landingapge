/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Step 1: Define the array of strings
var texts = ["브람스", "오아시스", "유다빈 밴드", "검정 치마", "다니엘 시저", "혁오", "카니예 웨스트", "쳇 베이커", "드레이크", "유재하", "라디오헤드", "오자키 유타카", "빈지노", "시규어로스", "너바나", "그린데이"];

// Step 2: Define the current index
var currentIndex = 0;

// Step 3: Start the loop
setInterval(function() {
    // Get the text element
    var textElement = document.querySelector("#changing-text");

    // Fade out the text
    textElement.style.opacity = 0;

    // Wait for the transition to finish
    setTimeout(function() {
        // Step 4: Update the text content
        textElement.textContent = texts[currentIndex];

        // Fade in the text
        textElement.style.opacity = 1;

        // Step 5: Increment the index
        currentIndex++;

        // Reset the index if it exceeds the length of the array
        if (currentIndex >= texts.length) {
            currentIndex = 0;
        }
    }, 500); // Wait for 0.5 seconds (the same duration as the transition)
}, 2000); // Change the text every 2 seconds

document.getElementById('termsSpan').addEventListener('click', function() {
    var termsText = document.getElementById('termsText');
    termsText.style.display = (termsText.style.display === 'none') ? 'block' : 'none';
});

const emailAddressInput = document.getElementById('emailAddress');
const termsCheckbox = document.getElementById('termsCheckbox');
const submitButton = document.getElementById('submitButton');

const emailAddressInputFooter = document.getElementById('emailAddressBelow');
const termsCheckboxFooter = document.getElementById('termsCheckboxBelow');
const submitButtonFooter = document.getElementById('submitButton');

// Form validation function for the main form
function validateForm() {
    const emailAddress = emailAddressInput.value; // Get the email address value
    const termsChecked = termsCheckbox.checked; // Check the checkbox status

    // If the email address is entered and the checkbox is checked
    if (emailAddress && termsChecked) {
        submitButton.disabled = false; // Enable the submit button
    } else {
        submitButton.disabled = true; // Disable the submit button
    }
}

// Form validation function for the footer form
function validateFormFooter() {
    const emailAddress = emailAddressInputFooter.value; // Get the email address value
    const termsChecked = termsCheckboxFooter.checked; // Check the checkbox status

    // If the email address is entered and the checkbox is checked
    if (emailAddress && termsChecked) {
        submitButtonFooter.disabled = false; // Enable the submit button
    } else {
        submitButtonFooter.disabled = true; // Disable the submit button
    }
}

// Add an event listener to the checkbox
termsCheckbox.addEventListener('change', validateForm);

// Add an event listener to the email input
emailAddressInput.addEventListener('input', validateForm);

// Add an event listener to the checkbox
termsCheckboxFooter.addEventListener('change', validateFormFooter);

// Add an event listener to the email input
emailAddressInputFooter.addEventListener('input', validateFormFooter);