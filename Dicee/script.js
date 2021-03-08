
game = () => {
    const play1 = Math.floor(Math.random() * 6) + 1;
    const play1Dice = `Images/dice${play1}.png`;
    document.getElementById('check1').setAttribute('src',play1Dice);

    const play2 = Math.floor(Math.random() * 6) + 1;
    const play2Dice = `Images/dice${play2}.png`;
    document.getElementById('check2').setAttribute('src',play2Dice);

    if(play1 > play2){
        document.querySelector('h1').innerHTML = "Player 1 Won";
        swal({
            title: "🎉🎉🎉",
            text: "Player 1 Won",
            icon: "success",
            button: "Aww yiss!",
          });
    }
    else if(play1 < play2){
        document.querySelector('h1').innerHTML = "Player 2 Won";
        swal({
            title: "🎉🎉🎉",
            text: "Player 2 Won",
            icon: "success",
            button: "Aww yiss!",
          });
    }
    else{
        document.querySelector('h1').innerHTML = "It's a Draw";
        swal({
            title: "Play Again",
            text: "It's A Draw",
            icon: "success",
            button: "Aww yiss!",
          });
    }
}