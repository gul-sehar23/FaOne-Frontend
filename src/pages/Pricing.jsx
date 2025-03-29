import ComparisonTable from "../components/ComparisonTable";
import FAQSection from "../components/FAQSection";
import PricingHeader from "../components/PricingHeader";
import Testimonials from "../components/Testimonials";
import OrderForm from "../components/OrderForm";


const Pricing = () => {
    return (
        <>
        <PricingHeader />
        <OrderForm />
        <ComparisonTable />
        <Testimonials />
        <FAQSection />
        </>
    );
};

export default Pricing;