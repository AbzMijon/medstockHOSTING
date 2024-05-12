import { useSelector } from "react-redux";
import RegistrationForm from "src/Components/Form/RegistrationForm/RegistrationForm";
import RegistrationFormByMail from "src/Components/Form/RegistrationFormByMail/RegistrationFormByMail";
import { activeFormSelector } from "src/redux/reducers/registrationReducer/registrationSelector";

function RegistrationChangeFormBlock() {

    const activeForm = useSelector(activeFormSelector);

    switch(activeForm) {
        case 'default':
            return <RegistrationFormByMail />  /* <RegistrationForm /> --- времено отключена */
        case 'mail':
            return <RegistrationFormByMail /> 
        default:
            return <RegistrationFormByMail /> /* <RegistrationForm /> --- времено отключена */
    }
}

export default RegistrationChangeFormBlock;