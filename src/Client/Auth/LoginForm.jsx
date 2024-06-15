import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("userData ", userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
              className=" bg-[#662D92] w-full text-white"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0", backgroundColor: "#662D92" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className=" flex justify-center flex-col items-center">
        <div className=" py-3 flex items-center">
          <p>Don't have an account ? </p>
          <Button
            onClick={() => navigate("/register")}
            size="small"
            sx={{ mt: "5px", ml: "5px" }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
