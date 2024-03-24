import { useParams } from "react-router-dom";

const DeleteUser = () => {
const {userId} = useParams();

    return (
        <div>
            This is delete user page {userId}.
        </div>
    );
}
export default DeleteUser; 