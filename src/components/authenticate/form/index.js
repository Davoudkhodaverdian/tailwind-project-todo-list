
import FieldData from './fieldData.json'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ConfirmButton from './confirmButton';

function Form({ type, confirmHandler, setValueInput, loading }) {

    return (
        <form className=" p-2">
            {
                FieldData.map((item) => (
                    item.name === "name" && type === "login" ? null :
                        <div className="my-4" key={item.id}>
                            <label htmlFor={item.idHtml} className="">{item.descreption}</label>
                            <input id={item.idHtml} name={item.name} type={item.type} required placeholder={item.descreption}
                                className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                                onChange={setValueInput.bind(null, item.name)}
                            />
                        </div>
                ))
            }
            <div className="mx-1 my-4">
                <Link to="/">
                   
                        <input type="submit" name="submit" value="بازگشت" className="px-3 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300 mx-1" />
                   
                </Link>
                <ConfirmButton confirmHandler={confirmHandler} loading={loading} type={type} />
            </div>
        </form>
    )
}

export default Form

Form.propTypes = {
    type: PropTypes.string,
    confirmHandler: PropTypes.func,
    setValueInput: PropTypes.func,
    loading: PropTypes.bool
};