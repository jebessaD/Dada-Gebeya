import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
    return ( 
    <div className="flex items-center justify-center h-screen">
    <BarLoader className="grid h-screen place-items-center"
        color={"#0BDA51"}
        loading={true}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  </div> );
  }
   
  export default Loading;