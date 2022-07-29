import Head from "next/head"
import Header from "./header"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

const SingleArticle = (/* { articlesUsers }*/) => { //{ articlesUsers } argumunt for commeneted getServerSideProps request, use useEffect instead of it

  const [articlesUsers, setarticlesUsers] = useState({ id: "", title: "", body: "" })

  const router = useRouter()
  
  const getarticlesUsers = async () => {
    
    // Fetch data from external API
    const res = await fetch(`https://62d9b19f76028b55ae71d76e.endapi.io/articles/${router.query.id}`)
    const data = await res.json();
    const { id, title, body } = data.data;
    setarticlesUsers({ id, title, body });

  }

  useEffect(() => {
    getarticlesUsers()
  }, [])

  return (
    <>
      <Head>
        <title>{articlesUsers.title}</title>
      </Head>
      <Header />
      <div className="m-10 p-5 border border-slate-200 rounded-lg" dir="ltr">
        <div className="flex justify-between">
          <div>
            <div>عنوان: {articlesUsers.title}</div>
            <div>توضیحات: {articlesUsers.body}</div>
          </div>
          <div>
            <img className='mx-auto my-2 rounded shadow' src="/images/images-next.png" width={600} alt="avatar" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleArticle;
