
import Avatar from "../Avatar/Avatar";
import GitApiData from "../Hooks/CustomHooks";

function Search(){

    //custom hooks created for clean code experence
    const {gitdata,inputHandler}=GitApiData()

    return (
        <>
            <div className="inputbox">
                <input type="text" name="username" id="username" onChange={inputHandler} placeholder="Enter git username" />
                
            </div>
            <h1>GitHub API</h1>
            <Avatar data={gitdata} />
        </>
    );
}

export default Search;
