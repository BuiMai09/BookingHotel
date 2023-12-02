import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Tiết kiệm thời gian, tiết kiệm tiền!</h1>
      <span className="mailDesc">Đăng nhập để nhập những ưu đãi mới nhất</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Đăng ký</button>
      </div>
    </div>
  )
}

export default MailList