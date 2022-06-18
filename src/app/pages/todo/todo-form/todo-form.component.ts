import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['../../../app.component.less', './todo-form.component.less'],
})
export class TodoFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.todoService.addTodo({
      id: new Date().getTime().toString(),
      title: this.form.value.title,
      description: this.form.value.description,
      deadline: this.form.value.deadline,
    });
    // this.todoItems.push({
    //   id: new Date().getTime().toString(),
    //   title: this.form.value.title,
    //   description: this.form.value.description,
    //   deadline: this.form.value.deadline,
    // });
  }
}
