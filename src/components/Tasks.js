import Task from './Task'

//initialize tasks component for mapping all of "Task" based on changes made to reminders and/or deletions
const Tasks = ( { tasks , onDelete , onToggle} ) => {
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task}
             onDelete={onDelete}
             onToggle={onToggle}
            />
            ))}
        </>
    )
}

export default Tasks




