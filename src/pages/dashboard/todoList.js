

import TodoList from '../../components/todoList/todoList';
import PropTypes from 'prop-types';


export default function TodoListPage() { //{ list } argumunt commented request, use useEffect instead of it



    return (<TodoList />);
}

// export async function getServerSideProps() {

//     // Fetch data from external API
//     const res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos`)
//     const list = await res.json()

//     // Pass data to the page via props
//     return { props: { list } }
// }


TodoListPage.propTypes = {
    list: PropTypes.object,
};
