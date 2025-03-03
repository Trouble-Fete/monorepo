import axios from "axios";
import { useEffect, useState } from "react";

interface Serie {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Programs() {
  const [programs, setPrograms] = useState<Serie[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3310/api/programs").then((response) => {
      setPrograms(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Liste des Séries</h2>
      <ul>
        {programs.map((serie) => (
          <li key={serie.id}>
            <h3>
              {serie.title} ({serie.year})
            </h3>
            <img src={serie.poster} alt={serie.title} />
            <p>
              <strong>Pays:</strong> {serie.country}
            </p>
            <p>
              <strong>Synopsis:</strong> {serie.synopsis}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
