var display = document.getElementById('display');
     //passing through
    function btn(obj) {
         
        var inp = obj.innerHTML;
         
        if (inp == '=') {
            display.innerHTML = eval(display.innerHTML);
            //run
             
        } else if (inp == 'AC') {
            display.innerHTML = '0';
            //reset
             
        } else if (inp == '÷') {
            //change divide symbol
            display.innerHTML += '/';
            //still can't get the displayed symbol to change without breaking it
        }
        
        else {
            if (display.innerHTML == '0') {
                display.innerHTML = inp;
                 
            } else {
                display.innerHTML += inp;   
            }
        } 
        
    }