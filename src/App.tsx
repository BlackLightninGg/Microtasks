import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

function App() {


    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    type todolistsType = {
        id: string
        title: string
        filter: FilterValuesType
    }

    type todolistTasksType = {
        [key: string]: Array<tasksType>
    }

    type tasksType = {
        id: string
        title: string
        isDone: boolean
    }

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<todolistTasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, todoListId: string) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(t => t.id != id)});
    }

    function addTask(title: string, todoListId: string) {
        setTasks({...tasks, [todoListId]: [{id: v1(), title: title, isDone: false}, ...tasks[todoListId]]});
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        setTasks({...tasks,[todoListId]:tasks[todoListId].map(t => t.id === taskId ? {...t, isDone}: t)});
    }


    function changeFilter(value: FilterValuesType, todoListId: string) {
        setTodolists(todolists.map(tl => tl.id === todoListId ? {...tl, filter: value} : tl));
    }


    return (
        <div className="App">
            {todolists.map(tl => {
                    let tasksForTodolist = tasks[tl.id];

                    if (tl.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }


                    return <Todolist key={tl.id}
                                     id={tl.id}
                                     title={tl.title}
                                     tasks={tasksForTodolist}
                                     removeTask={removeTask}
                                     changeFilter={changeFilter}
                                     addTask={addTask}
                                     changeTaskStatus={changeStatus}
                                     filter={tl.filter}
                    />
                }
            )}

        </div>
    );
}

export default App;
