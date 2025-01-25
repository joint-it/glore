import { Button, type ButtonProps } from '@/components/ui/button'

export interface SubmitProps extends ButtonProps {
  loading?: boolean
  loadingText?: string
}

export const Submit = ({ children, loading, loadingText = 'Submitting...', ...props }: SubmitProps) => (
  <Button type="submit" {...props}>
    {loading ? loadingText : children}
  </Button>
)
