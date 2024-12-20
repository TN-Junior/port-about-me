import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Links } from '../components/Links'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title } from '../styles/styles'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Tary Junior </title>
        <meta
          name="description"
          content="Meu nome é Tary Junior, sou um desenvolvedor fullstack
          do Brasil."
        />
        <meta property="og:title" content="About | Tary Junior" />
        <meta
          property="og:description"
          content="Meu nome é Tary Junior, sou um desenvolvedor fullstack do Brasil."
        />
      </Head>

      <Header />
      <Links />
      <ScrollTop />
      <Section>
        <S.AboutContainer>
          <Title>
            <p>../about</p>
            Sobre
            <span>
              <BiUserPin /> About
            </span>
          </Title>

          <S.AboutContent>
            <S.AboutImage>
              <img
                className="AboutImg"
                src="/photo.jpeg"
                alt="Imagem de perfil Tary"
              />

              <div className="links">
                <ul>
                  <Link href={'https://github.com/tn-junior'}>
                    <a target="_blank" aria-label="Link para o Github">
                      <AiFillGithub size={25} /> @TN-Junior
                    </a>
                  </Link>
                  <Link href={'https://www.linkedin.com/in/evander-inacio/'}>
                    <a target="_blank" aria-label="Link para o Linkedin">
                      <BsLinkedin size={25} /> @Tary Nascimento Rego Junior
                    </a>
                  </Link>
                  <Link
                    href={'https://api.whatsapp.com/send?phone=5581984417364'}
                  >
                    <a target="_blank" aria-label="Link para o WhatsApp">
                      <RiWhatsappFill size={25} /> +55 (81) 98441-7364
                    </a>
                  </Link>
                  <Link
                    href={'https://www.discordapp.com/users/tary junior'}
                  >
                    <a
                      className="dc"
                      target="_blank"
                      aria-label="Link para o Discord"
                    >
                      <FaDiscord size={25} /> @tary_junior
                    </a>
                  </Link>
                  <Link href={'mailto:tn-junior@hotmail.com'}>
                    <a
                      className="email"
                      target="_blank"
                      aria-label="Link para o email"
                    >
                      <GrMail size={25} /> @tn-junior@hotmail.com
                    </a>
                  </Link>
                </ul>
              </div>

              <S.AboutContact>
                <h3>
                  Vamos conversar, podemos compartilhar ideias?
                </h3>
                <p>Me mande uma mensagem! 😉</p>
                <Link href={'/contact'}>
                  <a>
                    <ButtonAlt>Contato</ButtonAlt>
                  </a>
                </Link>
              </S.AboutContact>
            </S.AboutImage>
            <S.AboutDescription>
              <p>
              Sou apaixonado por tecnologia e entusiasta do desenvolvimento web e backend. Atualmente, aplico minhas habilidades como Data Scientist na Prefeitura da Cidade do Recife, unindo desenvolvimento de software e análise de dados para entregar soluções escaláveis e impactantes.
              Estou sempre em busca de novos desafios, aprendendo tecnologias inovadoras e buscando formas de melhorar a eficiência e a escalabilidade dos projetos em que atuo.
              
              </p>
              <p> {/*
              Principais Especialidades:
              </p>
              <p>
              - Deep Learning: Desenvolveu um sistema de recomendação de última geração para comércio eletrônico usando Python, TensorFlow, AWS e LLMs.
              - IA Generativa (LLM): Desenvolvimento de um sistema generativo aumentado de recuperação (RAG) para criar aplicações de chat conversacional a partir de dados tabulares e textuais, usando LLMs e VectorDBs.
              - MLOps/Engenharia de ML: Construção das pipelines de transformação, treinamento, monitoramento, otimização e inferência para modelos de Aprendizado de Máquina e Aprendizado Profundo.
              - Aprendizado Não Supervisionado: Melhorou estratégias de negócios através de técnicas de segmentação de clientes.
              - Teste A/B: Avaliou e melhorou o desempenho dos modelos em 4,25x. Desenvolveu análise de inferência causal.
              - Pipelines de Dados: Construiu várias infraestruturas de Data Lake baseadas na nuvem usando Apache Airflow, Amazon Athena, Glue, EC2, Redshift e Amazon S3.
              - Modelagem Estatística: Implementou modelos de classificação de aprendizado de máquina, incluindo projetos para detecção de fraude.
              </p>
              <p> */}
              Habilidades Adicionais:
              </p>
              <p>
              

              Práticas Ágeis: Experiência em metodologias ágeis, incluindo Scrum e Kanban, para gerenciar e entregar projetos de software.
              Resolução de Problemas: Proativo na identificação e resolução de problemas técnicos complexos, sempre buscando a solução mais eficiente e eficaz.
              Programação e Depuração: Hábil na refatoração e depuração de código, com uma abordagem sistemática para melhorar a qualidade do software.
              </p>
              
              
            </S.AboutDescription>
          </S.AboutContent>
        </S.AboutContainer>
      </Section>
      <Footer />
    </>
  )
}
