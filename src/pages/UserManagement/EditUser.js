import { useParams } from "react-router-dom";

const EditUser = () =>{
const {userId} = useParams();

    return (
        <div>
            This is edit user page {userId}.
        </div>
    );
}
export default EditUser;