import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'
import { RobotIcon } from './icons/robot-icon'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
            <RobotIcon className='w-6 h-6 text-primary' />
          </div>
          <span className='font-bold text-xl text-primary'>IRSO</span>
        </div>
        <div className='hidden md:flex items-center gap-6'>
          <a
            href='#about'
            className='text-sm hover:text-primary transition-colors'
          >
            درباره ما
          </a>
          <a
            href='#categories'
            className='text-sm hover:text-primary transition-colors'
          >
            رقابت‌ها
          </a>
          <a
            href='#process'
            className='text-sm hover:text-primary transition-colors'
          >
            نحوه شرکت
          </a>
          <a
            href='#sponsors'
            className='text-sm hover:text-primary transition-colors'
          >
            حمایت‌کنندگان
          </a>
        </div>
        <Button>تماس با ما</Button>
      </div>
    </nav>
  )
}

export default Navbar
