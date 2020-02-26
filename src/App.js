import React, {useState} from 'react';
import './App.css';
import Dog from './components/Dog';

function App() {

  const listOfDogs = [
      {name: "Zeytin", age: 12  },
      {name: "Libby", age: 14  }
  ]

  const [dogList, setDoglist] = useState(listOfDogs);


  const dogGetsOlder = (name) => {
    console.log("dogGetsOlder", name)
    const newDogList = dogList.map(dog => {
      if(name === dog.name){
        dog.age = dog.age + 1;
      }
      return dog
    })
    console.log("new doglist", newDogList)
    setDoglist(newDogList)
    
  }
  console.log("what is my dogList", dogList)
  return (
    <div className="App">
      <header className="App-header">
        {dogList.map(dogInfo => {
          return <Dog name={dogInfo.name} age={dogInfo.age}  dogGetsOlder={dogGetsOlder}/>
        })  }
      </header>
    </div>
  );
}

export default App;
