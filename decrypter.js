const decrypt = phrase =>{
    const decryptLetter = letter => {
        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                         "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        if(alphabet.includes(letter)){
            let position = (alphabet.indexOf(letter));
            for(let i = 0; i < 3; i++){
                if(position - 1 < 0){
                    position = 25; 
                }else{
                    position--;
                }
            }
            return alphabet[position];
        }else{
            return letter;
        }
    }
    let word = "";
    for(let character of phrase){
        word += decryptLetter(character);
    }
    return word;
}
console.log(decrypt("wdon lv fkhds, vkrz ph wkh frgh! olqxv wruydogv")); //"talk is cheap, show me the code! linus torvalds"