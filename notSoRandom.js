function random(x,y){
    let random = Math.floor(Math.random()*x);
    let loops = 0;
    if(process.argv[2] != "skip" || "Skip"){
        if(process.argv[3] != "skip" || "Skip"){
            while(random != y){
            random = Math.floor(Math.random()*x);
            loops++;
            }
            console.log(random);
            console.log("It took " + loops +" loops to get " + random);
        }
        else{
            random = Math.floor(Math.random()*x);
            console.log(random);
        }
    }
}

random(process.argv[2],process.argv[3]);

function randomLetter(string){
    let random1 = Math.floor(Math.random()*string);
    let letter = string.charAt(random1);
    console.log(letter);
}
randomLetter(process.argv[4]);

function myGuy(message){
    console.log(message + ", my guy");
}

myGuy(process.argv[5]);