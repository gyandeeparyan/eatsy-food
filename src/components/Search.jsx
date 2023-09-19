import React  from 'react';
import { Filter, FilterIcon } from 'lucide-react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
function SearchInput({ searchText, setSearchText, handleSearch , openModal}) {

  const filterCount = useSelector((store) => store.filter.filterCount);

  return (
    <>
    
    <div className='flex justify-around w-full mt-2 mb-9 items-center space-x-2  md:w-1/3 ml-1 md:mx-auto '>
      <input
        className='flex h-10 w-3/4 rounded-3xl shadow-xl dark:bg-stone-800  dark:text-brand-beige border-neutral-400 bg-transparent px-3 py-2 text-sm dark:placeholder:text-brand-beige placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
        type='text'
        placeholder='Search'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch();
        }}
      />

      <div className='flex cursor-pointer mr-2 ' onClick={openModal}>
      <span className="bg-red-500 px-2 mr-1  rounded-full  text-white"> {filterCount}</span>
      <FilterIcon color='grey'/>
      </div>
    </div>
    
   
    
    </>
    
  );
}

export default SearchInput;
