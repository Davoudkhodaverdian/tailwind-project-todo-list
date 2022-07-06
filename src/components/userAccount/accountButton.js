

import MaleAvatar from './../../images/maleAvatar.svg'

function AccountButton() {

    return (
        <button className="flex flex-row items-center">
            <span className="px-2">حساب کاربری من</span>
            {/* avatar svg */}
            <img src={MaleAvatar} width={24} alt="avatar" />
        </button>
    )
}

export default AccountButton