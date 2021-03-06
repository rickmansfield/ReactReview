//The example below uses rfce snipit in vs code
import React from 'react'

function functionalComponent() {
    return (
        <div>
            
        </div>
    )
}

export default functionalComponent

// this example uses vanilla rfc
import React from 'react'

export default function functionalComponent() {
    return (
        <div>
            
        </div>
    )
}

//this example uses rafc (React Arrow Function Component) that templates a functional component without the functino keyword and with the fat arrow
import React from 'react'

export const functionalComponent = () => {
    return (
        <div>
            
        </div>
    )
}


//this example uses rfcredux
import React from 'react'
export const functionalComponent = (props) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(functionalComponent)




