import "server-only";
import React from "react";
import FooterLogo from "@/assets/icons/footer-logo";
import Link from "next/link";
import GithubIcon from "@/assets/icons/github";
import LinkedinIcon from "@/assets/icons/linked-in";

function Footer() {
  return (
    <div className="border-y border-primary border-opacity-10 w-full min-h-[25vh] h-full flex flex-col gap-4 text-white items-center justify-center">
      <FooterLogo width={175} height={46} />
      <h4>2024 © | Made by Mehmet Türkan</h4>
      <div className="flex items-center justify-center gap-4">
        <Link target={"_blank"} href={"https://github.com/mhtrkn"}>
          <GithubIcon width={24} height={24} />
        </Link>
        <Link target={"_blank"} href={"https://www.linkedin.com/in/mhtrkn/"}>
          <LinkedinIcon width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
