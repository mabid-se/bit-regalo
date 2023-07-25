// import { Link } from "react-router-dom";
import Link from "next/link";

export default function CreateNewButton(props) {
  const { buttonColor, buttonURL, buttonText } = props;

  return (
    <Link className={`btn btn-yellow btn-sm rounded-pill`} href={buttonURL}>
      {buttonText}
    </Link>
  );
}
