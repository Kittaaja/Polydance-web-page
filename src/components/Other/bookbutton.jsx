function BookButton({ text, link }) {
  return (
    <a 
      href={link} 
      className="join-button h4" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      {text}
    </a>
  );
}

export default BookButton;