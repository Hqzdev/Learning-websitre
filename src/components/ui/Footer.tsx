import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Возможности', href: '/features' },
      { name: 'Тарифы', href: '/pricing' },
      { name: 'API', href: '/docs' },
      { name: 'Интеграции', href: '/integrations' },
    ],
    company: [
      { name: 'О нас', href: '/about' },
      { name: 'Блог', href: '/blog' },
      { name: 'Карьера', href: '/careers' },
      { name: 'Контакты', href: '/contact' },
    ],
    support: [
      { name: 'Помощь', href: '/help' },
      { name: 'Документация', href: '/docs' },
      { name: 'Сообщество', href: '/community' },
      { name: 'Статус', href: '/status' },
    ],
    legal: [
      { name: 'Политика конфиденциальности', href: '/privacy' },
      { name: 'Условия использования', href: '/terms' },
      { name: 'Cookie', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@aibuilder.com' },
  ]

  return (
    <footer className="bg-dark-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AI Builder</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              Создавайте собственные AI модели для анализа текстов, поиска и автоматизации. 
              Простой интерфейс, мощные возможности.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} AI Builder. Все права защищены.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Сделано с ❤️ в России</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
