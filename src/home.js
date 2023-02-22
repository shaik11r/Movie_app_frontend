import React from "react";
import Movies from "./Movies";
import SearchForm from "./SearchForm";
function Home() {
  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
}

export default Home;
