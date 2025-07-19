'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Users, BookOpen, DollarSign, Briefcase, MapPin, Bell, Heart, Award, TrendingUp } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    {
      title: 'Opportunities',
      items: [
        { name: 'Browse Jobs', href: '/jobs', icon: Briefcase, description: 'Find inclusive job opportunities' },
        { name: 'Remote Work', href: '/remote-jobs', icon: MapPin, description: 'Work from anywhere positions' },
        { name: 'Internships', href: '/internships', icon: TrendingUp, description: 'Entry-level opportunities' }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Skill Building', href: '/resources', icon: BookOpen, description: 'Free learning resources' },
        { name: 'Mentorship', href: '/mentorship', icon: Users, description: 'Connect with mentors' },
        { name: 'Success Stories', href: '/stories', icon: Award, description: 'Inspiring journeys' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Funding', href: '/funding', icon: DollarSign, description: 'Grants and financial support' },
        { name: 'Community', href: '/community', icon: Heart, description: 'Join our network' },
        { name: 'Notifications', href: '/notifications', icon: Bell, description: 'Stay updated' }
      ]
    }
  ]

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                WomenRise
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 flex items-center space-x-1">
                  <span>{menu.title}</span>
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="grid gap-3">
                      {menu.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          className="group/item flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                        >
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded-lg group-hover/item:from-purple-200 group-hover/item:to-pink-200 transition-colors">
                            <item.icon className="h-4 w-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 group-hover/item:text-purple-600 transition-colors">
                              {item.name}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/jobs"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-2 pt-4 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {menuItems.map((menu, menuIndex) => (
                  <div key={menuIndex} className="space-y-2">
                    <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {menu.title}
                    </div>
                    {menu.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        custom={menuIndex * 3 + itemIndex}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium hover:bg-purple-50 hover:text-purple-600 transition-colors group"
                        >
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded-lg group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                            <item.icon className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-purple-600">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                ))}
                <motion.div
                  custom={10}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-4 px-3"
                >
                  <a
                    href="/jobs"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                  >
                    Get Started
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar