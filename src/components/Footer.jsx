import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <footer className="h-20  bg-slate-900 w-full flex-row  justify-center">
      <div className=" flex justify-center h-12 m-auto gap-4 pt-3 text-2xl text-slate-50">
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
        <BsGithub />
      </div>
      <div className=" m-auto h-8 justify-center flex  text-slate-50 font-sans">
        <p>@ 2022 All Rigths Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
