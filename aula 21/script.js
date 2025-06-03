document.addEventListener('DOMContentLoaded', function() {
    const dayInput = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const calculateBtn = document.getElementById('calculateBtn');
    const ageResultLabel = document.getElementById('ageResult');

    calculateBtn.addEventListener('click', function() {
        const day = parseInt(dayInput.value);
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearInput.value);

        if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2025) {
            ageResultLabel.textContent = 'Por favor, insira uma data de nascimento válida.';
            ageResultLabel.style.color = '#dc3545'; // Cor de erro
            return;
        }

        const birthDate = new Date(year, month - 1, day); // Mês é base 0 no objeto Date
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        // Ajusta a idade se o aniversário ainda não ocorreu este ano
        if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
            age--;
        }

        if (age < 0) { // Para o caso de uma data de nascimento futura
            ageResultLabel.textContent = 'A data de nascimento não pode ser no futuro.';
            ageResultLabel.style.color = '#dc3545';
        } else {
            ageResultLabel.textContent = `Você tem ${age} anos.`;
            ageResultLabel.style.color = '#28a745'; // Cor de sucesso
        }
    });
});