import React, { FormEvent } from "react";
import { useState } from "react";
import Search from "./Search";
import CharityList from "./CharityList";
import Header from "./Header";

const apiKey = "pk_live_a3676b9cf7a43e56d90f4f562f4bea7b";
const searchUri = "https://partners.every.org/v0.2/search/"

function Home() {
  const [searchTerms, setSearchTerms] = useState("");
  const [charities, setCharities] = useState<Charity[]>([]);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = (e.target as HTMLFormElement).search.value;
    console.log(searchTerm);

    fetch(searchUri + searchTerm + "?apiKey=" + apiKey)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        return Promise.reject('404');
      }
    })
    .then((actualData) => {
      let records: Charity[] = [];

      for (const item of actualData["nonprofits"]) {
        //console.log(item);
        const charityRecord = {
          ein: item["ein"],
          name: item["name"],
          description: item["description"],
          logoUrl: "",
          location: item["location"],
          profileUrl: item["profileUrl"],
        }

        records.push(charityRecord);
      }

      setCharities(records)


    })
    .catch((err) => {
      // Fade in error message
      const errorDiv = document.getElementById('error');
      if (errorDiv != null) {
        setErrorMessage("The DOI is incorrect.")
        errorDiv.classList.remove('opacity-0');
        errorDiv.classList.add('opacity-100');
      }
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Search onSearch={handleSearch} />
      <CharityList charities={charities} />
    </div>
  )
}

export default Home
function setErrorMessage(arg0: string) {
  throw new Error("Function not implemented.");
}

