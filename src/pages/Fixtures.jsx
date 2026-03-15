import { useParams, Link } from "react-router-dom";
import { fixtures } from "../data/fixtures";

function Fixtures() {

  const { game } = useParams();
  const matches = fixtures[game];

  if (!matches) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">No Fixtures Found</h1>
        <Link to="/sports" className="text-blue-500">Back</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10 capitalize">
          {game} Fixtures
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {matches.map((match, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6"
            >

              <h2 className="text-lg font-semibold mb-4">
                Match {index + 1}
              </h2>

              {match.map((player, i) => (

                <div
                  key={i}
                  className="flex justify-between border-b py-2"
                >

                  <span>{player.name}</span>
                  <span className="text-gray-500">
                    {player.roll}
                  </span>

                </div>

              ))}

            </div>

          ))}

        </div>

        <div className="text-center mt-10">
          <Link
            to="/sports"
            className="text-indigo-600 font-semibold"
          >
            ← Back to Sports
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Fixtures;