import "../styles/login.css";
import { useFormik } from "formik";
import loginSchema from "../validation_schemas/login.schema";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/auth.service";
import { authActions } from "../store/authentication.module";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { touched, errors, values, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        email: "admin@gmail.com",
        password: "password123",
      },

      onSubmit: ({ email, password }) => {
        signIn(email, password).then((res) => {
          if(res.status === 203){
            console.log("Incorrect Password")
          }else if(res.data.role !== "Employee") {
            console.log("You are unauthorised to login to the admin page")
          } else {
            const { role, name, email } = res.data
            localStorage.setItem("user", JSON.stringify({ role, name, email }))
            dispatch(authActions.setLoggedInUser({ role, name, email }))
            navigate("/app/dashboard")
          }
        }
        );
      },
      validationSchema: loginSchema,
    });
  return (
    <div className="page_content login_content">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Sign In</h2>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email ? (
            <p className="error"> {errors.email} </p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password ? (
            <p className="error"> {errors.password} </p>
          ) : (
            ""
          )}
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
