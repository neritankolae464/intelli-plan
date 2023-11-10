/*
 * Filename: complexCode.js
 * Content: A complex and elaborate JavaScript code example implementing a multi-level task management system
 */

class Task {
  constructor(name, description, priority) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.subTasks = [];
  }

  addSubTask(subTask) {
    this.subTasks.push(subTask);
  }

  removeSubTask(subTask) {
    const index = this.subTasks.indexOf(subTask);
    if (index > -1) {
      this.subTasks.splice(index, 1);
    }
  }

  getSubTasks() {
    return this.subTasks;
  }

  getPriority() {
    return this.priority;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  createTask(name, description, priority) {
    const task = new Task(name, description, priority);
    this.tasks.push(task);
    return task;
  }

  deleteTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this.tasks;
  }

  getTasksByPriority(priority) {
    return this.tasks.filter(task => task.getPriority() === priority);
  }
}

// Example Usage
const taskManager = new TaskManager();

const task1 = taskManager.createTask("Task 1", "Description for Task 1", 2);
const task2 = taskManager.createTask("Task 2", "Description for Task 2", 1);
const task3 = taskManager.createTask("Task 3", "Description for Task 3", 3);

const subTask1 = new Task("Sub Task 1", "Description for Sub Task 1", 1);
const subTask2 = new Task("Sub Task 2", "Description for Sub Task 2", 2);
const subTask3 = new Task("Sub Task 3", "Description for Sub Task 3", 3);

task1.addSubTask(subTask1);
task1.addSubTask(subTask2);
task2.addSubTask(subTask3);

console.log(taskManager.getTasks());

console.log(taskManager.getTasksByPriority(2));

taskManager.deleteTask(task1);

console.log(taskManager.getTasks());
