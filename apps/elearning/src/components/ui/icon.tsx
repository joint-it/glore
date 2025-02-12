export interface IconComponent extends React.ForwardRefExoticComponent<IconProps> {}

export interface IconProps extends React.RefAttributes<SVGSVGElement> {
  className?: string
}

export {
  ArrowUpRight as IconArrowUpRight,
  BookText as IconBookText,
  Check as IconCheck,
  ChevronDown as IconChevronDown,
  ChevronRight as IconChevronRight,
  ChevronUp as IconChevronUp,
  ChevronsUpDown as IconChevronsUpDown,
  Circle as IconCircle,
  EyeClosed as IconEyeClosed,
  Eye as IconEye,
  GalleryVerticalEnd as IconGalleryVerticalEnd,
  House as IconHouse,
  Languages as IconLanguages,
  Loader as IconLoader,
  Monitor as IconMonitor,
  Moon as IconMoon,
  PackageSearch as IconPackageSearch,
  PanelLeft as IconPanelLeft,
  Sun as IconSun,
  User as IconUser,
  X as IconX,
} from 'lucide-react'
