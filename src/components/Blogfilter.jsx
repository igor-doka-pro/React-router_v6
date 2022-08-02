import React, { useState } from "react";

export const Blogfilter = ({postQuery, latest, setSearchParams}) => {
  const [search , setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSummit = (evt) => {
    evt.preventDefault();

    const query = evt.target.search.value;
    const isLatest = evt.target.latest.checked;

    const params = {}

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  }

  return (
    <form autoComplete="off" onSubmit={handleSummit}>
      <input type="search" name="search" value={search} onChange={(evt) => setSearch(evt.target.value)} />
      <label style={{ padding: "0 1rem" }}>
        <input type="checkbox" name="latest" checked={checked} onChange={(evt) => setChecked(evt.target.checked)} /> New Only
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};
