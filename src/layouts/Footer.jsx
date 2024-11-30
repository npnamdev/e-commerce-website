import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo và giới thiệu */}
          <div>
            <h3 className="text-xl font-bold mb-4">Learnify</h3>
            <p className="text-sm">
              Nền tảng học tập trực tuyến với hàng ngàn khóa học hấp dẫn. Cùng chúng tôi phát triển kiến thức và kỹ năng của bạn!
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="hover:text-teal-400 transition-colors"
                >
                  Khóa học
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-teal-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin liên hệ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-bold">Địa chỉ:</span> 123 Nguyễn Văn A, Hà
                Nội, Việt Nam
              </li>
              <li>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:support@learnify.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  support@learnify.com
                </a>
              </li>
              <li>
                <span className="font-bold">Điện thoại:</span>{" "}
                <a
                  href="tel:+84999999999"
                  className="hover:text-teal-400 transition-colors"
                >
                  +84 999 999 999
                </a>
              </li>
            </ul>
          </div>

          {/* Mạng xã hội */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-teal-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-teal-400 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            © 2024 Learnify. All rights reserved. Designed with ❤️ by YourName.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
