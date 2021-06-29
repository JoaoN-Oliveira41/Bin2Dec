const input = document.querySelector("input#iTxt");

input.addEventListener("keyup", () =>{
    let nomeIn = input.value;
    let nomeSep = nomeIn.split("");
    for (let i = 0; i < nomeIn.length; i++) {
        parseInt(nomeSep[i]);
        if(nomeSep[i] != 0 && nomeSep[i] !=  1 ){
            document.querySelector("div#up").innerHTML = "Você digitou números além de 0 e 1.";
        } else {
            document.querySelector("div#up").innerHTML = "";
            if (nomeIn.length == 8) {
                let decimal = parseInt(input.value, 2);
                document.querySelector("div#texto").innerHTML = `Resultado ${decimal}`;
            }else{
                document.querySelector("div#texto").innerHTML = ``;
            }
        }    
    }
        
        
        
    




})