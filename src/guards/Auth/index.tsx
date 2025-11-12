import { SpinnerFullScreen } from "@/components";
import { AuthService } from "@/services";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const AuthGuard = () => {

  const [userId, setUserId] = useState<string | null>(null);
  const {verify} = AuthService();

  const getUser = async () => {
    const resp = await verify();
    setUserId(resp);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (userId) ? <Outlet/> : <SpinnerFullScreen/>
}
