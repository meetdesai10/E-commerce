import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthRouter({ Component }) {
  let login = JSON.parse(localStorage.getItem("login"));
  let navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/*");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
}
