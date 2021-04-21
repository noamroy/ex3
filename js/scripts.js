var i =0;
function createSquare(currentDiv){
    /*create square*/
    var color= ["blue","green","purple","cyan","grey","yellow","orange","red"]
    var divObj = document.createElement('div');
    divObj.style.background=color[currentDiv%8];
    /*create strawberry*/
    var disappearObj = document.createElement('img');
    disappearObj.src = "images/strawberry.png";
    disappearObj.setAttribute('title', "strawberry");
    disappearObj.setAttribute('alt', "strawberry");
    disappearObj.classList.add('strawberry');
    divObj.appendChild(disappearObj);
    /*wait for click*/
    if (i!=0)
        divObj.onclick = function() {changeSquare(divObj)};
    /*stars*/
    if((currentDiv+1) % 3 == 0){
        addStar(divObj);
    }
    /*plus*/
    if(currentDiv==0){
        addPlus(divObj);
    }
    /*add to main*/
    document.getElementsByTagName('main')[0].appendChild(divObj);
};
function addPlus(divObj){
    var plusObj = document.createElement('img');
    plusObj.src = "images/add_icon.png";
    plusObj.setAttribute('title', "plus");
    plusObj.setAttribute('alt', "plus");
    plusObj.id = "plus";
    divObj.appendChild(plusObj);
    console.log("plus created!!");
    plusObj.onclick = function() {
        createSquare(i++);
        console.log("square added");
    }
}
function addStar(divObj){
    var starObj = document.createElement('img');
    starObj.src = "images/star.png";
    starObj.setAttribute('title', "star");
    starObj.setAttribute('alt', "star");
    starObj.classList.add('star');
    divObj.appendChild(starObj);
    console.log("star created!!");
};
function changeSquare(divObj){
    if (divObj.classList.length != 0){
        divObj.classList = [];
        console.log("square appear");
    }
    else {
        divObj.classList.add("clicked");
        
        console.log("square disappear");
    }
};
function divsManager() {
    for (; i<14; i++){
        createSquare(i);
        console.log("all divs created!!");
    }
};
