let boxes=document.querySelectorAll(".box");
let hideMsg=document.querySelector(".hideCon");
let Msg=document.querySelector("#msg");
let drawMsg=document.querySelector(".drawCon");
let msg=document.querySelector("#drawmsg");
let rebtn=document.querySelector(".rebtn");
let newbtn=document.querySelector(".newbtn");
let drawbtn=document.querySelector(".drawbtn");


let turn=true;
let click=0;
let gameOver=false;

const winningPatt=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

rebtn.addEventListener("click",()=>{
        turn=true;
        enableBox();


});

newbtn.addEventListener("click",()=>{
        turn=true;
        enableBox();

});


drawbtn.addEventListener("click",()=>{
        turn=true;
        enableBox();

});





boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        click++;
        if(turn===false){
            box.innerText="0";
            turn=true;
            box.style.color="teal";
        }
        else{
            box.innerText="X";
            turn=false;
            box.style.color="#703d57";

        }
            box.disabled=true;
            checkWinner();
            if(click==9 && gameOver==false){
                msg.innerText=`DRAW,NObody is winner `;
                drawMsg.classList.remove("drawCon");
                 

            }

    });



});

const disableBox=()=>{
    boxes.forEach((box)=>{

        box.disabled=true;
    });
}

const enableBox=()=>{
    boxes.forEach((box)=>{

        box.disabled=false;
        box.innerText="";
    });
    click=0;
    gameOver=false;
     hideMsg.classList.add("hideCon");
     drawMsg.classList.add("drawCon");
     


}


    const checkWinner =()=>{
        for( let patt of winningPatt){
            let pat1=boxes[patt[0]].innerText;
            let pat2=boxes[patt[1]].innerText;
            let pat3=boxes[patt[2]].innerText;
            
        
        if(pat1 !="" && pat2 != "" && pat3 !=""){    
            if(pat1===pat2 && pat1===pat3){
                gameOver=true;
                disableBox();
                Msg.innerText=`Congratulations,Winner is ${pat1}`;
                hideMsg.classList.remove("hideCon");
                 

            }   

    }
    }
}



