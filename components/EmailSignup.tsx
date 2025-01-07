"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function EmailSignup() {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const [isEmailExists, setIsEmailExists] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = async (value) => {
    const { email } = value;
    setIsLoading(true);
    setIsEmailExists(false);
    setErrorMessage("");

    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "/api/subscribe" // Production URL
        : "http://localhost:3000/api/subscribe"; // Development URL

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      console.log("Response:", response.status, data);

      if (response.status === 201 || response.status === 200) {
        setIsSignupSuccessful(true);
      } else if (response.status === 409) {
        setIsEmailExists(true);
      } else {
        setErrorMessage(
          data.message || "Failed to subscribe. Please try again."
        );
        console.error("Error response:", data);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setErrorMessage("Failed to connect. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = () => {
    if (isEmailExists) {
      setIsEmailExists(false);
    }
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="w-full lg:mx-10 lg:w-fit h-fit">
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="flex relative justify-center items-center rounded-md">
            <input
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className="pl-2 w-full h-10 rounded-md md:pl-4"
              type="email"
              placeholder="your@email.com"
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="p-2 ml-3 text-lg font-thin text-white bg-pink-400 rounded-md transition duration-100 lg:mt-0 lg:ml-3 hover:scale-105 md:text-xl"
              disabled={isSignupSuccessful || isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
      {errors.email && (
        <p className={`mt-2 text-xl font-normal tracking-widest text-red-500`}>
          {errors.email.type === "required" && "This field is required."}
          {errors.email.type === "pattern" && "Invalid email address."}
        </p>
      )}
      {isEmailExists && (
        <div className="mt-2 text-xl font-normal tracking-widest text-red-500">
          Email already exists!
        </div>
      )}
      {errorMessage && (
        <div className="mt-2 text-xl font-normal tracking-widest text-red-500">
          {errorMessage}
        </div>
      )}
      {isSignupSuccessful && (
        <div className="mt-2 text-xl font-normal tracking-widest text-green-500">
          Email Sign-up successful!
        </div>
      )}
    </div>
  );
}
