import React, { createRef } from "react";
// import MyComponent from "./importandExports/MyComponent";
// import Useref from "./UseRef/Useref";
// import Userefr from "./UseRef/UseRefr";
// import Eg01 from "./Usestate/usestate";
// import Learn from "./Usestate/learn";
// import Usestate2 from "./Usestate/usestate2";
// import Intial from "./UseReducer/intial";
// import UseReducer from "./UseReducer/UseReducer";

import { createFileName, useScreenshot } from "use-react-screenshot";
import './App.css'

const App = () => {
  const ref = createRef(null)

  const [image, takescreenshot] = useScreenshot({
    type:'image/jpeg',
    quality:1.0
  })

  const download =(image,{ name='sampleimage', extension = 'jpg'}= {})=>{
      const a = document.createElement('a')
      a.href = image;
      a.download = createFileName(extension,name)
      a.click()
  }

  const downloadscreenshot=() => {
    takescreenshot(ref.current).then(download)

  }

return( 
<div>

  <button onClick={downloadscreenshot}>Tak ScreenShot</button>
  <div ref={ref}  style={{border:'1px solid #ccc', background:'yellow', color:'black', padding:'10px', margin:'10px'}}>

  <h1> Hello World</h1>
  <p>This is Simple Paragraph</p>
  </div>
       
</div>
  )
};

export default App;
