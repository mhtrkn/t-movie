import { setLoaderModal } from "@/store/actions/loader";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoaderModal(false));
  }, []);
  return <div>ProfilePage</div>;
}

export default ProfilePage;
