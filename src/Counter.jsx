import React from "react";


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0};
    }

    handleClick = (arg)=>{
        if(arg === "inc"){
            this.setState((prev)=>({count:prev.count+1}));
        }
        if(arg === "dec"){
            this.setState((prev)=>({count:prev.count-1}));
        }
    };

    render(){
        return <div>
            <h1>Counter App</h1>
            <p>Count: {this.state.count}</p>
            <div>
                <button onClick={()=> this.handleClick("inc")}>Increment</button>
                <button onClick={()=>this.handleClick("dec")}>Decrement</button>
            </div>
        </div>
    }
}

export default Counter;