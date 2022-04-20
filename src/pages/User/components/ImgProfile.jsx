import { useEffect, useState } from "react";
import { Image } from "react-bootstrap"

export const ImgProfile = (props) => {

  const {user} = props
  
  const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png')

  useEffect(() => {
    if(!!user.images){
      setImageUrl(user.images?.[0] )
    }
  }, []);

  return (
    <>
      <Image {...props} rounded fluid src={imageUrl} alt="Image of user" />
    </>
  )
}