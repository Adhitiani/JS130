const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('copy of todolist array', () => {
    expect(list.toArray()).toEqual(list.todos);
  });

  test('The first task in the list is Buy milk', () => {
    expect(list.first()).toBe(list.todos[0]);
  });

  test('The first item in the list, Buy milk, is removed', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('Calling last return the last todo item', () => {
    expect(list.last()).toEqual(todo3)
  });

  test('pop() removes and returns the last items', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test('isDone returns false when all items in the list are not done', () => {
    expect(list.isDone()).toBeFalsy();
  });

  test('a typeError occurs when we attempt to add an item to the list that is not a Todo Object', () => {
   expect(() => list.add('Going to the gym')).toThrow(TypeError)
  });

  test('itemAt returns the item at given index or raises ReferenceError if we specify an index with no element', () => {
    expect(list.itemAt(0)).toEqual(todo1)
    expect(() => list.itemAt(100)).toThrow(ReferenceError);
  })

  test('markDoneAt return done === true at specify index', () => {
    list.markDoneAt(0);
    expect(todo1.done).toBeTruthy();
    expect(todo2.isDone()).toBe(false);
    expect(() => list.markDoneAt(100)).toThrow(ReferenceError)
  });

  test('markUndoneAt mark todo at given index undone', () => {
    list.markDoneAt(1);
    expect(todo2.isDone()).toBe(true);
    list.markUndoneAt(1);
    expect(todo2.isDone()).toBe(false);
    expect(() => list.markUndoneAt(100)).toThrow(ReferenceError)
  });

  test('markAllDone mark all todo done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);

  });

  test('removeAt remove specified todo at given index', () => {
    list.removeAt(1);
    expect(list.toArray()).not.toContain(todo2);
    expect(list.toArray()).toEqual([todo1, todo3])
    expect(() => list.removeAt(100)).toThrow(ReferenceError)
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });

  test('toString returns different string for done todo', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;
  
    list.markDoneAt(1);
  
    expect(list.toString()).toBe(string);
  });

  test('toString returns different string for all done todos', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
  
    list.markAllDone();
  
    expect(list.toString()).toBe(string);
  });

  test('forEach iterates over all todos', () => {
    let listed = [];
    list.forEach(item => listed.push(item));
    expect(listed).toEqual([todo1, todo2, todo3])
  });

  test('filter returns a new TodoList Object', () => {
    list.markDoneAt(0);
    list.markDoneAt(1);
    list.removeAt(2)
    
    let newTodo = list.filter(item => item.isDone() === true);
    expect(newTodo.toString()).toBe(list.toString());

  })







  // your tests go here
});