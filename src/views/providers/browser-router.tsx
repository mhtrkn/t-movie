"use-client";

import { useDispatch, useSelector } from "react-redux";
import TopToScroll from "../scroll-top";
import { ReduxLoaderProps, ReduxModalProps } from "@/utils/type";
import Modal from "@/components/modal";
import LoaderModal from "@/components/loader";
import { useEffect } from "react";
import { auth } from "@/app/firebase";
import { setLoginSlices, setLogoutSlices } from "@/store/actions/auth";

function BrowserRouter({ children }: { children: React.ReactNode }) {
  const loading = useSelector((state: ReduxLoaderProps) => state?.loader?.open);
  const showModal = useSelector((state: ReduxModalProps) => state?.modal?.open);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setLoginSlices());
      } else {
        dispatch(setLogoutSlices());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      {loading && <LoaderModal />}
      {showModal && <Modal />}
      {children}
      <TopToScroll />
    </>
  );
}

export default BrowserRouter;
