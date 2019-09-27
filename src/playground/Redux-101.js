import {createStore} from "redux";

const incrementCount=({incrementBy=1}={})=>({
    type: "INCREMENT",
    incrementBy
});

const decrementCount=({decrementBy=1}={})=>({
    type: "DECREMENT",
    decrementBy
});

const reset=()=>({
    type: "RESET"
});

const setCount=({count=0}={})=>({
    type: "SET",
    count
})

const countReducer=(state={count: 0},action)=>{
    switch(action.type){
        case "INCREMENT":
            const incrementBy=typeof (action.incrementBy)==='number' ? action.incrementBy: 1;
            return {
                count: state.count +incrementBy
            }
        case "DECREMENT":
            const decrementBy=typeof action.decrementBy==='number' ? action.decrementBy: 1;
            return {
                count: state.count -decrementBy
            }
        case "SET":
            return{
                count: action.count
            }
        case "RESET":
            return{
                count: 0
            }
        default:
            return state;
    }
}

const store=createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy:10}));

store.dispatch(incrementCount());


store.dispatch(decrementCount({decrementBy: 5}))


store.dispatch(reset())

store.dispatch(setCount({count:101}));

