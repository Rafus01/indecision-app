"use strict";

console.log("App.js is running!");

//JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitile: "Put you life in the hands of a computer",
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    renderaddValue();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
};
var renderaddValue = function renderaddValue() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitile && React.createElement(
            "p",
            null,
            app.subtitile
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "Item one"
            ),
            React.createElement(
                "li",
                null,
                "Item two"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    var appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};
renderaddValue();
