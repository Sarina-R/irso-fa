'use client'

import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  Globe,
  Users,
  Trophy,
  Lightbulb,
  Calendar,
  Target,
  Heart,
  Sparkles,
  Rocket,
  Brain,
  Shield,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        'IRSO نه تنها مسابقه بود، بلکه نقطه عطف زندگی من شد. دوستانی از سراسر جهان پیدا کردم که امروز همچنان با هم در ارتباطیم و با هم روی پروژه‌های مختلف کار می‌کنیم!',
      name: 'سارا احمدی',
      role: 'دانشجوی مهندسی رباتیک',
      country: 'ایران، تیم برنده ۲۰۲۴',
      emoji: '🌟',
    },
    {
      quote:
        'با تجربه IRSO تونستم بورسیه دانشگاه معتبری بگیرم. این رویداد درهای زیادی رو به رویم باز کرد و اعتماد به نفس من رو برای رقابت در سطح جهانی افزایش داد.',
      name: 'محمد رضایی',
      role: 'دانشجوی هوش مصنوعی',
      country: 'ترکیه، شرکت‌کننده ۲۰۲۳',
      emoji: '🚀',
    },
    {
      quote:
        'به عنوان معلم، دیدن رشد دانش‌آموزانم در این صحنه جهانی، بزرگترین افتخار زندگیم بود. انرژی و اشتیاق شرکت‌کنندگان واقعاً الهام‌بخش بود.',
      name: 'دکتر فاطمه کریمی',
      role: 'مربی رباتیک',
      country: 'ایران، مربی تیم ملی',
      emoji: '💫',
    },
    {
      quote:
        'یادگیری از فرهنگ‌های مختلف و همکاری با تیم‌های بین‌المللی، تجربه‌ای بود که هرگز فراموش نمی‌کنم. این رویداد دیدگاه من رو نسبت به جهان کاملاً تغییر داد.',
      name: 'علی مرادی',
      role: 'دانش‌آموز دبیرستان',
      country: 'مالزی، شرکت‌کننده ۲۰۲۴',
      emoji: '🌍',
    },
  ]

  return (
    <main className='min-h-screen bg-background overflow-hidden'>
      <HeroSection />

      {/* Vision & Mission  */}
      <section className='py-20 relative'>
        <div className='absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10'></div>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 order-2 md:order-1'>
              <div className='inline-flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full'>
                <Target className='w-5 h-5' />
                <span className='text-sm font-semibold'>چشم‌انداز ما</span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
                ساختن دنیایی بهتر با نوآوری
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                ما باور داریم که نسل جوان می‌تواند با ایده‌های خلاقانه و
                تکنولوژی، آینده‌ای روشن برای همه بسازد. اینجا جاییه که رویاها به
                واقعیت تبدیل میشن!
              </p>
              <div className='flex flex-wrap gap-3 pt-4'>
                {['خلاقیت', 'همکاری', 'اخلاق', 'نوآوری'].map((tag, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/20 hover:border-primary/40 transition-all duration-300'
                  >
                    <Lightbulb className='w-4 h-4 text-primary' />
                    <span className='text-sm'>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative order-1 md:order-2'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl'></div>
              <div className='relative bg-card border border-primary/20 rounded-3xl p-8 space-y-6 shadow-lg hover:shadow-xl transition-all duration-300'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                    <Heart className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold text-foreground'>
                    ماموریت ما
                  </h3>
                </div>
                <ul className='space-y-4'>
                  {[
                    'توانمندسازی دانش‌آموزان برای کشف دنیای رباتیک و هوش مصنوعی',
                    'ایجاد دوستی‌های بین‌المللی از طریق علم و فناوری',
                    'ساخت محیطی پویا برای یادگیری و رشد مهارت‌ها',
                    'پرورش مسئولیت‌پذیری و تفکر خلاق در نسل جوان',
                  ].map((item, i) => (
                    <li key={i} className='flex items-start gap-3 group'>
                      <div className='w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform'>
                        <div className='w-2 h-2 rounded-full bg-primary'></div>
                      </div>
                      <span className='text-muted-foreground group-hover:text-foreground transition-colors'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section id='categories' className='py-20 bg-muted/20'>
        <div className='container mx-auto px-4'>
          <div className='text-center space-y-4 mb-16'>
            <div className='inline-flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full'>
              <Sparkles className='w-5 h-5' />
              <span className='text-sm font-semibold'>
                رقابت‌های هیجان‌انگیز
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
              چهار زمینه جذاب برای رقابت
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              هر سال، شرکت‌کنندگان می‌تونن در چهار دسته تخصصی، مهارت‌هاشون رو به
              رخ بکشن
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
            {[
              {
                icon: Rocket,
                title: 'رباتیک خودکار',
                description:
                  'ساختن ربات‌هایی که می‌تونن ماموریت‌های مختلف رو به صورت خودکار انجام بدن',
                color: 'from-blue-500/20 to-blue-500/5',
              },
              {
                icon: Brain,
                title: 'هوش مصنوعی',
                description:
                  'پیاده‌سازی الگوریتم‌های هوشمند برای تصمیم‌گیری ربات‌ها',
                color: 'from-green-500/20 to-green-500/5',
              },
              {
                icon: Lightbulb,
                title: 'پروژه تحقیقاتی',
                description:
                  'ارائه ایده‌های نوآورانه برای حل مشکلات واقعی دنیا',
                color: 'from-yellow-500/20 to-yellow-500/5',
              },
              {
                icon: Target,
                title: 'طراحی مهندسی',
                description: 'خلاقیت در طراحی سیستم‌های مکانیکی و مکاترونیکی',
                color: 'from-red-500/20 to-red-500/5',
              },
            ].map((category, i) => (
              <div
                key={i}
                className='group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className='relative space-y-4'>
                  <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300'>
                    <category.icon className='w-7 h-7 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold text-foreground'>
                    {category.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {category.description}
                  </p>
                  <Button
                    variant='ghost'
                    className='gap-2 group-hover:text-primary'
                  >
                    بیشتر بدانید
                    <ArrowLeft className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='process' className='py-20 relative overflow-hidden'>
        <div className='absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10'></div>
        <div className='container mx-auto px-4'>
          <div className='text-center space-y-4 mb-16'>
            <div className='inline-flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full'>
              <Calendar className='w-5 h-5' />
              <span className='text-sm font-semibold'>مراحل شرکت</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
              چطور توی این ماجراجویی شرکت کنم؟
            </h2>
          </div>

          <div className='max-w-4xl mx-auto'>
            <div className='space-y-0'>
              {[
                {
                  step: '۱',
                  title: 'مرحله ملی',
                  description: 'اول توی مسابقات ملی کشورت شرکت کن',
                  duration: '۲-۴ ماه',
                  icon: Target,
                },
                {
                  step: '۲',
                  title: 'آماده‌سازی',
                  description: 'تیم‌های برتر برای فینال بین‌المللی آماده میشن',
                  duration: '۳-۴ ماه',
                  icon: Rocket,
                },
                {
                  step: '۳',
                  title: 'فینال جهانی',
                  description: 'رقابت نهایی با بهترین تیم‌های دنیا',
                  duration: '۷ روز هیجان‌انگیز',
                  icon: Trophy,
                },
                {
                  step: '۴',
                  title: 'جشن موفقیت',
                  description: 'مراسم اهدای جوایز و دوستی‌های ماندگار',
                  duration: 'خاطره‌سازی مادام‌العمر',
                  icon: Heart,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex gap-6 pb-8 last:pb-0 relative group'
                >
                  {i < 3 && (
                    <div className='absolute right-[23px] top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/10'></div>
                  )}
                  <div className='w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10 transition-transform duration-300 shadow-lg'>
                    {item.step}
                  </div>
                  <div className='flex-1 pt-1 pb-4 transition-transform duration-300'>
                    <div className='flex items-start justify-between gap-4 mb-2'>
                      <div className='flex items-center gap-3'>
                        <item.icon className='w-6 h-6 text-primary' />
                        <h3 className='text-2xl font-bold text-foreground'>
                          {item.title}
                        </h3>
                      </div>
                      <span className='text-sm text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-full'>
                        {item.duration}
                      </span>
                    </div>
                    <p className='text-muted-foreground text-lg leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='text-center mt-12'>
            <Button size='lg' className='gap-2 bg-primary hover:bg-primary/90'>
              راهنمای کامل شرکت
              <ArrowLeft className='w-5 h-5' />
            </Button>
          </div>
        </div>
      </section>

      {/* Annual Themes */}
      <section className='py-20 bg-muted/20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center space-y-6 mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
              موضوعات امسال
            </h2>
            <p className='text-lg text-muted-foreground'>
              هر سال موضوعی جدید و جذاب داریم که شرکت‌کنندگان رو به چالش می‌کشه
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
            {[
              'رباتیک برای محیط زیست',
              'هوش مصنوعی در سلامت',
              'شهرهای هوشمند',
              'اکتشاف اقیانوس‌ها',
              'رباتیک کمک‌کننده',
              'انرژی پاک',
            ].map((theme, i) => (
              <div
                key={i}
                className='group px-6 py-4 rounded-full border-2 border-primary/20 bg-background hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl'
              >
                <span className='text-sm font-medium group-hover:text-primary transition-colors'>
                  {theme}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Structure */}
      <section className='py-20 relative'>
        <div className='absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10'></div>
        <div className='container mx-auto px-4'>
          <div className='text-center space-y-4 mb-16'>
            <div className='inline-flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full'>
              <Calendar className='w-5 h-5' />
              <span className='text-sm font-semibold'>برنامه رویداد</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
              ۷ روز خاطره‌انگیز
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              از شروع تا پایان، هر روز پر از تجربیات جدید و دوستی‌های تازه
            </p>
          </div>

          <div className='max-w-6xl mx-auto space-y-4'>
            {[
              {
                day: 'روز ۱',
                title: 'ورود و آشنایی',
                activities: [
                  'پذیرش در فرودگاه',
                  'ثبت‌نام و دریافت کارت',
                  'جلسه معارفه',
                ],
                bg: 'bg-gradient-to-br from-blue-500/10 to-blue-500/5',
              },
              {
                day: 'روز ۲',
                title: 'مراسم افتتاحیه',
                activities: ['رژه پرچم‌ها', 'سخنرانی مهمانان', 'نمایش فرهنگی'],
                bg: 'bg-gradient-to-br from-green-500/10 to-green-500/5',
              },
              {
                day: 'روز ۳-۵',
                title: 'رقابت اصلی',
                activities: [
                  'مسابقات رباتیک',
                  'کارگاه‌های آموزشی',
                  'نمایشگاه نوآوری',
                ],
                bg: 'bg-gradient-to-br from-yellow-500/10 to-yellow-500/5',
              },
              {
                day: 'روز ۶',
                title: 'جشن برندگان',
                activities: ['اعلام نتایج', 'اهدای مدال‌ها', 'شام دوستانه'],
                bg: 'bg-gradient-to-br from-red-500/10 to-red-500/5',
              },
              {
                day: 'روز ۷',
                title: 'خداحافظی',
                activities: [
                  'صبحانه خداحافظی',
                  'عکس‌های یادگاری',
                  'بازگشت به خانه',
                ],
                bg: 'bg-gradient-to-br from-purple-500/10 to-purple-500/5',
              },
            ].map((event, i) => (
              <div
                key={i}
                className='group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                <div className='flex flex-col md:flex-row'>
                  <div
                    className={`${event.bg} md:w-48 p-6 flex items-center justify-center group-hover:bg-primary/5 transition-colors`}
                  >
                    <div className='text-center'>
                      <div className='text-sm text-primary font-semibold mb-2'>
                        Day {i + 1}
                      </div>
                      <div className='text-3xl font-bold text-foreground'>
                        {event.day}
                      </div>
                    </div>
                  </div>
                  <div className='flex-1 p-6'>
                    <h3 className='text-2xl font-bold mb-4 text-foreground'>
                      {event.title}
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {event.activities.map((activity, j) => (
                        <span
                          key={j}
                          className='px-3 py-1.5 rounded-full bg-muted text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer'
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className='py-20 bg-muted/20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center space-y-4 mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
                این رویداد برای کیه؟
              </h2>
              <p className='text-lg text-muted-foreground'>
                جامعه‌ای جهانی از دانش‌آموزان پرانگیزه، معلمان دلسوز و حامیان
                نوآوری
              </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8'>
              {[
                {
                  icon: Users,
                  title: 'دانش‌آموزان',
                  subtitle: '۱۳-۱۸ سال',
                  description:
                    'نوجوانان کنجکاو و علاقه‌مند به رباتیک و تکنولوژی',
                  features: [
                    'تیم‌های ۳-۵ نفره',
                    'همه سطوح مهارت',
                    'دوستان جدید',
                  ],
                  color: 'from-blue-500/10 to-blue-500/5',
                },
                {
                  icon: Lightbulb,
                  title: 'معلمان',
                  subtitle: 'راهنمایان الهام‌بخش',
                  description: 'مربیان پرانرژی علوم، رباتیک و باشگاه‌های مدرسه',
                  features: ['آموزش رایگان', 'منابع آموزشی', 'شبکه جهانی'],
                  color: 'from-green-500/10 to-green-500/5',
                },
                {
                  icon: Target,
                  title: 'حامیان',
                  subtitle: 'شرکای موفقیت',
                  description: 'دانشگاه‌ها، شرکت‌ها و سازمان‌های پیشرو',
                  features: ['حمایت مالی', 'کشف استعدادها', 'نمایش فناوری'],
                  color: 'from-purple-500/10 to-purple-500/5',
                },
              ].map((audience, i) => (
                <div key={i} className='relative group'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${audience.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className='relative bg-card border border-border rounded-xl md:rounded-3xl p-4 md:p-8 space-y-3 md:space-y-6 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl'>
                    <div className='w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-300'>
                      <audience.icon className='w-8 h-8 text-primary' />
                    </div>
                    <div>
                      <h3 className='text-lg md:text-2xl font-bold text-foreground mb-1'>
                        {audience.title}
                      </h3>
                      <p className='text-xs md:text-sm text-primary font-medium'>
                        {audience.subtitle}
                      </p>
                    </div>
                    <p className='text-sm md:text-base text-muted-foreground leading-relaxed'>
                      {audience.description}
                    </p>
                    <div className='space-y-2 pt-2'>
                      {audience.features.map((feature, j) => (
                        <div
                          key={j}
                          className='flex items-center gap-2 text-xs md:text-sm group-hover:text-foreground transition-colors'
                        >
                          <div className='w-1.5 h-1.5 rounded-full bg-primary'></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - طراحی جدید با انیمیشن */}
      <section className='py-20 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10'></div>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='max-w-4xl mx-auto text-center space-y-6 mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
              دوستای ما چی می‌گن؟
            </h2>
            <p className='text-lg text-muted-foreground'>
              گوش کنید به تجربیات شرکت‌کنندگان قبلی که زندگی‌شون با IRSO متحول
              شد
            </p>
          </motion.div>

          <div className='max-w-4xl mx-auto'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className='bg-card border border-border rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-lg'
              >
                <div className='absolute -right-10 -top-10 text-8xl opacity-10'>
                  {testimonials[activeTestimonial].emoji}
                </div>

                <div className='text-primary text-4xl font-serif'>"</div>
                <p className='text-lg text-muted-foreground leading-relaxed relative z-10'>
                  {testimonials[activeTestimonial].quote}
                </p>
                <div className='pt-6 border-t border-border relative z-10'>
                  <div className='font-bold text-lg text-foreground'>
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className='text-muted-foreground'>
                    {testimonials[activeTestimonial].role}
                  </div>
                  <div className='text-primary text-sm mt-1 font-medium'>
                    {testimonials[activeTestimonial].country}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className='flex justify-between items-center mt-8'>
              <div className='flex gap-2'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'bg-primary w-8'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <div className='flex gap-2'>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full w-12 h-12 hover:bg-primary/10'
                  onClick={() =>
                    setActiveTestimonial(
                      (prev) =>
                        (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                >
                  <ChevronRight className='w-5 h-5' />
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='rounded-full w-12 h-12 hover:bg-primary/10'
                  onClick={() =>
                    setActiveTestimonial(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                >
                  <ChevronLeft className='w-5 h-5' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate - طراحی مدرن */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-5 gap-12 items-center'>
            <div className='md:col-span-2 space-y-6'>
              <h2 className='text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
                چرا باید شرکت کنی؟
              </h2>
              <p className='text-lg text-muted-foreground'>
                فرصتی ناب برای رشد شخصی، یادگیری مهارت‌های جدید و ساختن
                دوستی‌های جهانی
              </p>
            </div>

            <div className='md:col-span-3 grid sm:grid-cols-2 gap-4'>
              {[
                { icon: Globe, text: 'آشنایی با دانش‌آموزان از ۴۰+ کشور دنیا' },
                { icon: Trophy, text: 'کسب گواهینامه‌های معتبر بین‌المللی' },
                { icon: Brain, text: 'یادگیری از برترین متخصصان جهان' },
                { icon: Users, text: 'تقویت مهارت کار تیمی و رهبری' },
                { icon: Lightbulb, text: 'حل چالش‌های واقعی و impactful' },
                { icon: Rocket, text: 'دسترسی به فرصت‌های بورسیه تحصیلی' },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className='flex items-start gap-3 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group cursor-pointer'
                >
                  <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-transform'>
                    <benefit.icon className='w-5 h-5 text-primary' />
                  </div>
                  <span className='text-sm leading-relaxed pt-1.5 group-hover:text-foreground transition-colors'>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors CTA - طراحی حرفه‌ای */}
      <section
        id='sponsors'
        className='py-20 bg-primary/10 border-y border-primary/20'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center space-y-8'>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
              به خانواده ما بپیوندید
            </h2>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              با حمایت از IRSO، در ساختن آینده‌ای بهتر برای نسل جوان سهیم باشید
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Button
                size='lg'
                className='gap-2 bg-primary hover:bg-primary/90'
              >
                اطلاعات حمایت
                <ArrowLeft className='w-5 h-5' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='transition-transform'
              >
                همکاری با ما
              </Button>
            </div>

            <div className='pt-8 grid grid-cols-2 md:grid-cols-4 gap-8'>
              {['حامی طلایی', 'حامی نقره‌ای', 'حامی برنزی', 'همکار ویژه'].map(
                (tier, i) => (
                  <div key={i} className='space-y-2 group cursor-pointer'>
                    <div className='text-2xl font-bold text-primary transition-transform'>
                      {i + 1}
                    </div>
                    <div className='text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                      {tier}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - طراحی الهام‌بخش */}
      <section className='py-32 relative overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
          <svg
            className='w-full h-full'
            viewBox='0 0 1000 400'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0,200 Q250,100 500,200 T1000,200'
              fill='none'
              stroke='currentColor'
              strokeWidth='3'
              className='text-primary/20'
            />
            <path
              d='M0,250 Q250,150 500,250 T1000,250'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-primary/10'
            />
          </svg>
        </div>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center space-y-8'>
            <h2 className='text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent'>
              آینده رو تو بساز!
            </h2>
            <p className='text-xl text-muted-foreground'>
              به جامعه جهانی نوآوران جوان بپیوند و بخشی از این داستان
              هیجان‌انگیز باش
            </p>
            <Button
              size='lg'
              className='gap-2 text-lg px-10 py-7 bg-primary hover:bg-primary/90 transition-transform shadow-lg hover:shadow-xl'
            >
              شروع کن
              <ArrowLeft className='w-5 h-5' />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
