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
});
