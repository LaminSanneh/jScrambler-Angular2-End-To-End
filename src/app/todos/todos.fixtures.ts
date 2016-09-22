let todos: any[] = [];
[1,2,3].forEach( (i) => { todos.push({id: i, title: "Todo "+ i }); })
export const TODOS: any[] = todos;