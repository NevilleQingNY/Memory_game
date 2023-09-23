const Header = ({ turns, onShuffle }) => {
    return (
      <>
        <h1 className="header">Test Your Memory 🧠</h1>
        <button onClick={onShuffle}>New Game</button>
        <div>
          <p className="turns">Turns: {turns}/15</p>
        </div>
      </>
    );
  };
  
  export default Header;