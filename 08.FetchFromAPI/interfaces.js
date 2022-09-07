//Show paste JSON as code
//Show code form
function fetchToDo(resourceUrl) {
    return fetch(resourceUrl).then(response => {
        // fetching the reponse body data
        return response.json();
    });
}
// Consuming the fetchToDo to retrieve a Todo
fetchToDo("https://jsonplaceholder.typicode.com/todos/2")
    .then((toDoItem) => {
    // assigning the response data `toDoItem` directly to `myNewToDo` variable which is
    // of Todo type
    let myNewToDo = toDoItem;
    // It is possible to access Todo object attributes easily
    console.log('\n id: ' + myNewToDo.id + '\n title: ' + myNewToDo.title + '\n completed: ' + myNewToDo.completed + '\n User Id: ' + myNewToDo.userId);
});
