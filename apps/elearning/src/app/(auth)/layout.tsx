import { Flex } from '@/components/ui/flex'
import { Globe } from '@/components/ui/globe'
import { Link } from '@/components/ui/link'
import { Logo } from '@/components/ui/logo'

export default ({ children }: React.PropsWithChildren) => (
  <Flex className="min-h-svh overflow-hidden p-6 md:p-10" direction="col" gap={4} relative>
    <Flex gap={2} justify="between">
      <Link className="text-md flex items-center gap-2 font-medium" href="">
        <Logo width={25} />
        {'GloRe Certificate'}
      </Link>
      <Flex gap={2}>{/* <LocaleSwitcher /> */}</Flex>
    </Flex>
    <Flex align="center" className="mb-12" fullWidth grow justify="center">
      {children}
    </Flex>
    <Globe className="absolute bottom-[-600px] left-[50%] -z-10 w-[1200px] transform-[translateX(-50%)]" />
  </Flex>
)
