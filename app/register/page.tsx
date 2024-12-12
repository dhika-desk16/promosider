"use client";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [isEmailButtonHidden, setIsChangeRegister] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        formData,
      );
      console.log(response.data);
    } catch (error) {
      const err = error as any;
      console.error("Error:", err.response?.data || err.message);
    }
  };

  const handleGithubLogin = async () => {
    window.location.href = "http://localhost:8000/api/login/github";
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/api/login/google";
  };
  const handleEmailClick = () => {
    setIsChangeRegister((prevState) => !prevState);
  };

  return (
    <div className="h-screen content-center">
      <div className="grid h-full grid-cols-2">
        <div className="content-center bg-slate-950"></div>
        <div className="grid-rows-[0.5fr,2fr] content-center p-20">
          <div className="grid grid-cols-2">
            <div>
              {isEmailButtonHidden && (
                <button
                  onClick={handleEmailClick}
                  type="button"
                  className="mb-2 me-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-[#3b5998]/90 focus:outline-none focus:ring-4 focus:ring-[#3b5998]/50 dark:focus:ring-[#3b5998]/55"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m6.523 12.5l3.735 3.735q.146.146.153.344q.006.198-.153.363q-.166.166-.357.168t-.357-.162l-4.382-4.383q-.243-.242-.243-.565t.243-.566l4.382-4.382q.147-.146.347-.153q.201-.007.367.159q.16.165.162.353q.003.189-.162.354L6.523 11.5h12.38q.214 0 .358.143t.143.357t-.143.357t-.357.143z"
                    />
                  </svg>
                  Back
                </button>
              )}
            </div>
            <div></div>
          </div>
          {!isEmailButtonHidden && (
            <div>
              <div className="text-3xl font-bold tracking-widest">
                Buat akun baru
              </div>
              <div className="text-lg">
                Sudah mempunyai akun ?{" "}
                <a
                  href=""
                  target="_blank"
                  className="underline underline-offset-auto"
                >
                  masuk
                </a>
              </div>
              <div className="mt-8">
                <Button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="mb-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-1 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ms-1 me-2 h-5 w-6"
                    viewBox="0 0 256 262"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    />
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    />
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                    />
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    />
                  </svg>
                  Continue with Google
                </Button>
                <Button
                  onClick={handleEmailClick}
                  type="button"
                  className="inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-1 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ms-1 me-2 h-5 w-6"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M1 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 1h13v.925a.45.45 0 0 0-.241.07L7.5 7.967L1.241 3.995A.45.45 0 0 0 1 3.925zm0 1.908V12h13V4.908L7.741 8.88a.45.45 0 0 1-.482 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Continue with Email
                </Button>
              </div>
              <div className="my-4">
                <p className="text-center align-middle font-bold uppercase opacity-50">
                  OR
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  onClick={handleGithubLogin}
                  type="button"
                  className="mb-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-1 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    className="me-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Github
                </Button>
                <Button
                  onClick={handleGithubLogin}
                  type="button"
                  className="mb-2 inline-flex w-full items-center rounded-lg border border-gray-200 bg-white px-5 py-1 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    className="me-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          )}
          {isEmailButtonHidden && (
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4 "
            >
              <div>
                <Label
                  htmlFor="name"
                  className="mb-2 block"
                  value="Your Name"
                />
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Your Email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="password" className="mb-2 block">
                  Your Password
                </Label>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="password_confirmation" className="mb-2 block">
                  Confirm Password
                </Label>
                <TextInput
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <Button color="success" type="submit">
                Register
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
