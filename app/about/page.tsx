

'use client'

import { useSearchParams } from 'next/navigation'
import Head from "next/head";

interface IProps {
  dynamicTitle: string;
}

const About: React.FC<IProps> = ({ dynamicTitle }) => {
  const searchParams = useSearchParams();

  const title = searchParams.get('title');

  return (
    <>
      <Head>
        <title>{`${title} | Klihsman`}</title>
      </Head>

      <div>About </div>
    </>
  )
}

export default About;