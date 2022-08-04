import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import peopleData from "./data";
import Card from "./components/Card";
import Worker from "./components/Worker";

function App() {
  const [workers, setWorkers] = useState([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lastIndex = workers.length - 1;
    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, workers]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  async function fetchPerson() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "55124000ccmshc595b69e5203666p10ff32jsn5d8f9fe02e2d",
        "X-RapidAPI-Host": "random-user.p.rapidapi.com",
      },
    };
    try {
      for (let i = 0; i < 5; i++) {
        if (error) {
          break;
        }
        const response = await fetch(
          "https://random-user.p.rapidapi.com/getuser",
          options
        );
        const data = await response.json();
        setWorkers((prev) => [...prev, data.results[0]]);
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setWorkers(peopleData);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPerson();
  }, []);
  function changePosition(elIndex) {
    let position = "nextSlide";
    if (elIndex === index) {
      position = "activeSlide";
    }
    if (
      elIndex === index - 1 ||
      (index === 0 && elIndex === workers.length - 1)
    ) {
      position = "lastIndex";
    }
    return position;
  }
  if (loading) {
    return (
      <div className="section">
        <div className="title">
          <h2>
            <span>/</span> Loading...
          </h2>
        </div>
      </div>
    );
  }
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span> Reviews
        </h2>
      </div>
      <div className="section-center">
        {error
          ? workers.map((el, elIndex) => (
              <Card
                key={el.id}
                element={el}
                position={changePosition(elIndex)}
              />
            ))
          : workers.map((el, elIndex) => (
              <Worker
                key={el.id.value + elIndex}
                element={el}
                position={changePosition(elIndex)}
              />
            ))}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
