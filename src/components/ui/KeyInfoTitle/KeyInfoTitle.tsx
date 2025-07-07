interface Props {
  title: string
}

function KeyInfoTitle({ title }: Props) {
  return <p className="display-5 fw-bold">{title}</p>
}

export { KeyInfoTitle }
