import Container from "../Container/Container";
import TasksGridItem from "../TasksGridItem/TasksGridItem";
import styles from './TasksContainer.module.css'

const listNames = [
    'Tasks to do',
    'Tasks in progress',
    'Completed tasks'
]

function TasksContainer() {
    return (
        <Container>
            <div className={styles.tasks__container}>
                {listNames.map(name => {
                    return (
                        <TasksGridItem key={name} name={name} />
                    )
                })}
            </div>
        </Container>
    )
}

export default TasksContainer;