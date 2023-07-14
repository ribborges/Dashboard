import { CaretDownFill } from "react-bootstrap-icons";

interface useridProps {
    profileImage?: string,
    name?: string,
    occupation?: string
}

export default function Userid(props: useridProps) {
    return (
        <div className="userid">
            <img src={props.profileImage} alt="" />
            <div className="usertag">
                <h5>{props.name}</h5>
                <p>{props.occupation}</p>
            </div>
            <CaretDownFill />
        </div>
    );
}