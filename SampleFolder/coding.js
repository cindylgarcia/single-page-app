function binary(decimal) {
    let result = "";
    if (decimal ==0) {
        result = "0";
    }
 while (decimal >0) {
     result += decimal % 2; {
     decimal = Math.floor(decimal/2);
 }
 return result.split("").reverse().join("");
}
}
//Create a function given a string find a letter that has a single occurence. Return the letter
// in uppercase. If input is empty, return an empty string

function singleOccurence(str) {
    str = str.UpperCase();
    if(str === ""){
        return str;
    }
    for (i =0; i <str.length; i++) {
        if (str.indexOf(str.chartAt(i))== str.lastIndexOf(str.charAt(i))) {
            return str.charAt(i);
        }
    }

}

