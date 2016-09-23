import { Angular2EndToEndPage } from './app.po';
import { browser, element, by } from 'protractor/globals';

describe('angular2-end-to-end App', function() {
  let page: Angular2EndToEndPage;

  beforeEach(() => {
    page = new Angular2EndToEndPage();
  });

  it("should show three todos when we first load the todo app", () => {
    browser.get("/")
    let todos = element.all(by.css(".todos .todo"));
    expect(todos.count()).toEqual(3);
  })

  it("Should be able to add a new todo", () => {
    browser.get("/")
    let newTodoInput = element(by.css(".add-todo input[type=text]"));
    newTodoInput.sendKeys("Todo 4");

    let newTodoSubmitButton = element(by.css(".add-todo input[type=submit]"));
    newTodoSubmitButton.click();

    let todos = element.all(by.css(".todos .todo"));
    expect(todos.count()).toEqual(4);
  })

  it("should be able to click on a todo on the homepage and get to the details page", () => {
    browser.get("/")
    let firstTodo = element.all(by.css(".todos .todo")).first();
    let firstTodoText = firstTodo.getText();

    firstTodo.click();
    let inputFieldText = element(by.css("todo input[type=text]")).getAttribute("value");

    expect(inputFieldText).toEqual(firstTodoText);
  })

  it("should be able to delete a todo", () => {
    browser.get("/")
    let firstTodo = element.all(by.css(".todos .todo")).first();

    firstTodo.click();

    let deleteLink = element(by.cssContainingText("span", "Delete"));
    deleteLink.click();

    let todosList = element.all(by.css(".todos .todo"));

    expect(todosList.count()).toEqual(2);
  })

  it("should be able to edit a todo title", () => {
    browser.get("/");
    let firstTodo = element.all(by.css(".todos .todo")).first();

    firstTodo.click();

    let todoInputField = element(by.css("todo input[type=text]"));
    todoInputField.clear();
    todoInputField.sendKeys("Editted Todo1 Title");

    let saveButton = element(by.css("todo button[type=submit]"));
    saveButton.click();

    firstTodo = element.all(by.css(".todos .todo")).first();
    let firstTodoText = firstTodo.getText();

    expect(firstTodoText).toEqual("Editted Todo1 Title");
  })

  it("Should not be able to save an empty todo", () => {
    browser.get("/")
    let newTodoInput = element(by.css(".add-todo input[type=text]"));

    let newTodoSubmitButton = element(by.css(".add-todo input[type=submit]"));
    newTodoSubmitButton.click();

    let todos = element.all(by.css(".todos .todo"));
    expect(todos.count()).toEqual(3);
  })

  it("Should have add todo button be disabled initially", () => {
    browser.get("/")
    let newTodoSubmitButton = element(by.css(".add-todo input[type=submit]"));

    expect(newTodoSubmitButton.isEnabled()).toEqual(false);
  })

  it("Should only enable save todo button when we start typing a new todo title", () => {
    browser.get("/")
    let newTodoSubmitButton = element(by.css(".add-todo input[type=submit]"));
    let newTodoInputField = element(by.css(".add-todo input[type=text]"));

    newTodoInputField.sendKeys("New Todo 4");

    expect(newTodoSubmitButton.isEnabled()).toEqual(true);
  })
});
