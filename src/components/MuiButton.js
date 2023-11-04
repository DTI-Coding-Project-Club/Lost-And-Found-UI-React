import React from 'react'
import { Button } from '@mui/material'

function MuiButton(props) {
    const { children, onClick } = props
    return (
        <div>
            <Button variant='contained' onClick={onClick ? onClick : () => alert("Button was clicked.")}>
                {children}
            </Button>
        </div>
    )
}

export default MuiButton
