/* ==========================================================================
   Pet & Animal Care World - Cat Age Calculator Logic
   ========================================================================== */

function calculateCatAge(event) {
    event.preventDefault();

    const yearsInput = parseFloat(document.getElementById('catYears').value) || 0;
    const monthsInput = parseFloat(document.getElementById('catMonths').value) || 0;

    // Total age in terms of decimal years
    const totalCatYears = yearsInput + (monthsInput / 12);

    if (totalCatYears <= 0) {
        alert("Please enter a valid age for your cat.");
        return;
    }

    let humanYears = 0;
    let lifeStage = "";

    // Standard AVMA Veterinary Calculation Standard
    if (totalCatYears <= 1) {
        // First year equals roughly 15 human years
        humanYears = totalCatYears * 15;
        lifeStage = "Kitten (Rapid Growth & Playful)";
    } else if (totalCatYears <= 2) {
        // Second year adds 9 human years (Total 24)
        humanYears = 15 + ((totalCatYears - 1) * 9);
        lifeStage = "Young Adult (Full Maturity)";
    } else {
        // Each subsequent year adds 4 human years
        humanYears = 24 + ((totalCatYears - 2) * 4);
        
        if (totalCatYears <= 6) {
            lifeStage = "Adult (Prime Years)";
        } else if (totalCatYears <= 10) {
            lifeStage = "Mature Adult";
        } else {
            lifeStage = "Senior Cat (Requires Regular Vet Care)";
        }
    }

    // Display Output
    const resultBox = document.getElementById('resultBox');
    const humanAgeOutput = document.getElementById('humanAgeOutput');
    const lifeStageOutput = document.getElementById('lifeStageOutput');

    if (resultBox && humanAgeOutput && lifeStageOutput) {
        humanAgeOutput.innerText = Math.round(humanYears) + " Human Years";
        lifeStageOutput.innerText = "Life Stage: " + lifeStage;
        resultBox.classList.add('show');
    }
}
/* ==========================================================================
   Dog Age Calculator Logic
   ========================================================================== */

function calculateDogAge(event) {
    event.preventDefault();

    const yearsInput = parseFloat(document.getElementById('dogYears').value) || 0;
    const sizeInput = document.getElementById('dogSize').value || 'medium';

    if (yearsInput <= 0) {
        alert("Please enter a valid age for your dog.");
        return;
    }

    let humanYears = 0;

    // Standard AVMA Veterinary Calculation for Dogs
    if (yearsInput === 1) {
        humanYears = 15;
    } else if (yearsInput === 2) {
        humanYears = 24;
    } else {
        // After 2 years, aging rate depends on breed size
        let extraRate = 5; // Default medium
        if (sizeInput === 'small') extraRate = 4;
        else if (sizeInput === 'large') extraRate = 6;
        else if (sizeInput === 'giant') extraRate = 7;

        humanYears = 24 + ((yearsInput - 2) * extraRate);
    }

    // Display Output
    const resultBox = document.getElementById('dogResultBox');
    const humanAgeOutput = document.getElementById('dogHumanAgeOutput');

    if (resultBox && humanAgeOutput) {
        humanAgeOutput.innerText = Math.round(humanYears) + " Human Years";
        resultBox.classList.add('show');
    }
}