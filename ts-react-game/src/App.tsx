import React from 'react';
import { GameComp } from './components/GameComp';


// const chesses: ChessType[] = [
//   ChessType.none,
//   ChessType.red,
//   ChessType.black,
//   ChessType.red,
//   ChessType.black,
//   ChessType.none,
//   ChessType.black,
//   ChessType.none,
//   ChessType.red,
// ]

export class App extends React.Component {
  render() {
    return (
      <div>
        <GameComp />
      </div>


    )
  }
}


// interface IState {
//   num: number
// }

// export class App extends React.Component<{}, IState> {
//   state: IState = {
//     num: 0
//   }

//   render() {
//     return (
//       <CountComp num={this.state.num} onChange={n => {
//         this.setState({
//           num: n
//         })
//       }} />
//     )
//   }
// }