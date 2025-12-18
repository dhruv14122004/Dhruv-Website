const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 py-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500 pb-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-1">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Dhruv Sharma</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
