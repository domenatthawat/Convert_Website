document.getElementById("convertButtonKP").addEventListener("click", () => {
    const poundsInput = document.getElementById("userInputedPounds");
    const kilogramsInput = document.getElementById("userInputedKilograms");
    if (poundsInput.value) {
        const pounds = parseFloat(poundsInput.value);
        const kilograms = (pounds * 0.453592).toFixed(2);
        kilogramsInput.value = kilograms;
    } else if (kilogramsInput.value) {
        const kilograms = parseFloat(kilogramsInput.value);
        const pounds = (kilograms * 2.20462).toFixed(2);
        poundsInput.value = pounds;
    } else {
        alert("Please enter a value to convert.");
    }
});

