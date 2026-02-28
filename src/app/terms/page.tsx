"use client";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6 bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100">
        <h1 className="text-4xl font-black text-gray-900 mb-8 underline decoration-blue-500 decoration-4">
          Terms & Conditions
        </h1>
        
        <p className="text-gray-400 text-sm mb-10 font-bold uppercase tracking-widest">
          Effective Date: February 28, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>Jerry TikTok Tool</strong>, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <p>
              Our tools are provided for educational and compliance assistance purposes only. You agree not to use our services for any illegal activities or to violate TikTok's official Community Guidelines.
            </p>
          </section>

          <section className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500 text-yellow-900">
            <h2 className="text-xl font-bold mb-2">3. Disclaimer (No Guarantee)</h2>
            <p className="text-sm">
              While we provide expert strategies and compliance templates, <strong>Jerry TikTok Tool does not guarantee</strong> the successful recovery of any banned or restricted account. The final decision always rests with the platform's official support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p>
              The "Jerry TikTok Tool" name, logo, and recovery modules are protected by copyright. Any unauthorized reproduction or distribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall Jerry TikTok Tool be liable for any damages arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-sm italic">
              Questions about our terms? Contact us at <strong>support@jerrytiktoktool.com</strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}