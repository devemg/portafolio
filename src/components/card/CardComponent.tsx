import './CardComponent.scss';

export const CardComponent = ({children, style}: any) => {
  return (
    <div className='card' style={{
      ...style
    }}>
        {...children}
    </div>
  )
}
