import React, { FormEvent, useState, useEffect  } from "react";
import SearchBar from "./SearchBar";
import CharityList from "./CharityList";
import Header from "./Header";
import axios from 'axios';

const apiKey = "pk_live_a3676b9cf7a43e56d90f4f562f4bea7b";
const searchUri = "https://partners.every.org/v0.2/search/"

function Home() {
  const [charities, setCharities] = useState<Charity[]>([]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => {
        setOffset(window.scrollY);
      }

      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = (e.target as HTMLFormElement).search.value;

    try {
      const data = await axios.get(searchUri + searchTerm + "?apiKey=" + apiKey);

      let records: Charity[] = [];

      for (const item of data.data.nonprofits) {
        const charityRecord = {
          ein: item["ein"],
          name: item["name"],
          description: item["description"],
          location: item["location"],
          profileUrl: item["profileUrl"],
        }
        records.push(charityRecord);
      }

      setCharities(records)
      
      console.log(data);

    }
    catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="w-full grow flex flex-col">
        <SearchBar onSearch={handleSearch} scrollOffset={offset} />
        <CharityList charities={charities} />
      </div>
    </div>
  )
}

export default Home
