import React from 'react'
import { RobotIcon } from './icons/robot-icon'

const Footer = () => {
  return (
    <footer className='border-t border-border bg-muted/30 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
                <RobotIcon className='w-6 h-6 text-primary' />
              </div>
              <span className='font-bold text-xl text-primary'>IRSO</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              المپیاد بین‌المللی علوم رباتیک
            </p>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>لینک‌های مهم</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  درباره ما
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  رقابت‌ها
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  قوانین
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  اخبار
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>منابع</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  راهنمای شرکت
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  سؤالات متداول
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  تماس با ما
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  حمایت مالی
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold mb-4'>دنبال کنید</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  اینستاگرام
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  لینکدین
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  توییتر
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-primary transition-colors'>
                  یوتیوب
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-border text-center text-sm text-muted-foreground'>
          <p>© ۲۰۲۵ المپیاد بین‌المللی علوم رباتیک. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
