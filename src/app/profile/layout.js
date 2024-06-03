import React from 'react'


export default  function layout({ children }) {
    
    return (
        <div>
            <p>This is profile header</p>
            {children}
            <p>This is profile footer</p>
        </div>
    )
}
