document.write("65.to test whether a string ends with 'Script'. The string length must be greater than or equal to 6."+"<br>");
function test65(str){
    if(str.length>=6){
        return (str.substring(str.length-6)=="script");
    }
    return false;
}
document.write("The string :javasript , Ans :"+test65("javascript")+"<br><br>");