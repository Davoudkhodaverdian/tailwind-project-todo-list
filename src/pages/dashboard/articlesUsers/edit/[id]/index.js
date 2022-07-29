import Head from "next/head";
import { useSelector } from "react-redux";
import EditArticleUser from "../../../../../components/articlesUsers/edit"

const SingleArticleUser = () => {

    const articleUser = useSelector(state=> state.articles.editedValues)

    return (
        <>
            <Head>
                <title>{articleUser.title}</title>
            </Head>
            <EditArticleUser data={articleUser} />
        </>
    );
}

export default SingleArticleUser;