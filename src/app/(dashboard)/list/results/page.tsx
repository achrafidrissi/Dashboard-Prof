"use client"
import React, { useState } from "react";

const Page = () => {
  const [selectedSubject, setSelectedSubject] = useState("C++"); // État pour la matière sélectionnée
  const [message, setMessage] = useState({ type: "", text: "" }); // État pour le message de notification
  const [file, setFile] = useState<File | null>(null); // État pour stocker le fichier téléchargé

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  // Fonction pour gérer l'importation
  const handleImport = async (formType: string) => {
    if (!file) {
      setMessage({ type: "error", text: `Veuillez télécharger un fichier pour ${formType}.` });
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Ajouter le fichier à la requête

    let apiUrl = "";

    // Déterminer quelle API appeler selon le type de formulaire
    if (formType === "Formulaire Technique") {
      apiUrl = "http://localhost:8000/api/import_cpp"; // API pour formulaire technique
    } else if (formType === "Formulaires de Personnalité") {
      apiUrl = "http://localhost:8000/api/importpersonnality"; // API pour formulaire de personnalité
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Si la réponse de l'API est correcte
        setMessage({ type: "success", text: `Importation des résultats du ${formType} réussie.` });
      } else {
        // Si la réponse de l'API n'est pas correcte
        setMessage({ type: "error", text: `Échec de l'importation des résultats du ${formType}.` });
      }
    } catch (error) {
      // En cas d'erreur lors de la requête
      setMessage({ type: "error", text: `Erreur lors de l'importation des résultats du ${formType}.` });
    }

    // Réinitialiser le message après 5 secondes
    setTimeout(() => setMessage({ type: "", text: "" }), 5000);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Titre */}
      <h1 className="text-2xl font-bold mb-6 text-center lg:text-4xl">
        Importation des Résultats de Formulaires
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section Formulaire Technique */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Importation des Résultats Techniques</h2>

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
              <option value="Linux">Linux</option>
            </select>
          </div>

          {/* Champ d'upload pour fichier Excel */}
          <div className="mb-4">
            <label htmlFor="file" className="block font-medium">Télécharger le fichier Excel</label>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
              onClick={() => handleImport("Formulaire Technique")}
            >
              Importer Résultats Techniques
            </button>
          </div>
        </div>

        {/* Section Formulaires de Personnalité */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Importation des Résultats de Personnalité</h2>

          {/* Champ d'upload pour fichier Excel */}
          <div className="mb-4">
            <label htmlFor="file" className="block font-medium">Télécharger le fichier Excel</label>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={() => handleImport("Formulaires de Personnalité")}
            >
              Importer Résultats Personnalité
            </button>
          </div>
        </div>
      </div>

      {/* Section des messages de notification */}
      {message.text && (
        <div
          className={`mt-6 p-4 text-center rounded-lg ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default Page;
