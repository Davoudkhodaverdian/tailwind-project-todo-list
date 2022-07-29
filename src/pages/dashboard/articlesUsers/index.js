import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ArticlesUsers from '../../../components/articlesUsers';
import { setArticles } from '../../../store/slices/articlesSlice';

const ArticlesUsersPage = () => { //{ articles } argumunt commented request, use useEffect instead of it

  const dispatch = useDispatch();

  const getarticles = async () => {

      // Fetch data from external API
      const res = await fetch(`https://62d9b19f76028b55ae71d76e.endapi.io/articles`)
      const articles = await res.json()
      dispatch(setArticles(articles.data));

  }

  useEffect(() => {
    getarticles()
  }, [])



  return (<ArticlesUsers/>)

}


// export async function getServerSideProps() {

//     // Fetch data from external API
//     const res = await fetch(`https://62d9b19f76028b55ae71d76e.endapi.io/articles`)
//     const articles = await res.json()

//     // Pass data to the page via props
//     return { props: { articles } }
// }


export default ArticlesUsersPage;
