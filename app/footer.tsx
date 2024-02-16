import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFax } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center  mt-20 bg-yellow-400 h-16 mb-20">
        <div className="w-[70%] flex justify-between items-center">
          <div className="flex items-center">
            <IoIosSend className="size-11" />
            <h1 className="font-bold">
              {" "}
              Subscribe Newsletter And Get Disccount
            </h1>
          </div>
          <div className="flex">
            <input
              type="text"
              className="border-solid rounded-full h-7 p-4 text-xs w-80"
              placeholder=" Search Product"
            />
            <button className="text-white bg-black  rounded-full h-8 text-sm w-28 absolute ml-56 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-20  mb-10">
        <div className="w-[70%] flex justify-between border-b border-slate-200  ">
          <div className="flex flex-col">
            <h1 className="mb-5 text-2xl font-bold">Contact Us</h1>
            <div className="flex items-center mb-2 space-x-2">
              <CiHome className="size-7" />
              <div>
                <p>45 Grand crental New york ny</p>
                <p>1092 United States</p>
              </div>
            </div>
            <div className="flex items-center mb-3 space-x-2">
              <MdOutlineMail className="size-7" />
              <div>
                <p>Email:arlilazaj@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center mb-3 space-x-3">
              <FaPhoneAlt className="size-5 ml-1" />

              <p>Phone:355 453 2212 </p>
            </div>
            <div className="flex items-center mb-2 space-x-3">
              <MdOutlineFax className="size-6" />

              <p>Fax:355 453 2212 </p>
            </div>
            <div className="flex items-center mb-3 space-x-2">
              <FaRegCalendarAlt className="size-7" />
              <div>
                <p>Mon-Sat 9:00-5.00pm</p>
                <p>Sun:Closed</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Information</h1>
            <div className="space-y-3">
              <p>Contact</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Customer Service</p>
              <p>Frequently Questions</p>
              <p>Delivery Information</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4">My account</h1>
            <div className="space-y-3">
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Checkout</p>
              <p>Faq</p>
              <p>My account</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col w-72">
            <h1 className="text-2xl font-bold mb-4 ">Latest Tweets</h1>
            <div className="mb-4  self-center">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                quae ad exercitationem aliquid, repudiandae sequi error!
                Repellat cum eos illum assumenda asperiores amet fugit tempora,
              </p>
            </div>

            <p className="self-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mb-10">
        <div className="w-[70%] flex justify-between ">
          <div className="flex flex-col ">
            <p>Copyright &copy; 2019 All rights reserved </p>
            <div className="flex space-x-2 py-2">
              <FaFacebook />
              <FaInstagramSquare />
              <FaLinkedin />
              <FaSnapchatGhost />
            </div>
          </div>
          <div className="flex flex-col ">
            <p>Allow paynment base on </p>
            <div className="flex space-x-2 py-2">
              <FaCcPaypal className="size-8" />
              <FaCcMastercard className="size-8" />
              <FaCcVisa className="size-8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
