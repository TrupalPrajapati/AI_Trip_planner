import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from '../button'
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader
} from "@/components/ui/dialog"
import axios from 'axios';


function Header () {

  const user=JSON.parse(localStorage.getItem('user'));

  const [openDailog, setOpenDialog] = useState(false);

  useEffect(()=>{
    console.log(user);
  }, [])

  const login = useGoogleLogin({
        onSuccess: (codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error)
  });
  const GetUserProfile = (tokenInfo) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
          headers: {
              Authorization: `Bearer ${tokenInfo?.access_token}`,
              Accept: 'Application/json'
          }
      }).then((resp) => {
          console.log(resp);
          localStorage.setItem('user', JSON.stringify(resp.data));
          setOpenDialog(false);
          window.location.reload();
      });
  };
  return (
    <div className='w-full p-3 shadow-sm flex justify-between items-center px-5'>
        <img src='/logo.svg' />
        
        <div>
          {user?
            <div className='flex items-center gap-3'>
               <a href="/create-trip">
              <Button variant="outline" className="rouded-full border">+ Create Trip</Button>
              </a>
              <a href="/my-trips">
              <Button variant="outline" className="rouded-full border">My Trips</Button>
              </a>
              <Popover>
                <PopoverTrigger>
                  <img src={user.picture} className="rounded-full h-[35px] w-[35px]"/>
                </PopoverTrigger>
                <PopoverContent><h2 className='cursor-pointer' onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>Logout</h2></PopoverContent>
              </Popover>


            </div>
            :
            <Button onClick={()=>{setOpenDialog(true)}}>Sign In</Button>
          }
          
        </div>
        <Dialog open={openDailog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <img src='/logo.svg' />
                                <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
                                <p>Sign in to the app with Google Authentication securely</p>
                                <Button onClick={login} className="w-full mt-5 flex gap-3 items-center">
                                    <FcGoogle className='h-6 w-6' />Sign In With Google
                                </Button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
    </div>
  )
}

export default Header