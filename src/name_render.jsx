// import { useState, useEffect } from "react";

// const namesArray = ["ayush", "pratik", "lisa", "rishav", "kabsn", "risali", "beast", "lirisa"];

// const NameArray = () => {
//     const [filteredNames, setFilteredNames] = useState([]);
//     const myName = "rishav";

//     useEffect(() => {
//         const filtered = namesArray.filter((name) => name === myName);
//         setFilteredNames(filtered);
//     }, []);

//     return (
//         <div>
//             <h2>My Names:</h2>
//             <ul>
//                 {filteredNames.map((name, index) => (
//                     <li key={index}>{name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default NameArray;



import { useState, useEffect } from "react";

function Render() {
    const names = [
        "Ayush", "Rishab", "Arjun", "Priyanka", "Krishna", 
        "Bhumika", "Sneha", "Harish", "Swastika", "Ritika", "Srijesh", "Pratik"
    ];

    const [selectedName, setSelectedName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (selectedName === "pratik") {
            setMessage("I'm present here!");
        }
        else {
            setMessage("Absent!");
        }
    }, [selectedName]); // Effect only runs when 'selectedName' is "pratik"

    return (
        <center>
            <div>
                <h1>Select a Name</h1>
                <ul>
                    {names.map((name, index) => (
                        <li key={index} onMouseOver={() => setSelectedName(name)}>
                            {name}
                        </li>
                    ))}
                </ul>
                <p>Selected Name: {selectedName}</p>
                <p>Status: {message}</p>
            </div>
        </center>
    );
}

export default Render;
