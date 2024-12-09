import Image from 'next/image'

const Home = () => (
  <main lang="en">
    <h1>{'Welcome!'}</h1>
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p>
        {'Get started by editing'}
        <code className="font-mono font-bold">{`pages/index.tsx`}</code>
      </p>
      <div>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          {'By'}
          <Image alt="Vercel Logo" className="dark:invert" height={24} priority src="/vercel.svg" width={100} />
        </a>
      </div>
    </div>

    <div>
      <Image
        alt="Next.js Logo"
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        height={37}
        priority
        src="/next.svg"
        width={180}
      />
    </div>

    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          {'Docs '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {'-&gt;'}
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {'Find in-depth information about Next.js features and API.'}
        </p>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          {'Learn'}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {'-&gt;'}
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {'Learn about Next.js in an interactive course with&nbsp;quizzes!'}
        </p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          {'Templates'}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {'-&gt;'}
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{'Explore starter templates for Next.js.'}</p>
      </a>

      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2 className="mb-3 text-2xl font-semibold">
          {'Deploy'}{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            {'-&gt;'}
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {'Instantly deploy your Next.js site to a shareable URL with Vercel.'}
        </p>
      </a>
    </div>
  </main>
)

export default Home
