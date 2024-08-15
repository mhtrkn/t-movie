"use client";

import NotFoundIcon from "@/assets/icons/404";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";

import { ROUTES } from "@/routes";
import { setLoaderModal } from "@/store/actions/loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headers } from "next/headers";

export default function NotFoundPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setLoaderModal(false));
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[120px]">
      <NotFoundIcon width={379} height={325} />
      <h2 className="text-center text-lg mb-20 text-white">
        We're sorry, but we couldn't find the content you're looking for.
        <br />
        You can return to the homepage by using the button below.
      </h2>
      <Button apperance="outlined" onClick={() => router.push(ROUTES.HOME)}>
        Home Page
      </Button>
    </div>
  );
}
