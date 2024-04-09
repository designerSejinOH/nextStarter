import { useRouter } from 'next/router'

interface BaseProps {
  title: string
}

export function Base(props: BaseProps) {
  const { title } = props
  const router = useRouter()

  return (
    <>
      <div className=' w-full h-screen flex justify-center items-center '>
        <div className='flex flex-col w-fit h-fit gap-2'>
          <p className='text-xs'>Next.JS Starter with twin.macro</p>
          <button
            className='bg-white text-black p-2 text-3xl hover:text-gray-400'
            onClick={() => {
              router.reload()
            }}>
            {title}
          </button>
          <div className='flex flex-col '>
            <div className='border-b p-2'>🎛️ Next 13</div>
            <div className='border-b p-2'>🎨 Tailwind + Styled Components + twin.macro</div>
            <div className='border-b p-2'>🤹‍♀️ Framer Motion</div>
          </div>
          <p className='text-xs'>
            Made by <a href='https://ßsejinoh.site'>SEJIN OH</a>.
          </p>
        </div>
      </div>
    </>
  )
}
