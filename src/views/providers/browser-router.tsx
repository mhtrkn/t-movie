"use-client";

import LoaderModal from "@/components/loader";
import { useSelector } from "react-redux";
import TopToScroll from "../scroll-top";
import { ReduxLoaderProps, ReduxModalProps } from "@/utils/type";
import Modal from "@/components/modal";

function BrowserRouter({ children }: { children: React.ReactNode }) {
  const loading = useSelector((state: ReduxLoaderProps) => state?.loader?.open);
  const showModal = useSelector((state: ReduxModalProps) => state?.modal?.open);

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
