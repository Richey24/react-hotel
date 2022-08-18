/**
 * @value the value of the select input 
 * @handleBlur the callback to handle the change event on the select input
 * @handleBlur the callback to handle the blur event on the select input
 * @errors the errors that come from the formik when the input fields are invalid
 * @touched the errors that come from formik when the touched event fires
 * @name the name used on the select input and label
 * @label the text that is displayed in the label
 * @returns The JSX representation of the select input
 */
function SelectInput({ label, name, value, items, handleChange, touched, errors }){
  return (
    <div className="w-full" >
      <label className={`text-sm ${errors && touched ? "text-red-500" : "text-primary-500"}`} htmlFor="description">{label}</label>
      <br />
      <select
        name={ name }
        value={ value }
        onChange={ handleChange }
        className={ `bg-primary-muted py-3 pl-1 w-full border-b-2 outline-none ${errors && touched ? "border-red-500" : "border-primary-100"}` }
      >
        <option className="hidden"></option>
        { items.map(({ text, value }, index) => <option value={value} key={index}>{ text }</option>) }
      </select>
      {errors && touched ? <p className="text-red-500 text-sm font-light italic"> {errors} </p> : ""}
    </div>
  )
}

export default SelectInput