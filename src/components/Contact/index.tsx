/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo } from 'phosphor-react'

export function Contact() {
  return (
    <Section>
      <Title>
        <p>../contact</p>
        Contato
        <span>
          <Envelope /> Contact
        </span>
      </Title>
      <Description>
        Estou sempre aberto a novas oportunidades de trabalho ou colaborando em
        alguns novos projetos incríveis. Basta preencher o formulário que
        retornarei 💪
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <BsWhatsapp size={22} color="#00EE00" /> WhatsApp{' '}
            </h4>
            <Link href="https://api.whatsapp.com/send?phone=5581984417364">
              <a target="_blank">
                <span>+55 81 98441-7364</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00EE00" /> Email{' '}
            </h4>
            <Link href="mailto:tary.junior47@gmail.com">
              <a target="_blank">
                <span>tary.junior47@gmail.com</span>
              </a>
            </Link>
          </div>
        </ContactContent>

        <Form />
      </ContainerContact>
    </Section>
  )
}
