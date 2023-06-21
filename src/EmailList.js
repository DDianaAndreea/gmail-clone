import React, { useEffect, useState } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';
import { collection, getDocs, query, orderBy  } from "@firebase/firestore";
import { selectSendMessageIsOpen} from './features/mailSlice'

export default function EmailList() {
  const [emails, setEmails] = useState([]);

    const fetchEmails = async ()=>{
        const q = query(collection(db, 'emails'), orderBy('timestamp','desc'));
        const documentSnapshots = await getDocs(q);
        const mails= documentSnapshots.docs.map((doc) => ({
            id:doc.id ,
            ...doc.data()
        }));
        console.log('emails:',mails)
        setEmails(mails);
      }

  useEffect(()=>{
    fetchEmails()
  },[])

  return (
    <div className='emailList'>
        <div className='emailList_settings'>
            <div className='"emailList_settingsLeft'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='emailList_settingsRight'>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>
        <div className='emailList_sections'>
           <Section Icon={InboxIcon} title='Primary' color='red' selected />
           <Section Icon={PeopleIcon} title='Social' color='blue'  />
           <Section Icon={LocalOfferIcon} title='Promotions' color='green'  />

        </div>
        <div className='emailList_list'>
            {emails.map(({id,to, subject,message, timestamp})=>{
                return(
                <EmailRow 
                key={id}
                title={to}
                subject={subject}
                description={message}
                time={new Date(timestamp.seconds*1000).toUTCString()}
            
            />)
            })}


    
        </div>
    </div>
  );
}
