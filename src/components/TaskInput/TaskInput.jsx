import Container from '../Container/Container';
import styles from './TaskInput.module.css'
import { IoIosAdd } from 'react-icons/io'
import{ BsTrashFill } from 'react-icons/bs'
import { useState } from 'react';
import { TaskType } from '../../types/TaskType';


function TaskInput({tasks, setTasks}) {
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = e => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        if(inputValue){
            const newTask ={
                id: tasks[tasks.length - 1].id + 1,
                value: inputValue,
                creattionTime: new Date(),
                type: TaskType['TODO']
            }
            setTasks(currVal => {
                return [...currVal, newTask]
            })
        setInputValue('')
        
        console.log('Вы нажали на кнопку!')
        }
    }

    return (
        <Container>
            <div style={{
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30px'
            }}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={inputChangeHandler}
                    placeholder="Введите задачу"
                    className={styles.task__input}
                />
                <button
                    className={styles.input__add_button}
                    onClick={handleClick}
                >
                    <IoIosAdd />
                </button>
            </div>
        </Container>
    )
}

export default TaskInput;