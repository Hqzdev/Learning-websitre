import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Как быстро можно обучить модель?',
      answer: 'Время обучения зависит от размера модели и объема данных. Модель 2B обучается за 1-2 часа, модель 7B за 3-5 часов, а модели 13B и 16B за 6-12 часов. Вы можете отслеживать прогресс в реальном времени.'
    },
    {
      question: 'Какие форматы данных поддерживаются?',
      answer: 'Мы поддерживаем все популярные форматы: PDF, DOCX, TXT, CSV, JSON, HTML, Markdown. Система автоматически обрабатывает и очищает данные перед обучением.'
    },
    {
      question: 'Можно ли использовать модель через API?',
      answer: 'Да, все обученные модели доступны через REST API. Мы предоставляем подробную документацию и примеры кода для Python, JavaScript, PHP, Go и других языков программирования.'
    },
    {
      question: 'Где хранятся мои данные?',
      answer: 'Ваши данные хранятся в защищенных дата-центрах с шифрованием. Мы соблюдаем GDPR и другие стандарты безопасности. Вы можете удалить свои данные в любое время.'
    },
    {
      question: 'Есть ли ограничения на количество запросов?',
      answer: 'В бесплатном плане до 1000 запросов в месяц. В плане Pro до 10,000 запросов, а в Enterprise без ограничений. При превышении лимита можно докупить дополнительные запросы.'
    },
    {
      question: 'Можно ли обновить модель новыми данными?',
      answer: 'Да, вы можете дообучать существующую модель новыми данными. Это быстрее и дешевле, чем обучение с нуля. Система автоматически определит оптимальные параметры для дообучения.'
    },
    {
      question: 'Предоставляется ли техническая поддержка?',
      answer: 'Да, мы предоставляем поддержку на всех тарифах. В бесплатном плане - email поддержка, в Pro - приоритетная поддержка, в Enterprise - персональный менеджер и SLA 99.9%.'
    },
    {
      question: 'Можно ли экспортировать обученную модель?',
      answer: 'В планах Pro и Enterprise вы можете экспортировать модель в различных форматах (ONNX, TensorFlow, PyTorch) для локального использования. В бесплатном плане модель доступна только через наш API.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-300">
            Ответы на самые популярные вопросы о платформе AI Builder
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-300 mb-6">
              Наша команда поддержки готова помочь вам 24/7
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary"
              >
                Связаться с поддержкой
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-secondary"
              >
                Посмотреть документацию
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
