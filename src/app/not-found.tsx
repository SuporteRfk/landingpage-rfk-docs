import { Button } from '@/components/ui'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-400'>
      <h2 className='text-9xl text-secondary font-bold'>404</h2>
      <p className='text-2xl text-gray-600 tracking-wider font-semibold'>Página não encontrada</p>
      <Button className='mt-4 bg-secondary w-[300px] shadow-md hover:brightness-110'>
        <Link href="/">Retornar ao ínicio</Link>
      </Button>
    </div>
  )
}