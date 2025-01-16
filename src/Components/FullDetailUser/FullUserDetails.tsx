import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../Redux/Store";
import {  useDispatch, useSelector } from "react-redux";
import { specificuserOpen } from "../../Redux/Action";




const FullUserDetails = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {SpecificUser,isOpen} = useSelector((state: RootState) => state.user);
   

    const handleClose=()=>{

      dispatch(specificuserOpen(false))
   
    }
   

    const isUserDataValid = SpecificUser && 'name' in SpecificUser && 'email' in SpecificUser;
    
  return (
    <>
 <div className={`${isOpen===true ? "block" : "hidden"} w-2/6 absolute top-28 left-80 bg-zinc-100`}>
  {isUserDataValid && SpecificUser ? (
    <div className="border-2 border-red-100 p-10 shadow-lg flex flex-col gap-5">
      <p>
        <b>Name :</b> {SpecificUser.name}
      </p>
      <p>
        <b>Email :</b> {SpecificUser.email}
      </p>
      <p>
        <b>City :</b> {SpecificUser.address.city}
      </p>
      <p>
        <b>Phone :</b> {SpecificUser.phone}
      </p>
      <p>
        <b>Company :</b> {SpecificUser.company.name}
      </p>
      <p>
        <b>Website :</b> <Link to="/website" target="_blank" className="underline text-blue-800">{SpecificUser.website}</Link>
      </p>
      <div className="flex justify-end p-2">
          <button className="pl-3 pr-3 pt-1 pb-1.5 rounded-md font-bold bg-gray-900 shadow-xl mr-9 text-white" onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : (
    <p>No user details available.</p>
  )}
</div>
</>
  )
}

export default FullUserDetails
