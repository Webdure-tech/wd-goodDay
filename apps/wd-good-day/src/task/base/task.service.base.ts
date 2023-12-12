/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Task } from "@prisma/client";

export class TaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TaskCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskCountArgs>
  ): Promise<number> {
    return this.prisma.task.count(args);
  }

  async tasks<T extends Prisma.TaskFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskFindManyArgs>
  ): Promise<Task[]> {
    return this.prisma.task.findMany(args);
  }
  async task<T extends Prisma.TaskFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskFindUniqueArgs>
  ): Promise<Task | null> {
    return this.prisma.task.findUnique(args);
  }
  async createTask<T extends Prisma.TaskCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskCreateArgs>
  ): Promise<Task> {
    return this.prisma.task.create<T>(args);
  }
  async updateTask<T extends Prisma.TaskUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskUpdateArgs>
  ): Promise<Task> {
    return this.prisma.task.update<T>(args);
  }
  async deleteTask<T extends Prisma.TaskDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TaskDeleteArgs>
  ): Promise<Task> {
    return this.prisma.task.delete(args);
  }
}
