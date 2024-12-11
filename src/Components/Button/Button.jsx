import './Button.css'

function Button(props) {
  return (
    <>
      <div>
        <a className='Button'>{props.text}</a>
      </div>
    </>
  )
}

export default Button