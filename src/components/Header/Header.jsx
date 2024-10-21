import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Contact Us",
      slug: "/contact-us",
      active: authStatus,
    },
  ];

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="mt-5 rounded-3xl bg-gray-400 w-full max-w-7xl">
        <header className="py-3 shadow rounded-3xl">
          <Container>
            <nav className="flex flex-row ">
              <div className="pl-0 md:pl-6">
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <ul className="flex flex-row  ml-auto space-y-2 sm:space-y-0 sm:space-x-4">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className="block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            </nav>
          </Container>
        </header>
      </div>
    </div>
  );
}

export default Header;
