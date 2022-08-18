import { useFormik } from "formik";
import loginSchema from "../schemas/login.schema";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/auth.service";
import { authActions } from "../store/authentication.module";
import { useDispatch } from "react-redux";
import Button from "../components/form/Button";
import TextInput from "../components/form/TextInput";


export default function LoginPage() {
  const navigate = useNavigate(); //Stored reference of react router navigation hook
  const dispatch = useDispatch(); //Stored reference of redux dispatch service hook

  //destructed the values returned from the formik useFormik hook
  const { touched, errors, values, handleSubmit, handleBlur, handleChange } = useFormik({
      //Definition of the variables used inside the form form to store user inputed data
      initialValues: {
        email: "admin@gmail.com",
        password: "password123",
      },

      //The onSubmit property stores the function that should be called when the user submits the form
      onSubmit: ({ email, password }) => {
        //sends a request to the api to authenticate the users input
        signIn(email, password).then((res) => {
          if (res.status === 203) {
            console.log("Incorrect Password");
          } else if (res.data.role !== "Employee") {
            console.log("You are unauthorised to login to the admin page");
          } else {
            const { role, name, email, token } = res.data;
            localStorage.setItem("user", JSON.stringify({ role, name, email })); //sets the user information in local storage
            localStorage.setItem("token", token); //stores the token sent back from the api inside local storage
            dispatch(authActions.setLoggedInUser({ role, name, email }));
            navigate("/app/dashboard");// sends the user to the dashboard
          }
        });
      },

      //Stores the yup schema that Formik will use to validate the user input
      validationSchema: loginSchema,
    });
  
  //returns the JSX representation of login form
  return (
    <div className="flex justify-center items-center min-h-screen font-poppins bg-primary-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 w-[400px] p-8 mr-8 bg-white rounded-md shadow-md shadow-primary-100"
      >
        <div className="text-2xl text-center">
          <div className="bg-secondary-muted inline-block py-4 px-5 rounded-[50%]">
            <span className="icon text-2xl text-secondary-200">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <h2 className="mt-3 text-primary-500">Sign In</h2>
        </div>

        <TextInput 
          name="email" 
          label="Email" 
          value={values.email} 
          errors={ errors.email } 
          touched={ touched.email } 
          handleBlur={handleBlur} 
          handleChange={ handleChange } 
        />

        <TextInput 
          name="password" 
          label="Password" 
          value={values.password} 
          errors={ errors.password } 
          touched={ touched.password } 
          handleBlur={handleBlur} 
          handleChange={ handleChange } 
        />

        <hr className="bg-secondary-300"/>

        <Button text="Login"/>
      </form>
    </div>
  );
}
