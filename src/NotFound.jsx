import notfound from "./images/notfound2.png"
import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
    <div className="bg-white flex flex-col h-100 py-24">
        <img className="w-96 m-auto brightness-125" src={notfound} alt="Not found" />
        <h1 className=" mx-auto text-3xl my-6">PAGE NOT FOUND !</h1>
        <Link className="mx-auto bg-green-500 py-2 px-4 text-white mb-4 rounded" to={"/"}>Back to home</Link>

    </div> );
}
 
export default NotFound;