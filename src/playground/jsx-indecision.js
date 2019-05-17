const app = {
    title: "Indecision App",
    subtitle: "from udemy tutorial",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderIndecisionApp();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderIndecisionApp();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
}

const approot = document.getElementById("app")

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should I Do?</button>            
            <button disabled={app.options.length===0} onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key= {option}>{option}</li>
                )
            }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
        </form>
        </div>
    );
    ReactDOM.render(template, approot)
}

renderIndecisionApp();
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch