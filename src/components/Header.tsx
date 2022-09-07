interface props {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

function Header({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95',
}: props) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}
export default Header;
