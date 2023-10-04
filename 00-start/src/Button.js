import { HiBell } from "react-icons/hi";

export function Button (){
    return <button onClick={()=> { 
        console.log('click')
    }}>
       <HiBell/>
        Like
    </button>
}