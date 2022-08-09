import "../styles/login.css"
import { useFormik } from "formik"
import loginSchema from "../validation_schemas/login.schema"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){
  const navigate = useNavigate();

  const { touched, errors, values, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },

    onSubmit: () => { 
      navigate("/app/dashboard")
     },
    validationSchema: loginSchema
  })
  return (
    <div className="page_content login_content">
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h2>Sign In</h2>
        </div>
        
        <div>
          <label htmlFor="username">Username</label>
          <br/>
          <input
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={ errors.username && touched.username ? "input-error" : "" }
          />
          { errors.username && touched.username ? <p className="error"> { errors.username } </p> : ""}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br/>
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={ errors.password && touched.password ? "input-error" : ""}
          />
          { errors.password && touched.password ? <p className="error"> { errors.password } </p> : ""}
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}