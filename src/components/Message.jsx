import { useState } from "react";
import { Button } from "react-bootstrap";
const Message = ({ phrase }) => {
  const [secretMsg, setSecretMsg] = useState("");
  return (
    <>
      <h1 className="display-1 mb-5">
        Hello {phrase}
        {secretMsg}!
      </h1>
      <Button onClick={() => setSecretMsg(" (from changed state)")}>
        Shhh its a secret
      </Button>
    </>
  );
};

export default Message;
