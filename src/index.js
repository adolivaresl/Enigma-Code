import cipher from './cipher.js';

document.getElementById('Encode').addEventListener('click', () => {
    let offset = parseInt(document.getElementById('keyEncode').value);
    let message = document.getElementById('messageEncode').value; 
    document.getElementById('rootEncode').innerHTML = `<textarea class="outputMessage" id="outputEncode">${cipher.encode(offset, message)}</textarea>` ;
    document.getElementById('rootEncode').innerHTML += `<button id="copyEncode" class="btnCopy" style="color: #f8d41f">Copiar</button>`;
    
    let btnCopy = document.getElementById('copyEncode');
    btnCopy.addEventListener('click', copy)
    function copy() {
        console.log('ok man')
        const copyText = document.querySelector("#outputEncode");
        copyText.select();
        document.execCommand("copy");
      }
})

document.getElementById('Decode').addEventListener('click', () => {
    let offset = parseInt(document.getElementById('keyDecode').value);
    let message = document.getElementById('messageDecode').value; 
    document.getElementById('rootDecode').innerHTML = `<textarea class="outputMessage" id="outputDecode">${cipher.decode(offset, message)}</textarea>`;
    document.getElementById('rootDecode').innerHTML += `<button id="copyDecode" class="btnCopy" style="color: #3e9fe6">Copiar</button>`;
    
    let btnCopy = document.getElementById('copyDecode');
    btnCopy.addEventListener('click', copy)
    function copy() {
        console.log('ok man')
        const copyText = document.querySelector("#outputDecode");
        copyText.select();
        document.execCommand("copy");
      }
})


  