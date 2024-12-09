import { signUpAction } from '@/app/actions'
import { Stack } from '@/components/layout'
import { Button, Card, Field, FormMessage, Input, type Message } from '@/components/ui'

const Signup = async (props: { searchParams: Promise<Message> }) => {
  const searchParams = await props.searchParams

  if ('message' in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    )
  }

  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>{'Sign up'}</Card.Title>
        <Card.Description>{'Fill in the form below to create an account'}</Card.Description>
      </Card.Header>
      <form>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field label="Email">
              <Input type="email" placeholder="you@example.com" required />
            </Field>
            <Field label="Password">
              <Input type="password" required minLength={8} />
            </Field>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="end">
          <Button variant="outline">{'Cancel'}</Button>
          <Button type="submit" variant="solid" loadingText="Signing up..." formAction={signUpAction}>
            {'Sign in'}
          </Button>
          <FormMessage message={searchParams} />
        </Card.Footer>
      </form>
    </Card.Root>
  )
}

export default Signup
