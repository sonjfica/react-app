import React from 'react';

// Appクラスがコンポネントを継承して作成されている　クラスコンポーネント
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type='text' onChange={( console.log('clicked'))} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "hanako", age: 5 },
    { name: "Noname"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  ) 
}

const User = (props) => {
  return <div>Hi , I am {props.name}! and {props.age} years</div>
}
User.defaultProps = {
  age: 1
}

export default App;
