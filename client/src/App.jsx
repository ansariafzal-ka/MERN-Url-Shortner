import React, { useState } from "react";
import UrlForm from "./components/UrlForm";
import UrlTable from "./components/UrlTable";

const App = () => {
  const [urls, setUrls] = useState([]); // Moved state here

  return (
    <main className="min-w-full min-h-screen flex justify-center items-center">
      <div className="border w-[600px] p-5 rounded">
        <h1 className="w-full p-3 mb-5 text-xl font-medium border-b">
          Url Shortener
        </h1>
        <UrlForm setUrls={setUrls} urls={urls} />
        <UrlTable urls={urls} setUrls={setUrls} />
      </div>
    </main>
  );
};

export default App;
