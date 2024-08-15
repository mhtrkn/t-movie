"use client";

import { setLoaderModal } from '@/store/actions/loader';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

function GenreDetailPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setLoaderModal(false));
  }, []);

  return (
    <div>GenreDetailPage</div>
  )
}

export default GenreDetailPage