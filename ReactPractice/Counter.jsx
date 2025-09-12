import react,{useState} from React;
function Counter(){
    const [number,setNumber]=useState(0)
    return(
    <div className="Counter">
        <h1>{number}</h1>
        <button>Increase</button>
        <button>Decrease</button>
    </div>
    );
}
export default Counter;