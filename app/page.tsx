"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../app/components/navigation/navbar";
import BeforeLogin from "../app/components/pages/BeforeLogin";
import AfterLogin from "../app/components/pages/AfterLogin";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    console.log("Checking login status...");

    // Check login status
    axios
      .get("http://localhost:8000/api/check-login", { withCredentials: true })
      .then((response) => {
        console.log("Login successful:", response.data); // Log response data
        setIsAuthenticated(true);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Login failed:", error); // Log any errors
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <main>
      <Navbar />
      <div className="container">
        {isAuthenticated ? <AfterLogin user={user} /> : <BeforeLogin />}
      </div>
    </main>
  );
}
