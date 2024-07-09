 'use client'

import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// import { ThemeToggle } from '@/app/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Mobilemenu } from './Mobilemenu'

export const navigationItems = [
  // {
  //   name: 'Home',
  //   href: '/'
  // },
  {
    name: 'Guestbook',
    href: '/guestbook'
  },
  {
    name: 'Projects',
    href: '/projects'
  }
]
export function Navbar() {
  // make selected nav links active
  const pathname = usePathname()
  return (
    <nav className='grid grid-cols-12 px-4 md:px-8 py-5 shadow-2xl no-wrap'>
      <div className='col-span-6 md:col-span-3'>
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>
            F <span className='text-blue-500'>LastName</span>
          </h1>
        </Link>
      </div>
      <div className='hidden sm:flex col-span-2 md:col-span-6 justify-center items-center '>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={navigationMenuTriggerStyle()} 
                    active={pathname === item.href}
                  >
                    <div className='text-xl font-bold'>{item.name}</div>
                    
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> 
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='flex items-center justify-end col-span-4 md:col-span-3'>
        <Button className='mr-4'>Contact me</Button>
        {/* <ThemeToggle /> */}
        <div className='sm:hidden'>
          <Mobilemenu />
        </div>
      </div>
    </nav>
  )
}
