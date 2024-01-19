import LazyImage from '@/components/LazyImage'
import Router from 'next/router'
import SocialButton from './SocialButton'
import { siteConfig } from '@/lib/config'

const InfoCard = (props) => {
  const { siteInfo } = props
  return <>
    <div className='flex flex-col items-center justify-center '>
        <div className='hover:rotate-0 hover:scale-100 transform duration-100 cursor-pointer' onClick={ () => { Router.push('/') }}>
        <LazyImage src={siteInfo?.icon} className='rounded-full' width={120} alt={siteConfig('AUTHOR')}/>
        </div>
        <div className='text-2xl font-serif dark:text-white py-2 hover:scale-105 transform duration-200'>{siteConfig('AUTHOR')}</div>
        <div className='font-light dark:text-white py-2 hover:scale-100 transform duration-200 text-center'>{siteConfig('BIO')}</div>
        <SocialButton/>
    </div>
  </>
}

export default InfoCard
