import React from 'react';
import'./EmailRow.css';
import { Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useNavigate } from 'react-router-dom'

export default function EmailRow( {id, title, subject, description, time}) {
  const navigate= useNavigate()

    return (
    <div onClick={()=>navigate('/mail')} className='emailRow'>
        <div className='emailRow_options'>
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>

        <h3 className='emailRow_title'>{title}</h3>

        <div className='emailRow_message'>
            <h4>
                {subject}{" "}
                <span className='emailRow_description'>
                    - {description}
                </span>
            </h4>
        </div>
        <p className='emailRow_time'>{time}</p>
    </div>
  )
}
