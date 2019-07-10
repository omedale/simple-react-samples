import React,  { useEffect, useRef, useContext } from 'react'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  const toggleBtnRef =  useRef();
  const authContext = useContext(AuthContext)

  useEffect(() => {
    console.log('useEffect')
    toggleBtnRef.current.click()
    return () => {
      console.log('cockpit, cleanup with useeffect, it uns wen component destroys')
    }
  }, [props.persons])


  useEffect(() => {
    console.log(' 2nd  useEffect')
    return () => {
      console.log('2nd cockpit, cleanup with useeffect, it runs wen component destroys')
    }
  })

  let classes = ['red', 'bold'].join(' ')
  return (
   <div>
    <h1 className={classes}> {props.title}</h1>
    <button ref={toggleBtnRef} onClick={props.clicked}>TOGGLE persons</button>
      {<button onClick={authContext.login}>Login</button>}
   </div>
  )
}

export default React.memo(cockpit)