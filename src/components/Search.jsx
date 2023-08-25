import React  from 'react';

function SearchInput({ searchText, setSearchText, handleSearch }) {



  return (
    <>
    
    <div className='flex w-full mt-2 mb-9 items-center space-x-2 md:w-1/3 ml-3 md:mx-auto '>
      <input
        className='flex h-10 w-3/4 rounded-3xl   border-4 border-red-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
        type='text'
        placeholder='Search'
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch();
        }}
      />
    </div>
    </>
    
  );
}

export default SearchInput;
