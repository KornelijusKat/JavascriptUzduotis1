let vardas = 'joSEfas'
let pavarde = "petrUlis"
let asmensKodas = "31312256981";

function nameChange(vardas, pavarde) {
    if(vardas.length >=3 && pavarde.length >=5)
    {
        let newName = vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase();
        return `${vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase() + " "+ pavarde.toUpperCase()}`
    }
    else{
        console.log("error");
    }
    
}
function idChecker(asmensKodas){
    let gimData;
    let dekada = asmensKodas.slice(0,1);
    if(dekada[0] == 5 || dekada[0] == 6){
        gimData = `20${asmensKodas.slice(1,3)}-${asmensKodas.slice(3,5)}-${asmensKodas.slice(5,7)}`
        return gimData;
    }
    else if(dekada[0] == 3 || dekada[0] == 4){
        gimData = `19${asmensKodas.slice(1,3)}-${asmensKodas.slice(3,5)}-${asmensKodas.slice(5,7)}`
        return gimData;
    }
    else{
        return "Either too old for ID or from the far future(ignoring people before 1900 and people beyond 2000)";
    }
}
function birthNation(gimData){
    switch (gimData[2]){
        case `1`:
        case `2`:
           return `Gimimo vieta: Lietuva`;
        case `3`:
            return `Gimimo vietas: Užsienis`;
        default:
           return `Gimimo vieta:Nežinoma`
      
    }
}
function validIdChecker(asmensKodas){
    if(asmensKodas.length != 11 || isNaN(Number(asmensKodas)))
        return "Id is wrong format"
    else{
        return "Id has correct lenght and no letters";
    }
}
console.log(nameChange(vardas,pavarde))
console.log(idChecker(asmensKodas));
console.log(birthNation(idChecker(asmensKodas)));
console.log(validIdChecker(asmensKodas));