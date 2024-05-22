import React ,{Fragment} from 'react'
import ContextComponent from "./context-page"
import ZustandComponent from "./zustand-page"


const CombinedContextZustand = () =>{

    return <Fragment>
        <h1>Context Starts</h1>
        <ContextComponent/>
        <h1>Context Ends</h1>
        <h1>----------------------------------------</h1>
        <h1>Zustand starts</h1>
        <ZustandComponent/>
        <h1>----------------------------------------</h1>
        
    </Fragment>
}

export default CombinedContextZustand;