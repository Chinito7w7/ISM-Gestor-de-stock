interface Props{
    title: string;
    subtitle:string;
}

export const CustomTitle = ({title,subtitle}:Props) => {
  return (
    <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
    </div>
  )
}
