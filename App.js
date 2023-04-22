const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "Welcome to react world"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a child2 tag"),
    React.createElement("h2", {}, "Welcome to react world again"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(root);
root.render(heading);
