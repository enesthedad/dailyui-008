import portalImg from "./portal-PhotoRoom.png-PhotoRoom.png";
const Message = () => {
  return (
    <div className='container'>
      <div className='top'>
        <h2>4</h2>
        <img src={portalImg} alt='' />
        <h2>4</h2>
      </div>

      <div className='bottom'>
        <h3>OOOOOPS</h3>
        <p>Something went wrong</p>
      </div>
    </div>
  );
};

export default Message;
