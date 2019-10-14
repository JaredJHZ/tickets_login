let generateRandomNumber = () => {
    let digits = ["0","1","2","3","4","5","6","7","8","9"];
    let number = '';
    for(let i = 0; i < 5 ; i++) {
        let random = Math.floor((Math.random() * 9) + 1);
        number+= digits[random];
    }

    return number;
}


module.exports = {
    generateRandomNumber
}