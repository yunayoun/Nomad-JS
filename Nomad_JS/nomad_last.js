
        // 날씨.장소
        const API_KEY = 'd85ceab3b1ff914765662929bd511fe9';
        
        function onGe_ok(position){
            
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            fetch(url)
            .then((response)=> response.json())
            .then((data)=>{
                const city = document.querySelector('.weatherBox span:first-child');
                const weather = document.querySelector('.weatherBox span:last-child');
                
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main}
                ${data.main.temp}°C`;
            })
        }
        function Ge_err(){
            console.log('i cant find it');
        }
        navigator.geolocation.getCurrentPosition(onGe_ok,Ge_err);

        // 이미지
        const images = ['house1.jpeg','house2.jpeg','house3.jpeg'];
        const randomImg = images[Math.floor(Math.random()*images.length)];
        const bgImg = document.createElement('img');
        bgImg.src = `../../img/${randomImg}`;
        document.body.appendChild(bgImg);
        // prepend는 맨뒤로붙음

        
        // login
        const hello = document.querySelector('#hello');
        const nameInput = document.querySelector('#hello input');
        const nameBox  = document.querySelector('#nicName');
        const nameHi = document.querySelector('#nicName span:first-child');
        // const nameList = document.querySelector('#nicName span:last-child');

        const HIDDEN_KEY = 'hidden'
        const STROAGE_NAME = 'name'

        function handNameSubmit(e){
            e.preventDefault();
            const newname = nameInput.value;
            nameInput.value = '';
            saveName(newname);
            // toDoForm.classList.remove('hidden');
        };
        function time_name(){
            const e = localStorage.getItem(STROAGE_NAME);
            nameBox.classList.remove(HIDDEN_KEY)

            const time = new Date().getHours()
            if(time>6 && time < 12){
                let good = 'GoodMoring'
                nameHi.innerText = `${good} ${e}`;
            }else if(time>13 && time < 19){
                let good = 'GoodAfternoon'
                nameHi.innerText = `${good} ${e}`;
            }else{
                let good = 'GoodNight'
                nameHi.innerText = `${good} ${e}`;
            }
        }
        function saveName(newname){
            nameInput.classList.add(HIDDEN_KEY)
            // nameList.innerText = newname;
            localStorage.setItem(STROAGE_NAME,newname);
            time_name()
        };
        
        const savedName = localStorage.getItem(STROAGE_NAME);

        if(savedName === null){
            nameInput.classList.remove(HIDDEN_KEY)
            hello.addEventListener('submit',handNameSubmit);
        }else{
            time_name()
        }
        

    //todo
    const toDoForm   = document.querySelector('#toDoForm');
    const toDoInput = document.querySelector('#toDoForm input');
    const toDoList = document.querySelector('#todo-list');
    const listForm = document.querySelector('#list-container');
    const formClose = document.querySelector('#form-close');

    const TODO_KEY = 'toDos';
    let toDos = [];
    

    toDoInput.addEventListener('click',()=>{
        listForm.classList.add('active');
    })
    formClose.addEventListener('click',()=>{
        listForm.classList.remove('active');
    })


    function saveTodo(){
        localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
    }

    function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos= toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveTodo();
    };
        
    function paintToDo(newTodo){
        const li = document.createElement('li');
        li.id = newTodo.id;
        const span = document.createElement('span');
        const btn = document.createElement('button');

        li.appendChild(span);
        li.appendChild(btn);
        span.innerText = newTodo.text;
        btn.innerText = 'x';
        toDoList.appendChild(li);
        
        btn.addEventListener('click',deleteTodo);
    
    };
        
    function handleToDoSubmit(event){
        event.preventDefault();
        const newTodo = toDoInput.value;
        if(newTodo!==''){
        toDoInput.value = '';

        const newTodoObj = {
            text:newTodo,
            id:Date.now(),
        };

        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveTodo();
        }else{
            alert('리스트를 적어주세요')
        }
    }

    toDoForm.addEventListener('submit',handleToDoSubmit);

    const savedTodo = localStorage.getItem(TODO_KEY);

    if(savedTodo !== null){
        const parsedTodo = JSON.parse(savedTodo);
        toDos = parsedTodo;
        parsedTodo.forEach(paintToDo);  
    }

    // -----------------clock!!!!
    function new_clock(){
    const times = document.querySelector('.times');
    const date = new Date(); 
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    // const seconds = String(date.getSeconds()).padStart(2,'0');
    times.innerText = `${hours}:${minutes}`
    }
    new_clock();
    setInterval(new_clock,1000);
