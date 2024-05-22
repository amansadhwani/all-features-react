import StoreContextProvider, {
    useStoreContext,
  } from "./store-context";

  
  // Winner Component that shows the final results.
  const Winner = () => {
    const { teamA, teamB } = useStoreContext();
    return (
      <div >
        <h1 >Winner</h1>
        <h4 >
          {teamA === teamB ? "DRAW" : teamA > teamB ? "TEAM A" : "TEAM B"}
        </h4>
      </div>
    );
  };
  
  // Reusable player component that render Players details and actions.
  const Player = ({ label, score, onIncrease, onDecrease }) => (
    <div >
      <h3 >{label}</h3>
      <h4 > {score} </h4>
  
      <div >
        <button onClick={onDecrease}>
          -
        </button>
        <button onClick={onIncrease}>
          +
        </button>
      </div>
    </div>
  );
  
  // Player A Components that subscribed the Context.
  const PlayerA = () => {
    const { teamA, increaseTeamAScore, decreaseTeamAScore } = useStoreContext();
  
    return (
      <Player
        label={"Team A"}
        score={teamA}
        onIncrease={increaseTeamAScore}
        onDecrease={decreaseTeamAScore}
      />
    );
  };
  
  // Player B Components that subscribed the Context.
  const PlayerB = () => {
    const { teamB, increaseTeamBScore, decreaseTeamBScore } = useStoreContext();
  
    return (
      <Player
        label={"Team B"}
        score={teamB}
        onIncrease={increaseTeamBScore}
        onDecrease={decreaseTeamBScore}
      />
    );
  };
  
  // Players component will contains all active player components
  const Players = () => {
    console.log("players");
    return (
      <div >
        <h3 >Players</h3>
        <div >
          <PlayerA />
          <PlayerB />
        </div>
      </div>
    );
  };
  
  export default function ContextComponent() {
    return (
      <div >
        <main>
          <StoreContextProvider>
            <Winner />
            <Players />
          </StoreContextProvider>
        </main>
      </div>
    );
  }
  