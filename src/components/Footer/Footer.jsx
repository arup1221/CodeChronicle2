import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <div>
      <section className="relative overflow-hidden py-10 bg-gray-400  ">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap justify-center">
            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
              <div className="flex h-full flex-col justify-between">
                <div className="mt-14 inline-flex items-center">
                  <Logo width="200px" />
                </div>
              </div>
            </div>
            <div className="grid grid-col-1  md:grid-cols-3 justify-center">
              <div className="w-full p-6 md:w-1/2 lg:w-2/12 ">
                <div className="h-full ">
                  <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                    Company
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Features
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Affiliate Program
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                <div className="h-full">
                  <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                    Support
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Account
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Help
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Review
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                <div className="h-full">
                  <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                    Legals
                  </h3>
                  <ul>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                        to="/"
                      >
                        Licensing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div className="flex justify-center m-2">
        <p className="text-md text-gray-600">
          &copy; Copyright 2023. All Rights Reserved by Code Chronicle.
        </p>
      </div>
    </div>
  );
}

export default Footer;
