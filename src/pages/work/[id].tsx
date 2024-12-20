
{/*
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import works from '../../data/works'; // Certifique-se de que o arquivo `works` existe
import { Work } from '../../types/Work';

import * as S from '../../styles/work';
import { ButtonAlternatives, ButtonSecondary } from '../../styles/styles';
import { Footer } from '../../components/Footer';
import { ArrowLeft } from 'phosphor-react';

interface WorkProps {
  work: Work;
}

export default function Projeto({ work }: WorkProps) {
  if (!work) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <Head>
        <title>{work.title} | Tary Junior</title>
        <meta name="description" content={work.description} />
        <meta property="og:title" content={work.title} />
        <meta property="og:description" content={work.description} />
        <meta property="og:image" content={work.imgUrl} />
        <meta property="og:image:secure_url" content={work.imgUrl} />
        <meta name="twitter:image" content={work.imgUrl} />
        <meta name="twitter:image:src" content={work.imgUrl} />
      </Head>

      <S.WorkContainer>
        <S.WorkBanner imgUrl={work.imgUrl}>
          <div className="bannerImg" />
          <div className="title">
            <Image width={55} height={55} src={work.logo} alt={work.title} />
            <h1>{work.title}</h1>
          </div>
          <h2>{work.subTitle}</h2>
          <span>{work.date}</span>
          <p>{work.description}</p>

          <div className="tags">
            {work.tags.map(tag => (
              <ul key={tag.id}>
                <Image width={40} height={40} src={tag.icon} alt={tag.name} />
                <p>{tag.name}</p>
              </ul>
            ))}
          </div>

          <Link href={'/'}>
            <ButtonAlternatives>
              <ArrowLeft
                style={{ marginBottom: '-0.1rem' }}
                weight="bold"
                size={16}
              />
              Voltar
            </ButtonAlternatives>
          </Link>
        </S.WorkBanner>

        <S.WorkDescription>
          {work.prints.map(print => (
            <S.WorkContent key={print.id}>
              <div className="workItem">
                <div className="text">
                  <h3>{print.name}</h3>
                  <p>{print.description}</p>
                </div>
                <Image
                  width={700}
                  height={400}
                  src={print.image}
                  alt={print.name}
                />
              </div>
            </S.WorkContent>
          ))}
        </S.WorkDescription>

        <Link href={'/#work'}>
          <ButtonSecondary>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />
            Voltar
          </ButtonSecondary>
        </Link>
      </S.WorkContainer>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const workId = params.id;

  // Buscando o trabalho correspondente
  const work = works.find(work => work.url === workId);

  if (!work) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work,
    },
    revalidate: 60, // Revalidação a cada 60 segundos
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Gerando paths com base nos dados
  const paths = works.map(work => ({
    params: { id: work.url },
  }));

  return {
    paths,
    fallback: 'blocking', // Gera página sob demanda se não estiver em cache
  };
};
*/}

export {};