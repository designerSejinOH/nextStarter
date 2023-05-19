import Header from '@/components/dom/layout/Header'
import * as S from '@/components/dom/layout/styles'

export default function Page(props) {
  return (
    <>
      <Header title={props.title} height={100} />
      <div className='mt-[100px] border bg-white text-black flex flex-col justify-start w-screen h-screen'>
        <h1 className='text-4xl font-bold'>Hello</h1>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: '#NONE' } }
}
