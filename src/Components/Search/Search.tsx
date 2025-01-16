import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchrequest,
  fetchrequestfailed,
  fetchsearchdata,
  fetchspecificuser,
  fetchsuccess,
  setcurrentpage,
  seterror,
  setsearchoption,
  setsortingoption,
  specificuserOpen,
} from "../../Redux/Action";
import { AppDispatch } from "../../Redux/Store";
import { RootState } from "../../Redux/Store"; 
import { UserData } from "../../Redux/datatype";
import FullUserDetails from "../FullDetailUser/FullUserDetails";

const Search = () => {
 
  const dispatch = useDispatch<AppDispatch>();
  const {
    user,
    isLoading,
    isError,
    error,
    currentPage,
    selectVal,
    searchVal,
    SearchData,
    isOpen
  } = useSelector((state: RootState) => state.user);
  const fetchuserdata = async () => {
    try {
      dispatch(fetchrequest());
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_sort=${selectVal}&_page=${currentPage}&_limit=4`
      );
      dispatch(fetchsuccess(response.data));
    } catch (error) {
      dispatch(fetchrequestfailed());
      dispatch(seterror("Internal server error"));
    }
  };

  const fetchsearchuser = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_sort=${selectVal}`
      );
      dispatch(fetchsearchdata(response.data));
    } catch (error) {
      dispatch(seterror("Internal server error"));
    }
  };

  useEffect(() => {
    fetchuserdata();
    fetchsearchuser();
  }, [currentPage, selectVal, dispatch]);

  const handlePageChange = (page: number) => {
    dispatch(setcurrentpage(page));
  };

  const handleSelectVal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortVal = e.target.value;
    dispatch(setsortingoption(sortVal));
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    dispatch(setsearchoption(inputVal));
  };
  const userList = Array.isArray(SearchData)
    ? SearchData.filter((user: UserData) =>
        user.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    : [];

    const handleFullDetails=async(id:number)=>{
   
   try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch(specificuserOpen(true))
    dispatch(fetchspecificuser(response.data))
   } catch (error) {
      dispatch(seterror("Internal Server Error"))
   }
    }

 
  

    if (isLoading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-xl font-semibold text-gray-600">Loading...</h1>
        </div>
      );
    }
    
    if (isError) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-xl font-semibold text-red-600">{error}</h1>
        </div>
      );
    };
  return (
    <main className="min-h-screen">
      <div className="flex justify-around items-center mt-10">
        <div className=" w-1/2 shadow-lg">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full p-1 border-2 border-gray-500 rounded-md"
            onChange={handleSearchInput}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="select">Sort by Name:</label>
          <select
            id="select"
            className="flex justify-center items-center"
            onChange={handleSelectVal}
          >
            <option value="">Select</option>
            <option value="name">A-Z</option>
            <option value="">Z-A</option>
          </select>
        </div>
      </div>
      {<div className="grid grid-cols-2 w-full m-auto p-5 gap-4 text-xl">
        <>
          {searchVal.length > 0
            ? Array.isArray(userList) &&
              userList.map((data: UserData, index) => (
                <div
                  className="border-2 border-red-100 p-3 shadow-lg"
                  key={index}
                >
                  <p>
                    <b>Name :</b> {data.name}
                  </p>
                  <p>
                    <b>Email :</b>
                    {data.email}
                  </p>
                  <p>
                    <b>City :</b> {data.address.city}
                  </p>
                </div>
              ))
            : Array.isArray(user) &&
              user.length !== 0 &&
              user.map((data: UserData, index) => (
                <div
                  className="border-2 border-red-100 p-3 shadow-lg"
                  key={index}
                  onClick={()=>handleFullDetails(data.id)}
                >
                  <p>
                    <b>Name :</b> {data.name}
                  </p>
                  <p>
                    <b>Email :</b>
                    {data.email}
                  </p>
                  <p>
                    <b>City :</b> {data.address.city}
                  </p>
                </div>
              ))
              
              }
        </>
      
      </div>}
     {isOpen===true && <FullUserDetails />}
      <div className="flex justify-around items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="border-2 border-gray-500 rounded-md p-1 font-bold bg-gray-200 shadow-md"
        >
          Previous
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="border-2 border-gray-500 p-1 rounded-md font-bold bg-gray-200 shadow-md"
          disabled={Array.isArray(user) && user.length === 0}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Search;
