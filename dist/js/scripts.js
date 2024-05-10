/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
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
// 제출 버튼 요소 가져오기
const submitButton = document.getElementById('submitButton');

// 이메일 주소 필드 입력 시 유효성 검사
emailAddressInput.addEventListener('input', function() {
    validateForm();
});

// 개인정보 동의 체크박스 상태 변경 시 유효성 검사
termsCheckbox.addEventListener('change', function() {
    validateForm();
});

// 폼 제출 시 이벤트 처리
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 기본 동작 방지
    // 여기서 폼을 실제로 제출하는 코드 추가 가능
    document.getElementById('submitSuccessMessage').classList.remove('d-none'); // 성공 메시지 표시
    document.getElementById('contactForm').classList.add('d-none'); // 폼 숨기기
});

// 폼 유효성 검사 함수
function validateForm() {
    const emailAddress = emailAddressInput.value; // 이메일 주소 값 가져오기
    const termsChecked = termsCheckbox.checked; // 체크박스 상태 확인

    // 이메일 주소가 입력되고, 개인정보 동의가 체크되어 있을 때
    if (emailAddress && termsChecked) {
        submitButton.disabled = false; // 제출 버튼 활성화
    } else {
        submitButton.disabled = true; // 제출 버튼 비활성화
    }
}

// Disable the submit button initially
submitButton.disabled = true;

// Add an event listener to the checkbox
termsCheckbox.addEventListener('change', function() {
    // If the checkbox is checked, enable the submit button
    // If the checkbox is not checked, disable the submit button
    submitButton.disabled = !this.checked;
});