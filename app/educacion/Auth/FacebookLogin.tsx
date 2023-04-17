'use client'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export const FacebookLoginButton = () => {



  const responseFacebook = async (resp:any) => {
    // const res = await facebookAutenticacion(resp);
    // if(!res.ok) setNotificacion({message:res.mensaje, type: 1})
  }

  return (
    <FacebookLogin
      appId="2308936362602133"
      autoLoad={false}
      fields="name,email,picture"
      //   onClick={componentClicked}
      callback={responseFacebook}
      render={(renderProps:any) => (
        <button
          type="button"
          onClick={renderProps.onClick}
          className="flex w-1/2 items-center justify-center gap-x-2 bg-cyan-100/30 py-2"
        >
          <img src="https://img.icons8.com/color/24/000000/facebook-new.png" />
          Facebook
        </button>
      )} 
    />
  )
}
