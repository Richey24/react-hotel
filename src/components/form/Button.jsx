/**
 * @text the button text
 * @returns The JSX representation of the button used inside forms
 */
function Button({text}){
  return (
    <div>
      <button 
        className="border-primary-200 border-[3px] text-secondary-200 hover:bg-primary-200 hover:text-primary-100 w-full text-base text-center py-3 rounded-md" 
        type="submit"
      >{text}</button>
    </div>
  )
}
export default Button