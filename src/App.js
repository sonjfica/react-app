import React from 'react';
import PropTypes from 'prop-types';

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
    { name: "noname", age: 3},
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
