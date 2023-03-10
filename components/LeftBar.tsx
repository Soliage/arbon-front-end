import { FC } from 'react'
import styles from '../styles/Home.module.css'
import React from 'react';
import IconButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';


interface Props {
    view,
    setViewFn: (page) => void
}
export const LeftBar = ({
    view,
    setViewFn
}: Props ):JSX.Element => {
    return (
        <div className={styles.LeftBar}>
            <Button variant="contained" color={view == "main"? "secondary" : "primary"}   
                onClick={() => {
                    setViewFn("main")
            }}>+</Button>

            <Button style={{marginTop: "2vh"}} variant="contained" color= {view == "steward"? "secondary" : "primary"}
                onClick={() => {
                    setViewFn("steward")
            }}>+</Button>

            {/* <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize='large'/>
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon fontSize='large' />
            </IconButton> */}
        </div>
    )
}