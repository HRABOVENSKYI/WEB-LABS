import React from "react";

import succcessSvg from "../images/success.svg";
import Button from "../components/Button/Button";
import { useHistory } from "react-router-dom";

const Success = () => {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center">
      <img className="h-28 w-28 mt-16" src={succcessSvg} alt="" />
      <h2 className="text-center text-2xl font-semibold mt-4">Success!</h2>
      <p className="w-1/2 text-center">Your order was sent to processing!</p>
      <p className="w-1/2 text-center">
        Check your email box for further information.
      </p>
      <div className="my-16">
        <Button label="Back" onClick={() => history.push("/catalog")} />
      </div>
    </div>
  );
};

export default Success;
