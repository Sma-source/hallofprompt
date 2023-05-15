"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]); // state posts to store data prompts
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Recheche un tag ou un nom d'utilisateur"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
    </section>
  );
};

export default Feed;
