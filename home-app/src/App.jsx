import React, { lazy, Suspense } from "react";
import "./App.css";

const Header = lazy(() => import("HeaderApp/Header"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="container">Demo home page</div>
    </div>
  );
}

export default App;
