const score= JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

updateScore();
let game='';
function computermove(){  
    let RandomNo = Math.random();
    let result=''; 
    if(RandomNo<=1/3){
        result='rock';
    }
    else if(RandomNo<=2/3){
        result='paper';
    }
    else{
        result='scissors';
    }
    console.log('computer move: ' + result);
    return result;
            
}

function cow(game){
    const result=computermove();
    let outcome=' ';
    if(game==='scissors')
    {
        if(result==='scissors'){
            score.ties+=1;
            outcome='you tied';
        }
        else if(result==='rock'){
            score.loses+=1;
            outcome='you lost';
        }
        else{
            score.wins+=1;
            outcome='you win';
            
        }

    }
    else if(game==='paper')
    {
        if(result==='paper'){
            score.ties+=1;
            outcome='you tied';
            
        }
        else if(result==='scissors'){
            score.loses+=1;
            outcome='you lost';
            
        }
        else{
            score.wins+=1;
            outcome='you win';
            
        }
    }
    else if(game==='rock')
    {
        if(result==='rock'){
            score.ties+=1;
            outcome='you tied';
            
        }
        else if(result==='paper'){
            score.loses+=1;
            outcome='you lost';
            
        }
        else{
            score.wins+=1;
            outcome='you win';
            
        }
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore(); 
    document.querySelector('.js-result').innerHTML= outcome;
    document.querySelector('.js-moves').innerHTML = `you
    <img src="images/${game}-emoji.png" class="move-icon">
    <img src="images/${result}-emoji.png" class="move-icon">
    computer`;

}
function updateScore(){
            document.querySelector('.js-score')
                .innerHTML = `wins: ${score.wins}, losses: ${score.loses}, ties: ${score.ties}`;

    }
        
   