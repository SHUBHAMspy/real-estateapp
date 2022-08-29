import React from 'react'
import Banner from '../components/banner/Banner'
import PropertyList from '../components/propertyList/PropertyList'
import SearchBar from '../components/searchBar/SearchBar'

const Home = () => {
  return (
    <>
      <Banner/>
      <SearchBar/>
      <PropertyList/>
      
    </>
  )
}

export default Home