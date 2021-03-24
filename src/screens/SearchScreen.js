import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, searchApi, errorMsg, setErrorMsg] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChanged={setTerm}
        onTermSubmit={() => {
          setErrorMsg("");
          searchApi(term);
        }}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title={"Cost Effective"}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title={"Bit Pricier"}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title={"Big Spender"}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
