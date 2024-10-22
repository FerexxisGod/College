const score = JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    losses:0,
    ties:0,
}

let result ='';
const comp = '';
updateScoreELement()

function computerMove(){
const random = Math.random();
if(random>0&&random<=1/3)
    result = 'Scissors';
else if(random>1/3&&random<=2/3)
    result = 'Rock';
else if(random>2/3)
    result = 'Paper';
return result;
}


function calc(input){
    const comp = computerMove();
    let yet = ''
    if(input === 'Rock'){
        if(comp === 'Rock'){
        yet = 'tie'
        document.querySelector('.js-move').
            innerHTML = ('You &#9994; - &#9994; Computer')
        } 
        else if(comp === 'Paper'){
        yet = 'loose'
        document.querySelector('.js-move').
            innerHTML = ('You &#9994; - &#128400; Computer')
        }
        else if(comp === 'Scissors'){
        yet ='win'
        document.querySelector('.js-move').
            innerHTML = ('You &#9994; - &#9996 Computer')
        }
    }
    else if(input === 'Scissors'){
        if(comp === 'Rock'){
        yet = 'loose'
        document.querySelector('.js-move').
            innerHTML = ('You &#9996; - &#9994; Computer')
        } 
        else if(comp === 'Paper'){
        yet = 'win'
        document.querySelector('.js-move').
            innerHTML = ('You &#9996; - &#128400; Computer')
        }
        else if(comp === 'Scissors'){
            yet = 'tie'
            document.querySelector('.js-move').
            innerHTML = ('You &#9996; - &#9996; Computer')
        }
    }
    else if(input === 'Paper'){
        if(comp === 'Rock'){
        yet = 'win'
        document.querySelector('.js-move').
            innerHTML = ('You &#128400; - &#9994; Computer')
        } 
        else if(comp === 'Paper'){
        yet = 'tie'
        document.querySelector('.js-move').
            innerHTML = ('You &#128400; - &#128400; Computer')
        }
        else if(comp === 'Scissors'){
            yet = 'loose'
            document.querySelector('.js-move').
            innerHTML = ('You &#128400; - &#9996; Computer')
        }
    }
    return yet;
}


function output(inp){

    const r = calc(inp)

    if(r === 'loose'){
        score.losses++
        document.querySelector('.js-output').
            innerHTML = ("You loose!")
    }
    else if(r === 'win'){
        score.wins++
        document.querySelector('.js-output').
        innerHTML = ("You win!")
    }     
    else if( r==='tie'){ 
        score.ties++
        document.querySelector('.js-output').
        innerHTML = "Its a tie!"
    }
    updateScoreELement();

    localStorage.setItem('score', JSON.stringify(score))

}
function updateScoreELement(){
    document.querySelector('.js-score').innerHTML= 
    'Wins:'+score.wins+' losses: '+score.losses+" ties: "+score.ties;
}

let isPlaying = false
let interval
function autoPlay(){
    if(!isPlaying){
        interval = setInterval(function(){
            const playerMove = computerMove()
            output(playerMove)

        },1000)
        isPlaying = true
    }
    else{
        clearInterval(interval)
        isPlaying = false
    }
}