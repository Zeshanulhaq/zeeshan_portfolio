import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social  border-l border-gray-color pl-4">
      <div>
        <a href="https://github.com/Zeshanulhaq" target="_blank">
          <BsGithub className="dark:hover:text-white" />
        </a>
      </div>
      <div>
        <a href="/">
          <BsTwitter className="dark:hover:text-white" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/zeshan-ul-haq/ " target="_blank">
          <BsLinkedin className="dark:hover:text-white" />
        </a>
      </div>
      <div>
        <a href="mailto:zeshanulhaq1655@gmail.com" target="_blank">
          <MdEmail className="dark:hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
