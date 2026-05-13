import "./pricing.css";

function PricingCard({ title, price }) {
  return (
    <div className="pricing-card">

      <span className="h3">{title}</span>
      <span className="pricing-card__price h3">{price}</span>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="pricing-section">

      <div className="pricing-box">
        <h2 className="h2 pricing-box__title">Package Pricing</h2>

        <div className="pricing-grid">

          <div className="pricing-column">
            <h3 className="pricing-column__title h3">
              Student Rates
            </h3>

            <PricingCard title="1 Course Package" price="50€" />
            <PricingCard title="2 Courses Package" price="75€"  />
            <PricingCard title="3 Courses Package" price="90€" />
          </div>

          <div className="pricing-column">
            <h3 className="pricing-column__title h3">
              Non-Student Rates
            </h3>

            <PricingCard title="1 Course Package" price="100€" />
            <PricingCard title="2 Courses Package" price="150€"  />
            <PricingCard title="3 Courses Package" price="180€" />
          </div>

        </div>

        <p className="p pricing-note">
          * Packages are valid for one term (3 months). Student ID required for student rates.
        </p>
      </div>
    </section>
  );
}

export default PricingSection;