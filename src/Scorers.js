import React from "react";

// class Scorers extends React.Component {
//   render() {
//     return <div>BONJOUR</div>;
//   }
// }

function Scorers(props) {
  const namePlayers = props.scorers.map(function(player, index) {
    return (
      <div key={index}>
        {player.name}
        {index}
      </div>
    );
  });

  console.log(JSON.stringify(props.scorers));
  console.log(namePlayers);
  return <div>{namePlayers}</div>;
}

export default Scorers;
