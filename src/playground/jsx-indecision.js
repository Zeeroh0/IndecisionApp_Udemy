const appRoot = document.getElementById("app");

const app = {
    title: "Indecision App",
    subtitle: "Cause sometimes we just need a hand making a choice!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const makeDecision = () => {
   const randomNum = Math.floor(Math.random()*app.options.length);
   const option = app.options[randomNum];
   alert(option);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h3>{app.subtitle}</h3>}        
            <p>{app.options.length > 0 ? 'Here are your options' : "No options"}</p>
            <button disabled={app.options.length<1} onClick={makeDecision}>What should I do?</button>    
            <button onClick={removeAll}>Remove All</button>    
            <ol>
            {
                app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                })
            }     
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();
