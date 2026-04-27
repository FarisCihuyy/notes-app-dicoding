import React, { useState } from "react";
import Card from "../../components/Card";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { login } from "../../services/auth";

const Login = () => {
  const [formData, setFormData] = useState({
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
    e.preventDefault();
    const res = await login({ ...formData });

    if (res.error) {
      alert(res.message);
      return;
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <Card>
        <header className="flex flex-col items-center">
          <h1 className="font-bold text-2xl uppercase">Login</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet</p>
        </header>

        <form onSubmit={handleSubmit} className="w-full min-w-72 space-y-4">
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
          <Button label="Login" type="submit" className="w-full mt-4" />
        </form>
      </Card>
    </section>
  );
};

export default Login;
