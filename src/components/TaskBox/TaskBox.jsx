import styles from './TaskBox.module.css'
import { HiArrowSmRight } from 'react-icons/hi';
import { TaskType } from '../../types/TaskType';
import { BsTrashFill } from 'react-icons/bs';

function TaskBox({ value,type, setTasks, id }) {

    const handleMove =()=>{
        setTasks(currVal=>{
            const copy = [...currVal]
            const index = currVal.findIndex(task => task.id === id);
            copy[index].type = TaskType['PROGRESS']
        
            return copy
        })
    }


    const handleDelete = () => {
        setTasks(currVal =>{
            currVal = currVal.filter(task => task.id !== id)
            return currVal
        })
    }

    return (
        <div className={styles.task__box}>
            <div>
                {value}
            </div>
            <div className={styles.input__box}>
                <button className={styles.input_add__button}
                    onClick={handleMove}>
                    <HiArrowSmRight />
                </button>

                <button className={styles.input_delete__button}
                    onClick={handleDelete}> 
                    <BsTrashFill />
                </button>

            </div>
        </div>
    )
}

export default TaskBox; 
