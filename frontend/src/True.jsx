import React from 'react';

function True() {
  const [myFavirateThings, setMyFavirateThings] = React.useState([]);

  const allFavirateThings = ["one piece", "naruto", "aot", "king of morine"];

  const ThingsElement = myFavirateThings.map(thing => <p key={thing}>{thing}</p>);

  function addFavirateThings() {
    setMyFavirateThings(prevfavthings => [
      ...prevfavthings,
      allFavirateThings[prevfavthings.length]
    ]);
  }

  return (
    <div>
      <main>
        <button onClick={addFavirateThings}>my one</button>
        <section aria-live="polite">{ThingsElement}</section>
      </main>
    </div>
  );
}

export default True;