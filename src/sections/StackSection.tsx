interface StackSectionProps {
  children: React.ReactNode;
}

export const StackSection: React.FC<StackSectionProps> = ({children }) => {
  return (
    <div className={`panel w-full min-h-dvh overflow-hidden box-border`}>{children}</div>
  )
}
