import { TaskType } from "./types/TaskType";

export const dbTasks = [
{
    id: 1,
    value: 'New Task',
    creationTime: new Date(),
    type: TaskType['TODO']
},
{
    id:2,
    value:'Task in progress',
    creationTime: new Date(),
    type: TaskType['PROGRESS']
}, 
{
    id: 3,
    value: 'task completed',
    creationTime: new Date(),
    type: TaskType['FINISHED']
}]