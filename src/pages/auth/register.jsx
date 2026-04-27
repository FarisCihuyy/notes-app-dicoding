import React, { useState } from "react";
import { register } from "../../services/auth";
import Card from "../../components/Card";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useLoading } from "../../components/hooks/useLoading";

const Register = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    showLoading();
    e.preventDefault();
    try {
      const res = await register({ ...formData });

      if (res.error) {
        alert(res.message);
        return;
      }

      alert(res.message);
      navigate("/login");
    } finally {
      hideLoading();
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <Card>
        <header className="flex flex-col items-center">
          <h1 className="font-bold text-2xl uppercase">sign up</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet</p>
        </header>

        <form onSubmit={handleSubmit} className="w-full min-w-86 space-y-4">
          <div className="flex flex-col">
            <Label title="Name" required />

            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="border"
            />
          </div>
          <div className="flex flex-col">
            <Label title="Email" required />

            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border"
            />
          </div>

          <div className="flex flex-col">
            <Label title="Password" required />
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="*******"
              className="border"
            />
          </div>
          <Button label="Sign up" type="submit" className="w-full mt-4" />
        </form>
        <span className="w-full text-center text-xs">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 underliner">
            Login
          </Link>
        </span>
      </Card>
    </section>
  );
};

export default Register;
