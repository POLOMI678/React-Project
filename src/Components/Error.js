import { useRouteError } from "react-router-dom"

const Error = () => {
    let error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <h1><i>Ooops...!!! Something went wrong.</i></h1>
            <h4>{error.status}: {error.statusText}</h4>
            <h5>{error.data}</h5>
        </div>
    )
}

export default Error;