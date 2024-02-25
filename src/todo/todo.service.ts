import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];
  addTodo(title: string, subTitle: string) {
    // console.log(`title : ${title},subTitle : ${subTitle}`);
    const todo = new Todo();
    todo.id = uuid();
    todo.title = title;
    todo.subTitle = subTitle;
    this.todoArray.push(todo);

    return this.todoArray;
  }

  getTodo() {
    return this.todoArray;
  }

  removeTodoById(id: string) {
    const found = this.todoArray.find((todo) => todo.id === id);
    if (!found) {
      throw new NotFoundException(`Not found todo id : ${id}`);
      // NotFoundException is one of many exception(ข้อยกเว้น/ข้อคัดค้าน)
      /*
        {
          "message": "Not found todo id : 5",
          "error": "Not Found",
          "statusCode": 404
        }
      */
    }
    this.todoArray = this.todoArray.filter((todo) => todo.id !== id);
    return this.todoArray;
  }
}
