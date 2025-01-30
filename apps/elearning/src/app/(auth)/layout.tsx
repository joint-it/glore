import { box, Globe, Image, Link, LocaleSwitcher } from '@/components/ui'

export default ({ children }: React.PropsWithChildren) => (
  <box.flex className="min-h-svh overflow-hidden p-6 md:p-10" direction="col" gap={4} relative>
    <box.flex gap={2} justify="between">
      <Link className="text-md flex items-center gap-2 font-medium" href="">
        <Image alt="" src="/logo.svg" width={25} />
        {'GloRe Certificate'}
      </Link>
      <box.flex gap={2}>
        <LocaleSwitcher />
      </box.flex>
    </box.flex>
    <box.flex align="center" className="mb-12" fullWidth grow justify="center">
      {children}
    </box.flex>
    <Globe className="absolute bottom-[-600px] left-[50%] -z-10 w-[1200px] transform-[translateX(-50%)]" />
  </box.flex>
)
