const footerData = {
  logo: {
    title: "EduAbroad",
    subtitle: "Run by Harvard-Cambridge Alumni",
  },

  association: {
    text: "In association with",
    partner: "CAMBRIDGE",
  },

  columns: [
    {
      title: "Quick Links",
      links: ["Home", "About", "Contact Us"],
    },
    {
      title: "Useful Resources",
      links: [
        "Privacy Policy",
        "Terms & Conditions",
        "Refund Policy",
        "Sitemap",
      ],
    },
    {
      title: "Social Links",
      links: [
        "Facebook",
        "LinkedIn",
        "Instagram",
        "WhatsApp",
        "YouTube",
      ],
    },
    {
      title: "Our Branches",
      links: [
        "Indore",
        "Mumbai Borivali",
        "Lucknow",
        "Mumbai Andheri",
        "Gurugram",
        "Kanpur",
      ],
    },
  ],

  ctaButton: "Talk to an Expert",

  contactInfo: {
    phone: "+91 904 444 2989",
    email: "info@goeduabroad.com",
  },

  copyright: "2026© All Rights Reserved | Edu Abroad",
};

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto bg-[#f3f3f3] rounded-[40px] overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16 relative">
          {/* Decorative Ribbon */}
          <div className="hidden lg:block absolute top-0 right-20">
            <div className="w-36 h-64 bg-[#B21D34] relative">
              <div
                className="absolute -bottom-1 left-0 right-0 h-16 bg-[#f3f3f3]"
                style={{
                  clipPath: "polygon(0 0, 50% 70%, 100% 0, 100% 100%, 0 100%)",
                }}
              />
            </div>
          </div>

          {/* Top */}
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold font-serif">
              <span className="text-black">Edu</span>
              <span className="text-[#B21D34]">Abroad</span>
            </h2>

            <p className="text-base md:text-lg mt-1 text-gray-700">
              {footerData.logo.subtitle}
            </p>

            <div className="mt-6">
              <p className="text-xl text-gray-800">
                {footerData.association.text}
              </p>

              <h3 className="text-3xl md:text-4xl font-serif mt-2">
                {footerData.association.partner}
              </h3>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {footerData.columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-xl font-semibold mb-6 text-slate-900">
                  {column.title}
                </h4>

                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li
                      key={link}
                      className="text-sm md:text-base text-gray-700 hover:text-[#B21D34] cursor-pointer transition-colors"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center lg:justify-end mt-14">
            <button  className="bg-[#B21D34] text-white px-10 py-4 rounded-2xl text-base md:text-lg font-semibold hover:opacity-90 transition">
             <a href="tel:+919044442989">{footerData.ctaButton}</a>
            </button>
          </div>

          {/* Contact */}
          <div className="border-t border-[#B21D34]/40 mt-10 pt-6">
            <p className="text-center text-[#B21D34] text-sm md:text-base">
              Contact : {footerData.contactInfo.phone}
              <span className="mx-3">|</span>
              Email : {footerData.contactInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#B21D34] text-white py-5 px-8">
          <p className="text-center md:text-left">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}