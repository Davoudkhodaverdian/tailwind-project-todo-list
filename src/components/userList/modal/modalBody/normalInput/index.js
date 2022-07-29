import Items from './items.json'
import PropTypes from 'prop-types';

function NormalInput({ setValueInput }) {

    return (
        <>
            {
                Items.map((item) => (
                    <div key={item.id}>
                        <div><label className="px-1" htmlFor={item.name}>{item.descreption}</label></div>
                        <div>
                            <input type={item.name === "userPassword" ? "password" : "text"} id={item.name} name={item.name}
                                className="appearance-none rounded relative px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                                placeholder={item.descreption} onChange={setValueInput.bind(this, item.name)} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NormalInput

NormalInput.propTypes = {
    setValueInput: PropTypes.func
};
