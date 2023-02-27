import Feed from "./components/Feed";
import Header from "./components/Header";
import Cover from "./components/Cover";
import { useState } from "react";

function App() {
  const [isJoined, setIsJoined] = useState(false);
  const [isLoggin, setIsLoggin] = useState(false);

  const handleIsJoined = (isJoined) => {
    setIsJoined(!isJoined);
  };

  const handleIsLoggin = (isLoggin) => {
    setIsLoggin(!isLoggin);
  };


  return (
    <div>
      <Header
        joined={isJoined}
        handleIsJoined={handleIsJoined}
        isLoggin={isLoggin}
        setIsLoggin={handleIsLoggin}
      />
      <Cover />
      <Feed
        joined={isJoined}
        handleIsJoined={handleIsJoined}
        isLoggin={isLoggin}
        setIsLoggin={handleIsLoggin}
      />
    </div>
  );
}

export default App;
