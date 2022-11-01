import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [totalVotes, setTotalVotes] = useState(0);
  const [chocolateVotes, setChocolatesVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);
  return (
    <section className="Votes">
      <h2>Vote Here</h2>
      <div className="vote-btn-container">
        <button
          onClick={() => {
            setTotalVotes((prev) => prev + 1);
            setChocolatesVotes((prev) => prev + 1);
          }}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setTotalVotes((prev) => prev + 1);
            setVanillaVotes((prev) => prev + 1);
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setTotalVotes((prev) => prev + 1);
            setStrawberryVotes((prev) => prev + 1);
          }}
        >
          Strawberry
        </button>
      </div>
      <div className="vote-graph-container">
        <p id="no-votes" className={`${totalVotes > 0 ? "disappear" : ""}`}>
          No votes yet
        </p>
        <div
          className={`chocolate-container${chocolateVotes > 0 ? "block" : ""}`}
        >
          <p>
            Chocolate: {chocolateVotes}{" "}
            {`(${((chocolateVotes / totalVotes) * 100).toFixed(1)} %)`}
          </p>
          <div className="flavor-graph">
            <div
              id="chocolate-graph"
              style={{
                width: `${((chocolateVotes / totalVotes) * 100).toFixed(1)}%`,
              }}
            ></div>
          </div>
        </div>
        <div className={`vanilla-container${vanillaVotes > 0 ? "block" : ""}`}>
          <p>
            Vanilla: {vanillaVotes}{" "}
            {`(${((vanillaVotes / totalVotes) * 100).toFixed(1)} %)`}
          </p>
          <div className="flavor-graph">
            <div
              id="vanilla-graph"
              style={{
                width: `${((vanillaVotes / totalVotes) * 100).toFixed(1)}%`,
              }}
            ></div>
          </div>
        </div>
        <div
          className={`strawberry-container${
            strawberryVotes > 0 ? "block" : ""
          }`}
        >
          <p>
            Strawberry: {strawberryVotes}{" "}
            {`(${((strawberryVotes / totalVotes) * 100).toFixed(1)} %)`}
          </p>
          <div className="flavor-graph">
            <div
              id="strawberry-graph"
              style={{
                width: `${((strawberryVotes / totalVotes) * 100).toFixed(1)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Votes;
