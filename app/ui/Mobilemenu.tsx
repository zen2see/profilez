import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navigationItems } from './Navbar'

export function Mobilemenu() {
  // make selected nav links active
  const location = usePathname()
  const [open, setOpen] = useState(false)

  // use Effect when location changes
  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <Menu className='h-4 w-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col mt-5 px-2 space-y-1'>
          {navigationItems.map((item, index) => (
            <Link
              className={cn(location === item.href ?
                'bg-muted': 'hover:bg-muted hover:bg-opacity-75',
                'group flex items-center px-2 py-2 text-md font-semibold rounded-md'
              )}
              key={index}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <SheetFooter className='mt-5'>
          <SheetClose asChild>
            <Button type='submit'>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}