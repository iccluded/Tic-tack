modal = document.querySelector('.modal');
tuck = document.querySelectorAll('.inner');
ols = modal.querySelector('.ol_text');
bup = document.querySelector('.bup')

result = '';
move = 0;


tuck.forEach(item => {
    item.addEventListener('click', () =>{
        if (item.innerHTML == 'X'){
            alert('Клетка занята! Сходите в другую!');
            move = 0;
        } else if(item.innerHTML == 'O'){
            alert('Клетка занята! Сходите в другую!');
            move = 1;
        }
        if (move % 2 == 0){
            item.innerHTML = 'X';
            move++;
            arr();
        } else {
            item.innerHTML = 'O';
            move++;
            arr();
        }
    } )
});

arr = () =>{
    tuck = document.querySelectorAll('.inner');
    winningConditions = [
                            [0, 1, 2],
                            [3, 4, 5],
                            [6, 7, 8],
                            [0, 3, 6],
                            [1, 4, 7],
                            [2, 5, 8],
                            [0, 4, 8],
                            [2, 4, 6]
                        ];
    for (let i = 0; i < winningConditions.length; i++){
        if(tuck[winningConditions[i][0]].innerHTML=='X' && tuck[winningConditions[i][1]].innerHTML=='X' && tuck[winningConditions[i][2]].innerHTML=='X'){
            result='крестик';
            prepareResult(result);
        } else if(tuck[winningConditions[i][0]].innerHTML=='O' && tuck[winningConditions[i][1]].innerHTML=='O'&& tuck[winningConditions[i][2]].innerHTML=='O') {
            result='нолик';
            prepareResult(result);
        }
    }
};
function prepareResult(winner){
    if(result == 'крестик'){
        ols.innerHTML= 'Победил крестик';
    } else if(result == 'нолик'){
        ols.innerHTML= 'Победил нолик';
    }
    winner=modal.style.display = 'block';
    bup.addEventListener('click', ()=>{
        document.location.reload();
    })
}
