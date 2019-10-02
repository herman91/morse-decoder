const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    var a = expr;
    var long = a.length;
    var longNew = 0;
    var k = 0;
    var dot = '10';
    var non = '11';
    var signal = "";
    var m = "";
    var z = 0;
    var word = "";
    var finalText ="";
    var j = 0;
    var i = 0;

    for (e = 0; e < long; e = e+10){
        k++;
    }

    e=0;

    for( j = 1; j <= k; j++){

        for (i = e; i < e+10 ; i++){
            word=word+ a[i];
        }
        e= j*10;
        longNew = word.length;


        for ( z = longNew-1;z > 0;z = z-2){
            signal = signal+word[z-1]+word[z];
            if( signal === dot ){
                signal= '.';
            }else if( signal === non ){
                signal = '-';
            }
            if( signal === "00"){
                signal='';
            }
            m=signal+m;
            signal="";
        }

        if( m != "**********"){
            finalText=finalText+MORSE_TABLE[m]
        }else{
            finalText=finalText+" ";
        }

        m="";
        word='';
    }

    return(finalText);
}

module.exports = {
    decode
}