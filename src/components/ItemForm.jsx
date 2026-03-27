import { useState } from "react"; 

export function ItemForm() { 
    const [name, setName] = useState("");

    return (
        <form> 
            <input 
            type="text"
            placeholder="Yarn name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <button type="submit">Add item</button>
        </form>
    );
}