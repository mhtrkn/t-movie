"use client";

import { setLoaderModal } from "@/store/actions/loader";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function MoviesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderModal(true));
  }, []);

  return (
    <div>MoviesPage</div>
  );
}

export default MoviesPage;
