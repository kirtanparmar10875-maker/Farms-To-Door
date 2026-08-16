const CookiesPolicy = () => {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Cookies Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when 
              you visit a website. They are widely used to make websites work more efficiently and 
              to provide information to website owners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience on our platform, remember your preferences, 
              analyze site traffic, and personalize content. This helps us improve our service and 
              provide you with a better user experience.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Types of Cookies We Use</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-foreground">Essential Cookies</h3>
                <p className="text-muted-foreground text-sm">
                  Required for the website to function properly, including login and shopping cart functionality.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Performance Cookies</h3>
                <p className="text-muted-foreground text-sm">
                  Help us understand how visitors interact with our website by collecting anonymous information.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground">Functionality Cookies</h3>
                <p className="text-muted-foreground text-sm">
                  Remember your preferences and settings to provide a personalized experience.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services that place cookies on your device. These may include 
              analytics providers, payment processors, and social media platforms. These third 
              parties have their own privacy policies governing their use of cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              You can control and manage cookies through your browser settings. Most browsers allow 
              you to block or delete cookies, but this may affect the functionality of our website. 
              You can also opt-out of certain third-party cookies through their respective websites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookies Policy from time to time. We will notify you of any 
              significant changes by posting the new policy on this page with an updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact us at 
              privacy@farm2doors.com or by phone at +1 (555) 123-FARM.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;