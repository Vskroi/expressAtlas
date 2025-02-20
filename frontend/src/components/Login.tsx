"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";



export const Login = () => {
  const [formValue, setFormValue] = useState<Login>({
    email: "",
    password: "",
  });


  const [errors, setErrors] = useState<{ [key in keyof Login]?: string }>({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    let nextStep = true;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
    if (!formValue.email || formValue.email.length === 0) {
      setErrors((prev) => ({
        ...prev,
        email: "Мэйл хаягаа оруулна уу",
      }));
      nextStep = false;
    } else if (!checkEmail.test(formValue.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Зөв мэйл хаяг оруулна уу.",
      }));
      nextStep = false;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (!formValue.password || formValue.password.length === 0) {
      setErrors((prev) => ({
        ...prev,
        password: "Нууц үгээ оруулна уу.",
      }));
      nextStep = false;
    } else if (formValue.password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "6 оронтой тоо оруулна уу.",
      }));
      nextStep = false;
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    if (nextStep) {
      console.log("Form Submitted!");
    }
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, email: e.target.value });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, password: e.target.value });
  };

  return (
    <div className="w-full">
      <div>
        <Button className="bg-white hover:bg-white w-18 text-black">
          <ArrowLeft stroke="black" />
        </Button>
        <h1>Log in</h1>
        <p>Log in to enjoy your favorite dishes.</p>

        <Input
          id="email"
          onChange={onEmailChange}
          type="email"
          value={formValue.email}
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <Input
          id="password"
          onChange={onPasswordChange}
          type="password"
          value={formValue.password}
          placeholder="Enter your password"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        <Button
          onClick={onSubmit}
          className="h-11 w-[280px] px-3 py-2.5 bg-[#121316] rounded-md justify-center items-center gap-1 inline-flex text-[#FFF]"
        >
          Log in
        </Button>
      </div>
    </div>
  );
};
