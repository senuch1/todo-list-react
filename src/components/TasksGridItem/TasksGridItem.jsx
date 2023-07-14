import TaskBox from '../TaskBox/TaskBox';
import styles from './TasksGridItem.module.css'


function TasksGridItem({ name,tasks,type, setTasks }) {
    return (
        <div className={styles.tasks__grid__item}>
            <div className={styles.tasks__header}>
                {name}
            </div>

            <div
                style={{ 
                    marginTop: '6px',
                    display: 'flex', 
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                {tasks
                .filter(task => task.type === type)
                .map(task => {
                    return(
                        <TaskBox setTasks={setTasks}
                            type={task.type}
                            key={task.id}
                            value={task.value}
                            id ={task.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TasksGridItem;