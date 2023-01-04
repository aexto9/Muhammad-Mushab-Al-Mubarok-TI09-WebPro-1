// isi logic gamemu disini
document.querySelectorAll('#option a').forEach((anchor) => {
    anchor.addEventListener('click',(element)=>{
        computerChoice(element)
    })
});

function computerChoice(element){
    //menangkap pilihan user
    let pilihanuser = element.target.innerText;

    //menangkap pilihan komputer pada result
    let pilihanKomputer = document.querySelector('#result');

    //membuat pilihan untuk komputer
    let choices = ['Rock','Paper','Scissors'];

    //membuat pilihan random komputer
    pilihanKomputer.innerHTML = choices[Math.floor(Math.random() * choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    //Kondisi Menang
    if(pilihanuser == 'Rock' && pilihanKomputer=='Scissors'){
        setTimeout(alert('YOU WIN!!'),100);
    }

    if(pilihanuser == 'Paper' && pilihanKomputer=='Rock'){
        setTimeout(alert('YOU WIN!!'),100);
    }

    if(pilihanuser == 'Scissors' && pilihanKomputer=='Paper'){
        setTimeout(alert('YOU WIN!!'),100);
    }

    //Kondisi kalah
    if(pilihanuser == 'Scissors' && pilihanKomputer=='Rock'){
        setTimeout(alert('YOU LOSE!!'),100);
    }

    if(pilihanuser == 'Rock' && pilihanKomputer=='Paper'){
        setTimeout(alert('YOU LOSE!!'),100);
    }

    if(pilihanuser == 'Paper' && pilihanKomputer=='Scissors'){
        setTimeout(alert('YOU LOSE!!'),100);
    }

    //kondisi seri
    if(pilihanuser == 'Rock' && pilihanKomputer=='Rock'){
        setTimeout(alert('DRAW!!!!!'),100);
    }

    if(pilihanuser == 'Paper' && pilihanKomputer=='Paper'){
        setTimeout(alert('DRAW!!!!!'),100);
    }

    if(pilihanuser == 'Scissors' && pilihanKomputer=='Scissors'){
        setTimeout(alert('DRAW!!!!!'),100);
    }
}