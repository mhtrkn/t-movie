"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoaderModal } from "@/store/actions/loader";

export function RouteListener() {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [changes, setChanges] = useState(0);

  useEffect(() => {
    dispatch(setLoaderModal(true));
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}
