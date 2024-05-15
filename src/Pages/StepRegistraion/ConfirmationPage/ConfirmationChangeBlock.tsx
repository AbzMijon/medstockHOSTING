import { useSelector } from "react-redux";
import RegistrationFormByMail from "src/Components/Form/RegistrationFormByMail/RegistrationFormByMail";
import { activeConfirmationSelector } from "src/redux/reducers/registrationReducer/registrationSelector";
import ConfirmFormByPhone from "src/Components/Form/ConfirmForms/ConfirmFormByPhone/ConfirmForm";
import ConfirmFormBySms from "src/Components/Form/ConfirmForms/ConfirmFormBySms/ConfirmFormBySms";
import ConfirmFormOldLink from "@src/Components/Form/ConfirmForms/ConfirmFormOldLink/ConfirmFormOldLink";
import ConfirmFormByEmail from "@src/Components/Form/ConfirmForms/ConfirmFormByEmail/ConfirmFormByEmail";

function ConfirmationChangeBlock() {

    const activeConfirmation = useSelector(activeConfirmationSelector);
    console.log('activeConfirmation', activeConfirmation);
    

    switch(activeConfirmation) {
        case 'phone':
            return <ConfirmFormByPhone />
        case 'sms':
            return <ConfirmFormBySms />
        case 'email':
            return <ConfirmFormByEmail />
        case 'old-link':
            return <ConfirmFormOldLink />
        default:
            return <ConfirmFormByPhone />
    }
}

export default ConfirmationChangeBlock;