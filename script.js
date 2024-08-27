function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const shiftInput = document.getElementById('shift').value;
    const shift = parseInt(shiftInput);

    if (isNaN(shift) || shift < 1 || shift > 25) {
        alert('Por favor, ingresa un valor de desplazamiento válido entre 1 y 25.');
        return;
    }

    document.getElementById('outputText').value = caesarCipher(inputText, shift);
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const shiftInput = document.getElementById('shift').value;
    const shift = parseInt(shiftInput);

    if (isNaN(shift) || shift < 1 || shift > 25) {
        alert('Por favor, ingresa un valor de desplazamiento válido entre 1 y 25.');
        return;
    }

    document.getElementById('outputText').value = caesarCipher(inputText, -shift);
}

function caesarCipher(text, shift) {
    let outputText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            const code = text.charCodeAt(i);

            // Letras mayúsculas
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
            }
            // Letras minúsculas
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
            }
        }

        outputText += char;
    }

    return outputText;
}
