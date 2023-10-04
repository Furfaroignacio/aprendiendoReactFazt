
import './task.css'


export function Task ({ready}) {
    return <div>
        <h1 className='title'>Curso de Digital House</h1>
        <span className={ready? 'work bg-green': 'work bg-red'}>
            {ready ? 'Tarea realizada' : 'Tarea pendiente'}
        </span>
    </div>
}