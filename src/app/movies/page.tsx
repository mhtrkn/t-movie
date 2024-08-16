"use client";

import { NextSeo } from "@/components/seo";
import { setLoaderModal } from "@/store/actions/loader";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function MoviesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderModal(false));
  }, []);

  return (
    <>
      <NextSeo title="T-Movie | Movies" />
      <div>MoviesPage</div>
    </>
  );
}

export default MoviesPage;
