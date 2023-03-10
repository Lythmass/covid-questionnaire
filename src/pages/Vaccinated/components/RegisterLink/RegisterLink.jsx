const RegisterLink = (props) => {
  const registerNow =
    props.answer === 'no' ? (
      <h1>
        <br />
        ๐แ แแแแกแขแ แแชแแแก แแแฃแแ
      </h1>
    ) : (
      ''
    );
  return (
    <div className='ml-10 w-1/2'>
      <h1 className='text-xl'>
        {props.text} <br />
        <span>
          {registerNow}
          <a
            target='_blank'
            className='text-cyan-600'
            href='https://booking.moh.gov.ge/'
            rel='noreferrer'
          >
            https://booking.moh.gov.ge/
          </a>
        </span>
      </h1>
    </div>
  );
};

export default RegisterLink;
