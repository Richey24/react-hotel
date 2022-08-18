/**
 * @value the value of the date picker  
 * @handleChange the callback to handle the change event on the input
 * @handleBlur the callback to handle the blur event on the input
 * @errors the errors that come from the formik when the input fields are invalid
 * @touched the errors that come from formik when the touched event fires
 * @name the name used on the input and label
 * @label the text that is displayed in the label
 * @returns The JSX representation of the date picker input
 */
function DateInput({ value, handleChange, handleBlur, errors, touched, name, label }){
  return (
    <div className="w-full">
      <label className={`text-sm ${errors && touched ? "text-red-500" : "text-primary-500"}`} htmlFor={name}>{label}</label>
      <br />
      <input
        name={name}
        value={value}
        type="date"
        onBlur={handleBlur}
        onChange={handleChange}
        className={`bg-primary-muted py-2 pl-2 w-full border-b-2 outline-none ${errors && touched ? "border-red-500" : "border-primary-100"}`}
      ></input>
      {errors && touched ? <p className="text-red-500 text-sm font-light italic"> {errors} </p> : ""}
    </div>
  )
}

export default DateInput