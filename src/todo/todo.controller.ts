import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodo() {
    return this.todoService.getTodo();
    // return is a response (return anythis that return from getTodo())
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('subTitle') subTitle: string) {
    return this.todoService.addTodo(title, subTitle);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.removeTodoById(id);
  }
}
