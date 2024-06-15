import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("userData ", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className=" bg-[#662D92] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", backgroundColor: "#662D92" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className=" flex justify-center flex-col items-center">
        <div className=" py-3 flex items-center">
          <p>Already have an account ? </p>
          <Button
            onClick={() => navigate("/login")}
            size="small"
            sx={{ mt: "5px", ml: "5px" }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
