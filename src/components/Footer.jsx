
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-4 mt-auto text-center small bg-dark text-light">
      <span>
        &copy; {currentYear} Olawale. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer