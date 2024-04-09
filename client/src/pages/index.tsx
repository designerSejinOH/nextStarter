import { Header, Base } from '../components/dom/layout'

export default function Page(props) {
  return (
    <>
      <Header title={props.title} />
      <Base title={props.title} />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Next Starter' } }
}
