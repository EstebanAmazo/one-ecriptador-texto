




  document.addEventListener("DOMContentLoaded", () => {
    const encryptedText = document.querySelector('.encryptedText')
    const decryptedText = document.querySelector('.decryptedText')
    const encryptInput = document.getElementById("encryptInput");
    const decryptInput = document.getElementById("decryptInput");
    let textOrigin = encryptInput.value;
    let encryptedTextOrigin = decryptInput.value;


    encryptInput.oninput = (e) => {
        textOrigin = e.target.value;
    }

    decryptInput.oninput = (e) => {
        encryptedTextOrigin = e.target.value;
    }

    const encryptBtn = document.getElementById("encryptBtn");
    encryptBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(containsSpecialChars(textOrigin)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El texto no puede contener caracteres especiales ni acentos.',

              })
              
        } else {
            encryptedText.innerText = encryptText(textOrigin.toLowerCase());
        }

    })

    const decryptBtn = document.getElementById("decryptBtn");
    decryptBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(containsSpecialChars(encryptedTextOrigin)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El texto no puede contener caracteres especiales ni acentos.',
              })
              
        } else {
            decryptedText.innerText = decryptText(encryptedTextOrigin.toLowerCase());
        }
    })
  })


  // Función para evaluar caracteres especiales
  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+áéíóúÁÉÍÓÚ\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  // Función para encripar el texto
  function encryptText(text) {

    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
  }
  
  // Función para desencriptar el texto
  function decryptText(encryptedText) {

    encryptedText = encryptedText.replace(/ufat/g, "u");
    encryptedText = encryptedText.replace(/ober/g, "o");
    encryptedText = encryptedText.replace(/ai/g, "a");
    encryptedText = encryptedText.replace(/imes/g, "i");
    encryptedText = encryptedText.replace(/enter/g, "e");
    return encryptedText;
  }



  
  
