"use client";

import { firebaseLoginUser } from "@/api/helpers";
import { Button } from "@/components/button";
import { ROUTES } from "@/routes";
import { setLoaderModal } from "@/store/actions/loader";
import { ReduxAuthProps } from "@/utils/type";
import { signOut } from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { setLoginSlices } from "@/store/actions/auth";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useSearchParams();
  const isAuth = useSelector((state: ReduxAuthProps) => state?.auth?.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await firebaseLoginUser({ email, password }).then(() => {
        dispatch(setLoginSlices());
        const callbackUrl = params.get("callbackUrl") || "";

        router.push(callbackUrl);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push(ROUTES.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(setLoaderModal(false));
  }, []);

  return (
    <div className="text-white mt-48 flex items-center justify-center">
      {isAuth ? (
        <Button onClick={handleLogout} apperance="outlined" type="submit">
          Logout
        </Button>
      ) : (
        <>
          <h1>Login</h1>
          <form
            className="flex flex-col items-start gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button apperance="outlined" type="submit">
              Register
            </Button>
          </form>
          {error && <p>{error}</p>}
          {user && <p>User created: {user.email}</p>}
        </>
      )}
    </div>
  );
}
