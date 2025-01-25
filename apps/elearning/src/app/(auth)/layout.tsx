import { Box, Flex, Grid } from '@/components/layout'
import { Link } from '@/components/typography'
import { Image } from '@/components/ui'
import { Globe } from '@/components/ui/globe'

export default ({ children }: React.PropsWithChildren) => (
  <Grid className="min-h-svh lg:grid-cols-2">
    <Flex className="gap-4 p-6 md:p-10" direction="col">
      <Flex className="gap-2 md:justify-start" justify="center">
        <Link className="flex items-center gap-2 font-medium" href="">
          <Image alt="" src="/logo.svg" width={25} />
          {'GloRe Certificate'}
        </Link>
      </Flex>
      <Flex align="center" grow justify="center">
        <Box className="max-w-xs" fullWidth>
          {children}
        </Box>
      </Flex>
    </Flex>
    <Box className="hidden bg-olive-100 lg:block" relative>
      <Flex center className="h-full p-32">
        <Globe />
      </Flex>
    </Box>
  </Grid>
)
