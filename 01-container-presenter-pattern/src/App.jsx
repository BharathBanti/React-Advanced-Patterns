// Container Presenter Pattern or Smart-Dumb component pattern

import UserProfile from "./without-pattern/UserProfile";
import UserProfileContainer from "./with-pattern/containers/UserProfileContainer";

function App() {
  return (
    <>
      {/* <UserProfile /> */}
      <UserProfileContainer/>
    </>
  );
}

export default App;
