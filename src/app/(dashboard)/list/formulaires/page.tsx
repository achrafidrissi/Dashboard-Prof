"use client"
import React, { useState } from "react";

// Objet contenant les liens pour chaque matière et test de personnalité
const formLinks: Record<string, string> = {
  "C++": "https://docs.google.com/forms/d/1SR6AHq7kF2dlakC60wwYP3maaRp5AQYJWsUU0176a18/",
  "Bdd": "https://docs.google.com/forms/d/1usoHRNnRTiWZO2X9FSPZnPGV8i190QP1y1SVdiaWvXU/",
  "Personnalité 1": "https://docs.google.com/forms/d/1maCIiC4xHKtGDxoc6rtBgjM1HSvMLT4zCAhEX2_JV1o/",
  "Personnalité 2": "https://docs.google.com/forms/d/1maCIiC4xHKtGDxoc6rtBgjM1HSvMLT4zCAhEX2_JV1o/",
  "Personnalité 3": "https://docs.google.com/forms/d/1maCIiC4xHKtGDxoc6rtBgjM1HSvMLT4zCAhEX2_JV1o",
};

const Page = () => {
  const [selectedSubject, setSelectedSubject] = useState("C++"); // État pour la matière sélectionnée

  const handleFormGeneration = () => {
    const link = formLinks[selectedSubject]; // Obtenir le lien basé sur la sélection
    if (link) {
      window.open(link, "_blank"); // Ouvrir le lien dans un nouvel onglet
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Titre */}
      <h1 className="text-2xl font-bold mb-6 text-center lg:text-4xl">
        Génération de Formulaires
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section Formulaire Technique */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Formulaire Technique</h2>

          <div className="mb-4">
            <label htmlFor="subject" className="block font-medium">
              Sélectionner la matière
            </label>
            {/* Liste déroulante pour choisir la matière */}
            <select
              id="subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="C++">C++</option>
              <option value="Bdd">Base de données</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={handleFormGeneration}
            >
              Générer Formulaire Technique
            </button>
          </div>
        </div>

        {/* Section Formulaires de Personnalité */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Formulaires de Personnalité</h2>

          <div className="grid grid-cols-1 gap-4">
            {/* Formulaire Personnalité 1 */}
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none"
              onClick={() => window.open(formLinks["Personnalité 1"], "_blank")}
            >
              Formulaire Personnalité Type 1
            </button>

            {/* Formulaire Personnalité 2 */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
              onClick={() => window.open(formLinks["Personnalité 2"], "_blank")}
            >
              Formulaire Personnalité Type 2
            </button>

            {/* Formulaire Personnalité 3 */}
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none"
              onClick={() => window.open(formLinks["Personnalité 3"], "_blank")}
            >
              Formulaire Personnalité Type 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;