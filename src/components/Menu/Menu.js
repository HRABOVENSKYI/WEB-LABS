import React from "react";
import Search from "./Search";
import Select from "./Select";
import AddButton from "./AddButton";
import ListingTitle from "./ListingTitle";

const Menu = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="grid gap-4 grid-cols-2">
        <div>
          <ListingTitle />
        </div>
        <div>
          <AddButton />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Select />
        </div>
      </div>
    </section>
  );
};

export default Menu;
