document.getElementById('calculatorBtn').addEventListener('click', () => {
    const birthdateInput = document.getElementById('birthdate').value;

    if (!birthdateInput) {
        document.getElementById('result').textContent = "Please select a valid birthdate.";
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').textContent = 
        `You are ${years} years, ${months} months, and ${days} days old.`;
});