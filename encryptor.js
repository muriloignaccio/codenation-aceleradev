const encrypt = phrase =>{
    phrase = String(phrase);
    const encryptLetter = letter => {
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                         "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        if(alphabet.includes(letter)){
            let position = (alphabet.indexOf(letter));
            for(let i = 0; i < 3; i++){
                if(position + 1 > 25){
                    position = 0; 
                }else{
                    position++;
                }
            }
            return alphabet[position];
        }else{
            return letter;
        }
    }
    let word = "";
    for(let character of phrase){
        word += encryptLetter(character);
    }
    return word;
}
console.log(encrypt("talk is cheap, show me the code! linus torvalds")); //"wdon lv fkhds, vkrz ph wkh frgh! olqxv wruydogv"