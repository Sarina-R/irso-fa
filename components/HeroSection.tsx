import { useEffect, useState } from 'react'
import {
  Globe,
  ArrowLeft,
  Sparkles,
  Zap,
  Trophy,
  Users,
  Star,
  Rocket,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Robot } from './svgs/svgs'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => setIsVisible(true), [])

  return (
    <div className='border-b border-neutral-500/15 relative overflow-hidden'>
      <section className='relative pt-32 pb-28 min-h-[95vh] flex items-center'>
        {/* Main Background Pattern */}
        <div className='absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-yellow-500/10' />

        {/* Floating Animated Elements */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-primary/30 to-yellow-500/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className='absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-l from-primary/20 to-yellow-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Circuit Pattern Overlay */}
        <div className='absolute inset-0 opacity-10'>
          <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern
                id='circuit'
                x='0'
                y='0'
                width='100'
                height='100'
                patternUnits='userSpaceOnUse'
              >
                <path
                  d='M20 20 H80 M20 80 H80 M20 20 V80 M80 20 V80'
                  stroke='hsl(var(--primary))'
                  strokeWidth='1'
                  fill='none'
                  strokeDasharray='5,5'
                />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#circuit)' />
          </svg>
        </div>

        {/* Main Content */}
        <div className='container mx-auto px-4 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className='space-y-8'
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-lg'
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Globe className='w-4 h-4' />
                </motion.div>
                <span className='text-sm font-semibold'>
                  المپیاد جهانی رباتیک ۲۰۲۴
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className='w-4 h-4' />
                </motion.div>
              </motion.div>

              {/* Main Title */}
              <div className='space-y-4'>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className='text-5xl md:text-7xl font-bold leading-tight'
                >
                  <span className='block text-foreground'>پلتفرم جهانی</span>
                  <motion.span
                    className='block bg-gradient-to-r from-primary via-primary/80 to-yellow-500 bg-clip-text text-transparent'
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                  >
                    استعدادهای درخشان
                  </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl'
                >
                  جاییکه{' '}
                  <span className='text-primary font-semibold'>
                    نابغه‌های جوان
                  </span>{' '}
                  از سراسر جهان گرد هم می‌آیند تا با رباتیک و هوش مصنوعی،{' '}
                  <span className='text-primary font-semibold'>
                    رویاهاشون رو به واقعیت تبدیل کنند
                  </span>
                  و آینده‌ای بهتر برای همه بسازند!
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className='flex flex-row gap-4 pt-4'
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='group relative p-2 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-2xl text-sm sm:text-base font-semibold overflow-hidden shadow-lg shadow-primary/25'
                >
                  <span className='relative z-10 flex items-center gap-3'>
                    <Rocket className='w-5 h-5' />
                    همین حالا عضو شو!
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowLeft className='w-5 h-5' />
                    </motion.div>
                  </span>
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-primary to-primary/80'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='group p-2 sm:px-8 sm:py-4 border-2 border-primary text-primary rounded-2xl text-sm sm:text-base font-semibold hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm'
                >
                  <span className='flex items-center gap-3'>
                    بیشتر درباره ما
                    <ArrowLeft className='w-5 h-5' />
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8'
              >
                {[
                  {
                    icon: <Users className='w-6 h-6' />,
                    value: '۴۰+',
                    label: 'کشور عضو',
                    color: 'from-yellow-500/20 to-yellow-500/10',
                  },
                  {
                    icon: <Zap className='w-6 h-6' />,
                    value: '۸۰۰+',
                    label: 'دانش‌آموز فعال',
                    color: 'from-yellow-500/20 to-yellow-500/10',
                  },
                  {
                    icon: <Trophy className='w-6 h-6' />,
                    value: '۹۵٪',
                    label: 'رضایت شرکت‌کنندگان',
                    color: 'from-yellow-500/20 to-yellow-500/10',
                  },
                  {
                    icon: <Star className='w-6 h-6' />,
                    value: '۷',
                    label: 'روز رویداد اصلی',
                    color: 'from-yellow-500/20 to-yellow-500/10',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} border border-primary/10 hover:border-primary/30 transition-all backdrop-blur-sm`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className='text-primary mb-2'
                    >
                      {item.icon}
                    </motion.div>
                    <div className='text-2xl font-bold text-foreground'>
                      {item.value}
                    </div>
                    <div className='text-xs text-muted-foreground mt-1'>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT - ROBOT & VISUALS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className='relative'
            >
              {/* Main Robot */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='relative z-10'
              >
                <Robot />
              </motion.div>

              {/* Floating Elements Around Robot */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-2xl backdrop-blur-sm border border-primary/20 flex items-center justify-center'
              >
                <Sparkles className='w-6 h-6 text-primary' />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 25, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className='absolute bottom-20 right-10 w-12 h-12 bg-yellow-500/10 rounded-2xl backdrop-blur-sm border border-yellow-500/20 flex items-center justify-center'
              >
                <Zap className='w-5 h-5 text-yellow-500' />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, -15, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className='absolute top-1/2 -left-4 w-14 h-14 bg-yellow-500/10 rounded-2xl backdrop-blur-sm border border-yellow-500/20 flex items-center justify-center'
              >
                <Trophy className='w-6 h-6 text-yellow-500' />
              </motion.div>

              {/* Animated Connection Lines */}
              <svg
                className='absolute inset-0 w-full h-full'
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.path
                  d='M200 300 Q 300 250, 400 350'
                  stroke='hsl(var(--primary))'
                  strokeWidth='2'
                  fill='none'
                  strokeDasharray='5,5'
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.path
                  d='M500 200 Q 550 150, 600 250'
                  stroke='hsl(var(--primary))'
                  strokeWidth='2'
                  fill='none'
                  strokeDasharray='5,5'
                  animate={{
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-6 h-10 border-2 border-primary rounded-full flex justify-center'
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1 h-3 bg-primary rounded-full mt-2'
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
