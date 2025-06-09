import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function useTodos(initialTodos) {
    const [todos, setTodos] = useState(initialTodos || []);

    function addTodos(todo){
        setTodos([...todos, {
            name: todo,
            id: uuidv4(),
            date: new Date()
        }])
    }

    function deleteTodos(id){
        setTodos((prevTodos)=>{
            return prevTodos.filter(t => t.id !== id);
        })
    }

    function decreasePriority(id){
        setTodos((prevTodos)=>{
            let indx = prevTodos.findIndex(t => t.id === id);
            if(indx>=0 && indx<prevTodos.length-1){
                let newTodos = [...prevTodos]; // Meine copy banai ek prevTodos ki
                [newTodos[indx] , newTodos[indx+1]] = [newTodos[indx+1], newTodos[indx]];
                return newTodos; // Change hua toh newTodos set kr denge
            }
            // Agar valid index nahi hai toh poorana data hi rhega
            return prevTodos;
        })
    }

    function increasePriority(id){
        setTodos((prevTodos)=>{
            let indx = prevTodos.findIndex(t => t.id === id);
            if(indx>0){
                let newTodos = [...prevTodos]; // Meine copy banai ek prevTodos ki
                [newTodos[indx] , newTodos[indx-1]] = [newTodos[indx-1], newTodos[indx]];
                return newTodos; // Change hua toh newTodos set kr denge
            }
            // Agar valid index nahi hai toh poorana data hi rhega
            return prevTodos;
        })
    }


    return {
        todos,
        addTodos,
        deleteTodos,
        increasePriority,
        decreasePriority
    }

}
