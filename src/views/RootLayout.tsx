import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/common/Header";

const RootLayout: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <main className="main-content py-4">
        <div className="container">
          {navigation.state === "loading" && <p>Loading...</p>}
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default RootLayout;
