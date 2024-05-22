import {create} from "zustand";


// Zustand store creation.
const useStore = create((set) => ({
  teamA: 0,
  teamB: 0,
  increaseTeamAScore: () => set((state) => ({ teamA: state.teamA + 1 })),
  decreaseTeamAScore: () => set((state) => ({ teamA: state.teamA - 1 })),
  increaseTeamBScore: () => set((state) => ({ teamB: state.teamB + 1 })),
  decreaseTeamBScore: () => set((state) => ({ teamB: state.teamB - 1 })),
}));

// Winner Component that shows the final results.
const Winner = () => {
  const scoreA = useStore((state) => state.teamA);
  const scoreB = useStore((state) => state.teamB);
  return (
    <div >
      <h1 >Winner</h1>
      <h4 >
        {scoreA === scoreB ? "DRAW" : scoreA > scoreB ? "TEAM A" : "TEAM B"}
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
      <button  onClick={onDecrease}>
        -
      </button>
      <button  onClick={onIncrease}>
        +
      </button>
    </div>
  </div>
);

// Player A Components that subscribed the Context.
const PlayerA = () => {
  const score = useStore((state) => state.teamA);
  const increaseTeamAScore = useStore((state) => state.increaseTeamAScore);
  const decreaseTeamAScore = useStore((state) => state.decreaseTeamAScore);
  return (
    <Player
      label={"Team A"}
      score={score}
      onIncrease={increaseTeamAScore}
      onDecrease={decreaseTeamAScore}
    />
  );
};

// Player B Components that subscribed the Context.
const PlayerB = () => {
  const score = useStore((state) => state.teamB);
  const increaseTeamAScore = useStore((state) => state.increaseTeamBScore);
  const decreaseTeamAScore = useStore((state) => state.decreaseTeamBScore);
  return (
    <Player
      label={"Team B"}
      score={score}
      onIncrease={increaseTeamAScore}
      onDecrease={decreaseTeamAScore}
    />
  );
};

// Player B Components that subscribed the Context.
const Players = () => {
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

export default function ZustandComponent() {
  return (
    <div >
      <main >
        <Winner />
        <Players />
      </main>
    </div>
  );
}
