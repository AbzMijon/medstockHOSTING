import DeliveryBlock from "@src/Components/Profile/Blocks/DeliveryBlock/DeliveryBlock";
import NewslettersBlock from "@src/Components/Profile/Blocks/NewslettersBlock/NewslettersBlock";
import PaymentsBlock from "@src/Components/Profile/Blocks/PaymentsBlock/PaymentsBlock";
import PersonalBlock from "@src/Components/Profile/Blocks/PersonalBlock/PersonalBlock";
import PurchasesBlock from "@src/Components/Profile/Blocks/PurchasesBlock/PurchasesBlock";

type Props = {
    pathItem: string | undefined;
}

function PersonalProfileChangeBlock({ pathItem }: Props) {
    switch (pathItem) {
        case 'personal':
            return <PersonalBlock />;
        case 'purchases':
            return <PurchasesBlock />;
        case 'payment':
            return <PaymentsBlock />;
        case 'delivery':
            return <DeliveryBlock />;
        case 'newsletters':
            return <NewslettersBlock />;
        default:
            return <PersonalBlock />;
    }
}

export default PersonalProfileChangeBlock;