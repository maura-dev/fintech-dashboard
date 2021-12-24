import {  Select, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../styles'

export default function SelectInput({children, label}) {
    const classes = useStyles()
    return (
        <div className={classes.inputField}>
            <Typography variant="p" className={classes.inputLabel}>{label}</Typography>
            <br/>
            <Select
            className={classes.input}
            variant="outlined"
            fullWidth
            //   value={age}
            //   onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            >
                {children}
            {/* <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
        </div>

    )
}
