/**
 * @value the value of the text input
 * @handleChange the callback to handle the change event on the input
 * @handleBlur the callback to handle the blur event on the input
 * @errors the errors that come from the formik when the input fields are invalid
 * @touched the errors that come from formik when the touched event fires
 * @name the name used on the text input and label
 * @label the text that is displayed in the label
 * @returns The JSX representation of the text input
 */
function TextInput({ label, name, value, errors, touched, handleBlur, handleChange }){
  return (
    <div className="w-full">
      <label className={`text-sm ${errors && touched ? "text-red-500" : "text-primary-500"}`} htmlFor={ name }>{ label }</label>
      <br />
      <input
        name={ name }
        type={ name }
        value={ value }
        onChange={ handleChange }
        onBlur={ handleBlur }
        className={ `bg-primary-muted border-b-2 pl-2 py-2 w-full outline-none ${errors && touched ? "border-red-500" : "border-primary-100"}` }
      />
      {errors && touched ? <p className="text-red-500 text-sm font-light italic"> {errors} </p> : ""}
    </div>
  )
}

export default TextInput;