"use client"

import React, { useEffect } from 'react'
import PlayingModal from '../../../components/playing/index';
import { useDispatch } from 'react-redux';
import { setLoaderModal } from '@/store/actions/loader';

function PlayingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderModal(false));
  }, []);

  return (
    <PlayingModal />
  )
}

export default PlayingPage