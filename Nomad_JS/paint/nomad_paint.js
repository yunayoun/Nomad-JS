const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const lineWidth = document.querySelector('#line-width');
const color = document.querySelector('#color');
const colorOption = Array.from(document.getElementsByClassName('color-option'));
const modeBtn = document.querySelector('#mode-btn');
const destroyBtn = document.querySelector('#destroy-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const fileInput = document.querySelector('#file');
const textInput = document.querySelector('#text');
const saveBtn = document.querySelector('#save');
canvas.width = 800;
canvas.height = 800;

let isFilling = false;
let isPainting = false;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = 'round';
// ctx.moveTo(0,0);
//시작점설정

function onMove(e){
    if(isPainting){
        ctx.lineTo(e.offsetX ,e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(e.offsetX ,e.offsetY);
};
function startPainting(){
    isPainting = true;
};
function cancelPainting(){
    isPainting = false;
};

function onChangeLineWidth(e){
    ctx.lineWidth= e.target.value;
};
function onChangeColor(e){
    ctx.strokeStyle =  e.target.value;
    ctx.fillStyle = e.target.value;
};
function onColorOption(e){
    const colorValue = e.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
};
function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = 'fill';
    }else{
        isFilling = true;
        modeBtn.innerText = 'draw';
    }

};
function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,800,800);
    }
};
function onDestroyClick(){
    ctx.fillStyle= 'white';
    ctx.fillRect(0,0,800,800);
    
};
function onEraserClick(){
    ctx.strokeStyle ='white';
    isFilling = false;
    modeBtn.innerText = 'fill';
}
function onFileChange(e){
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image,0,0,800,800);
        fileInput.value = null;
    }
};
function onDoubleClick(e){
    const text = textInput.value;

    if(text !== ''){
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = "68px serif";
        ctx.fillText(text,e.offsetX,e.offsetY);
        ctx.restore();//save,restore 중간에 있는 태그들은 수정안됨
    }
}
function onSaveClick(){
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.href = url;
    a.download = 'myDrawing.png';
    a.click()
}

canvas.addEventListener('dblclick',onDoubleClick);
canvas.addEventListener('mousemove',onMove);
canvas.addEventListener('mousedown',startPainting);
canvas.addEventListener('mouseup',cancelPainting);
canvas.addEventListener('mouseleave',cancelPainting);
//화면을 넘어갔을때 mouseup이벤트가 안되서 버그발생,mouseleave 이벤트추가.

lineWidth.addEventListener('change',onChangeLineWidth);
color.addEventListener('change',onChangeColor);

colorOption.forEach(color => color.addEventListener('click',onColorOption));
modeBtn.addEventListener('click',onModeClick);
canvas.addEventListener('click',onCanvasClick);
destroyBtn.addEventListener('click',onDestroyClick);
eraserBtn.addEventListener('click',onEraserClick);
fileInput.addEventListener('change',onFileChange);
saveBtn.addEventListener('click',onSaveClick);