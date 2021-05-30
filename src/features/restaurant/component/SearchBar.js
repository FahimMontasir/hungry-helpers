import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/locations/locations.context";
import { SearchContainer } from "../screens/RestaurantScreen.style";

const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="search now"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
export default SearchBar;
