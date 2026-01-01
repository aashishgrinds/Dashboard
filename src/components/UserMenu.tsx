import Avatar from 'react-avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx';
import { PlusIcon } from 'lucide-react';
import { APP_SIDEBAR } from '../index.ts';
import { useState } from 'react';

export const UserMenu = () => {
  const [selectedEmail, setSelectedEmail] = useState(
    APP_SIDEBAR.curProfile.email,
  );
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='w-full flex justify-center p-2 focus:outline-none'>
          <div className='relative'>
            <Avatar
              src={APP_SIDEBAR.curProfile.src}
              size='36'
              round='8px'
            />
            <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-400 ring-sidebar ring-1' />
          </div>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent
        side='top'
        align='start'
        className='w-60'
      >
        <DropdownMenuGroup>
          {APP_SIDEBAR.userMenu.itemsPrimary.map((item) => (
            <DropdownMenuItem key={item.title}>
              <item.Icon />
              <span>{item.title}</span>
              {item.kbd && (
                <DropdownMenuShortcut>{item.kbd}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        
        <DropdownMenuSeparator className='my-1' />
        
        <DropdownMenuLabel className='px-2 py-1.5 text-sm font-semibold'>
          Switch account
        </DropdownMenuLabel>
        
        <DropdownMenuRadioGroupz
          value={selectedEmail}
          onValueChange={setSelectedEmail}
        >
          {APP_SIDEBAR.allProfiles.map((profile) => (
            <DropdownMenuRadioItem
              key={profile.email}
              value={profile.email}
            >
              <div className='grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-2'>
                <div className='relative'>
                  <Avatar
                    src={profile.src}
                    size='36'
                    round='8px'
                  />
                  <div className='absolute bottom-0 right-0 size-2 rounded-full bg-emerald-400 ring-sidebar ring-1' />
                </div>
                <div>
                  <h3 className='text-sm font-semibold'>{profile.name}</h3>
                  <p className='text-sm text-muted-foreground truncate'>
                    {profile.email}
                  </p>
                </div>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        
        <DropdownMenuItem asChild className='mt-1'>
          <Button
            variant='outline'
            size='sm'
            className='w-full'
          >
            <PlusIcon />
            <span>Add account</span>
          </Button>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className='my-1' />
        
        <DropdownMenuGroup>
          {APP_SIDEBAR.userMenu.itemsSecondary.map((item) => (
            <DropdownMenuItem key={item.title}>
              <item.Icon />
              <span>{item.title}</span>
              {item.kbd && (
                <DropdownMenuShortcut>{item.kbd}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};