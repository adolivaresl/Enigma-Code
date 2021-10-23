const cipher = {
  encode: (offset, message) => {
    if (offset === null || offset === 0 ) {
      throw new TypeError();
      }
    let textEncode = '';
    for(let i = 0; i < message.length ; i++){
      let ascii = message.charCodeAt(i);
      // let codeText = ''
      if(ascii >= 65 && ascii <= 90){
        let codeText = (ascii - 65 + offset) %26 + 65;
        textEncode += String.fromCharCode(codeText);
      }
      else if(ascii >= 97 && ascii <= 122){
        let codeText = (ascii - 97 + offset) %26 + 97;
        textEncode += String.fromCharCode(codeText);
      }
      else if(ascii >= 48 && ascii <= 57){
        let codeText = (ascii - 48 + offset) %10 + 48;
        textEncode += String.fromCharCode(codeText);
      }
      else{
        textEncode += String.fromCharCode(ascii);
      }
    }
    return textEncode;
  },
  decode: (offset, message) => {
    if (offset === null || offset === 0 ) {
      throw new TypeError();
      }
    let textDecode = '';
    for(let i = 0; i < message.length ; i++){
      let ascii = message.charCodeAt(i);
      // let codeText = ''
      if(ascii >= 65 && ascii <= 90){
        let codeText = (ascii - 90 - offset) %26 + 90;
        textDecode += String.fromCharCode(codeText);
      }
      else if(ascii >= 97 && ascii <= 122){
        let codeText = (ascii - 122 - offset ) %26 + 122;
        textDecode += String.fromCharCode(codeText);
      }
      else if(ascii >= 48 && ascii <= 57){
        let codeText = (ascii - 57 - offset) %10 + 57;
        textDecode += String.fromCharCode(codeText);
      }
      else{
        textDecode += String.fromCharCode(ascii);
      }
    }
    return textDecode;
  }
};

export default cipher;
