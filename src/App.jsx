import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => setIsError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        <div>
          <div className="w-full flex justify-center items-center h-[45rem]">
            <TailSpin height={60} color="black" />
          </div>
        </div>
        ;
      </div>
    );
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-slate-300">
      <div className="w-screen block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
