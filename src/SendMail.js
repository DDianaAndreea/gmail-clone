import React from 'react';
import './SendMail.css';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import{ useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

export default function SendMail() {
  const {register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) =>{
    console.log(formData)
  }
  return (
    <div className='sendMail'>
        <div className='sendMail_header'>
            <h3>New Message</h3>
            <CloseIcon onClick={()=>dispatch(closeSendMessage())} className='sendMail_close' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                name='to' 
                placeholder='To' 
                type='email' 
                {...register('to', { required: true })}
                />
            {errors.to && <p className='sendMail_errors'>'To is Required!'</p>}
            <input 
                name='subject' 
                placeholder='Subject' 
                type='text' 
                {...register('subject', { required: true })}
            />
            {errors.subject && <p className='sendMail_errors'>'Subject is Required!'</p>}
            <input 
                name='message' 
                placeholder='Message...' 
                className='sendMail_message' 
                type='text' 
                {...register('message', { required: true })}
            />
            {errors.message && <p className='sendMail_errors'>'Message is Required!'</p>}

            <div className='sendMail_options'>
                <Button 
                className='sendMail_send'
                variant='contained'
                color='primary'
                type='submit'>
                    Send
                </Button>
            </div>
        </form>
    </div>
  )
}
