import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Александр Петров',
      role: 'CTO, TechCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'AI Builder помог нам создать модель для анализа технической документации. Время обработки сократилось в 10 раз.',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      role: 'Менеджер по продукту, StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'Платформа интуитивно понятная, а результаты превзошли ожидания. Наша модель теперь отвечает на вопросы клиентов 24/7.',
      rating: 5
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Основатель, LegalAI',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Обучение модели на юридических документах заняло всего несколько часов. Качество ответов поражает.',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      role: 'HR Director, BigCorp',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Автоматизировали процесс первичного отбора резюме. Экономия времени колоссальная, а точность высокая.',
      rating: 5
    },
    {
      name: 'Игорь Морозов',
      role: 'Data Scientist, FinTech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      content: 'API интеграция прошла гладко. Модель анализирует финансовые отчеты и выдает инсайты за секунды.',
      rating: 5
    },
    {
      name: 'Анна Соколова',
      role: 'Контент-менеджер, MediaGroup',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      content: 'Создали модель для генерации контента. Теперь можем создавать статьи в 5 раз быстрее без потери качества.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Более 10,000 компаний уже используют AI Builder для создания 
            персональных AI моделей и автоматизации процессов.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-center mb-4">
                <Quote className="w-8 h-8 text-primary-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10,000+</div>
            <div className="text-gray-400">Активных пользователей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">50,000+</div>
            <div className="text-gray-400">Обученных моделей</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-400">Время работы</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
