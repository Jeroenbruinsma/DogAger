import React from 'react'

export default function Dog(props) {
    // console.log("the props for the dog component are", props)
    const increaseAge = () => {
        console.log("hello?")
        props.dogGetsOlder(props.name)
        
    }
    return (
        <div>
          Hello {props.name} ({props.age})
          <button onClick={increaseAge}>has his/her birthday</button>
          
        </div>
    )
}
