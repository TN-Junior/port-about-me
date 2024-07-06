import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Tary Junior</h4>
      <div className="links">
        <Link href={'https://github.com/tn-junior'}>
          <a target="_blank" aria-label="Link para o Github">
            <FiGithub />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/tarynascimento/'}>
          <a target="_blank" aria-label="Link para o Linkedin">
            <FiLinkedin />
          </a>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=5581984417364'}>
          <a target="_blank" aria-label="Link para entrar em contato via whatsapp">
            <FaWhatsapp />
          </a>
        </Link>
      </div>
    </FooterContainer>
  )
}
