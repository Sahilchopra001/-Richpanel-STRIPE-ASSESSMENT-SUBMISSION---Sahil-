document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const plansDiv = document.getElementById("plans");
    const subscriptionDetailsDiv = document.getElementById("subscriptionDetails");
    const selectedPlanDisplay = document.getElementById("selectedPlan");
    const cancelSubscriptionBtn = document.getElementById("cancelSubscriptionBtn");

    const paymentFormDiv = document.getElementById("paymentForm");
    const cardNumberInput = document.getElementById("cardNumber");
    const expiryDateInput = document.getElementById("expiryDate");
    const cvvInput = document.getElementById("cvv");
    const subscribePaymentBtn = document.getElementById("subscribePaymentBtn");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Implement your login logic here

        // Simulate successful login
        plansDiv.classList.remove("hidden");
        renderPlans();
    });

    function renderPlans() {
        const plans = [
            {
                name: "Basic",
                monthlyPrice: 100,
                yearlyPrice: 1000,
            },
            {
                name: "Standard",
                monthlyPrice: 200,
                yearlyPrice: 1000,
            },
            {
                name: "Premium",
                monthlyPrice: 500,
                yearlyPrice: 1000,
            },
            {
                name: "Regular",
                monthlyPrice: 700,
                yearlyPrice: 1000,
            }
            // Define other plans similarly
        ];
        function handleSubscribe(event) {
            const selectedPlan = event.target.dataset.plan;
            const monthlyPrice = event.target.dataset.monthlyPrice;
            const yearlyPrice = event.target.dataset.yearlyPrice;
    
            selectedPlanDisplay.textContent = `You have subscribed to ${selectedPlan} plan for ${monthlyPrice} INR per month.`;
            subscriptionDetailsDiv.classList.remove("hidden");
            paymentFormDiv.classList.remove("hidden");
    
            cancelSubscriptionBtn.addEventListener("click", handleCancelSubscription);
            subscribePaymentBtn.addEventListener("click", handleSubscribePayment);
        }
        function handleCancelSubscription() {
            // Implement subscription cancellation logic here
            // Simulate subscription cancellation
            alert("Subscription canceled.");
            subscriptionDetailsDiv.classList.add("hidden");
            paymentFormDiv.classList.add("hidden");
        }
    
        function handleSubscribePayment() {
            const cardNumber = cardNumberInput.value;
            const expiryDate = expiryDateInput.value;
            const cvv = cvvInput.value;
    
            // Implement Stripe integration for payment here
            // Simulate successful payment
            alert("Payment successful!");
        }
        plansDiv.innerHTML = "";
        plans.forEach((plan) => {
            const planDiv = document.createElement("div");
            planDiv.classList.add("plan");
            planDiv.innerHTML = `
                <h2>${plan.name}</h2>
                <p>Monthly Price: ${plan.monthlyPrice} INR</p>
                <p>Yearly Price: ${plan.yearlyPrice} INR</p>
                <button class="subscribeBtn" data-plan="${plan.name}" data-monthly-price="${plan.monthlyPrice}" data-yearly-price="${plan.yearlyPrice}">Subscribe</button>
            `;
            plansDiv.appendChild(planDiv);
        });

        const subscribeButtons = document.querySelectorAll(".subscribeBtn");
        subscribeButtons.forEach((btn) => {
            btn.addEventListener("click", handleSubscribe);
        });
    }

    function handleSubscribe(event) {
        const selectedPlan = event.target.dataset.plan;
        const monthlyPrice = event.target.dataset.monthlyPrice;
        const yearlyPrice = event.target.dataset.yearlyPrice;

        // Implement Stripe integration here
        // You would use Stripe API to handle subscription creation and payment

        // Simulate successful subscription
        alert(`Subscribed to ${selectedPlan} plan for ${monthlyPrice} INR per month.`);
    }
});
