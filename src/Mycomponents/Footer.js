import React from 'react'

const Footer = () => {
  let footerstyle ={
    position : "relative",
    top :"125vh",
    width : "100%",
    border : "2px solid red"
  }
  return (
    <footer className=' bg-dark text-light' style={footerstyle}>
      <p className='text-center my-5'>
      <h3>Copyright &copy; MyTodosList.com
</h3>
      </p>
    </footer>
  )
} 

export default Footer
