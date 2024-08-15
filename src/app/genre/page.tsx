"use client";

import { setLoaderModal } from "@/store/actions/loader";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function GenrePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderModal(false));
  }, []);

  return <div>GenrePage</div>;
}

export default GenrePage;
