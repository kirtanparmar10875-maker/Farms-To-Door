const TermsOfService = () => {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Farm2Doors, you accept and agree to be bound by the terms 
              and provision of this agreement. These terms apply to all visitors, users, and 
              others who access or use the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Farm2Doors is an online marketplace that connects farmers and agricultural producers 
              with customers seeking fresh, quality produce. We facilitate transactions between 
              buyers and sellers but are not a party to these transactions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              To use certain features of our service, you must register for an account. You are 
              responsible for maintaining the confidentiality of your account credentials and for 
              all activities that occur under your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Seller Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sellers are responsible for the accuracy of product listings, quality of products, 
              timely delivery, and compliance with all applicable laws and regulations. Sellers 
              must provide accurate information about their products and farming practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Buyer Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Buyers are responsible for providing accurate delivery information, making timely 
              payments, and treating products with care upon delivery. Buyers should inspect 
              products promptly upon receipt.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Prohibited Activities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users may not use the service for any unlawful purpose, post false or misleading 
              information, attempt to defraud other users, or engage in any activity that interferes 
              with the proper functioning of the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Farm2Doors shall not be liable for any direct, indirect, incidental, special, or 
              consequential damages resulting from the use or inability to use the service, 
              including damages from product quality issues or delivery problems.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at 
              legal@farm2doors.com or by phone at +1 (555) 123-FARM.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;