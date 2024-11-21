import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition) 
{ 
    let addTask = await inquirer.prompt(
        [
            {
                name: 'todo',
                type: 'input',
                message: 'Central Shopping Mall is Available List'
            },
            {
                name: 'addMore',
                type: 'confirm',
                message: 'are you sure you want to add more items to the shopping mall?',
                default:  false
            }
        ]
    );
    todos.push(addTask.todo);
    condition = addTask.addMore
    console.log(todos)
}