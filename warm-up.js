'use strict';

function modString(array){
    array.forEach(str => {
        console.log(str[0] + str[1] + str[str.length - 2] + str[str.length - 1]);    
    }); 
}

const str = ['spring'];
modString(str);
