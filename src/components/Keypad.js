

function Keypad(){
    function changeHandler(){
        console.log('Entering password...')
    }
    return (
        <input onChange={changeHandler} type="password" />
    )
}

export default Keypad;