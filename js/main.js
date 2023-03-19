





const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio){
    elPaymentPeriodRadio.addEventListener('change', function(){
        const period = elPaymentPeriodRadio.velue;
        
        if (period === 'annual') {
            elsPricingPlanValue.forEach(function (elPrice) {
                elPrice.textContent = elPrice.closest('.pricign-plan').dataset.paymentAnnual;
            });
        }   else {
                elsPricingPlanValue.forEach(function (elPrice) {
                    elPrice.textContent = elPrice.closest('.pricign-plan').dataset.paymentMonthly;   
            });
        }
    });
});