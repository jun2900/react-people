import React from "react";
import "./App.css";
// const List = () => {
//   const people = [
//     {
//       name: "John Doe"
//     },
//     {
//       name: "Mike Miller"
//     },
//     {
//       name: "Jane"
//     }
//   ];
//   return (
//     <>
//       <h1>React People!</h1>
//       <ul>
//         {/* {people.map(person => <li>{person.name}</li>)} */}
//         {people.map(person => (
//           <li key={person.name}>{person.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const UserInfo = (props) => {
//   return <>
//     <p>Username: {props.username}</p>
//     <p>Active: {props.active}</p>
//   </>
// }



// const List = props => {
//   return (
//     <>
//       <h1>React People!</h1>
//       <ul className="list">
//         {props.data.sort(sortByPower).map((person) => (
//           <li key={person.name} className="list-item">
//             <div className="list-item-image-container">
//               <img src={person.thumbnail} alt="telur" />
//             </div>
//             <span className="list-item-name">
//               {person.name} (Power:{' '}
//               <span className="list-item-power">{person.power}</span>)
//             </span>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

const sortByPower = (a, b) => {
  return b.power - a.power;
}

const List = ({ data }) => {
  return (
    <>
      <ul className='list'>
        {
          data.sort(sortByPower).map(user => {
            return <li key={user.name} className='list-item'>
              <div className="list-item-image-container">
                <img src={`https://robohash.org/${user.id}?set=set1`} />
              </div>
              <span className="list-item-name">
                {user.name} ( Power:{` `}
                <span className="list-item-power">{user.email}</span>)
              </span>
            </li>
          })
        }
      </ul>
    </>
  )
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      human: [
        {
          name: 'Kuririn',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
          power: 10
        },
        {
          name: 'Bulma',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
          power: 3
        },
        {
          name: 'Chi-chi',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
          power: 30
        }
      ],
      users: [],
      searchString: ``
    }
  }

  async componentDidMount() {
    const response = await fetch('/users');
    const json = await response.json();
    this.setState({ users: json })
  }

  render() {
    return (
      <>
        <div className="App">
          <List data={this.state.users} />
        </div>
      </>
    );
  }
}


export default App;
