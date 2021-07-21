import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainPage = () => {

  //! The below is the GET request to the API, storing all info in state

  const [info, setInfo] = useState()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://www.mocky.io/v2/5dece3d333000052002b9037')
      setInfo(data)
    }
    getData()
  }, [])

  // console.log(info)

  if (!info) return null

  //! The below is converting the article creation date to display how long ago it was created

  const articleDate = info.date
  const newDate = new Date(articleDate)
  // console.log(newDate)
  const todayDate = new Date()
  // console.log(todayDate)
  const difference = (todayDate.getFullYear() - newDate.getFullYear())
  // console.log(difference)


  //! Define an array of all pharagraphs to later Remove HTML tags from each paragraph

  const paragraphs = [info.acf.widgets[0].paragraph,
    info.acf.widgets[2].paragraph,
    info.acf.widgets[4].paragraph,
    info.acf.widgets[6].paragraph,
    info.acf.widgets[8].paragraph,
    info.acf.widgets[10].paragraph,
    info.acf.widgets[12].paragraph
  ]
 
  console.log('paragraph',paragraphs)


  return (
    <div className="section">
      <div className="container">
        <div className="mainPage">
          <p>{info.acf.category.name}</p>
          <h1>{info.title.rendered}</h1>
          <p>{`${difference} years ago`}</p>
          <ul className="social-media-links">
            <li>
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1654761391452800&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.3%2Fdialog%2Fshare%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df14025809754fb4%2526domain%253Dwww.stylist.co.uk%2526origin%253Dhttps%25253A%25252F%25252Fwww.stylist.co.uk%25252Ff242e0e4278cbc4%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df12ae0bb8872098%2526domain%253Dwww.stylist.co.uk%2526origin%253Dhttps%25253A%25252F%25252Fwww.stylist.co.uk%25252Ff242e0e4278cbc4%2526relation%253Dopener%2526frame%253Df216fc3213a4e%2526result%253D%252522xxRESULTTOKENxx%252522%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.stylist.co.uk%252Flong-reads%252Ffriendship-friends-whatsapp-facebook-messenger-social-media-group-chat-best-friends-psychology-advice%252F233383%253Futm_source%253Dfacebook%2526utm_medium%253Dshare%2526utm_campaign%253Dshare-buttons%26client_id%3D1654761391452800%26ret%3Dlogin%26sdk%3Djoey%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.stylist.co.uk%252Flong-reads%252Ffriendship-friends-whatsapp-facebook-messenger-social-media-group-chat-best-friends-psychology-advice%252F233383%253Futm_source%253Dfacebook%2526utm_medium%253Dshare%2526utm_campaign%253Dshare-buttons&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df12ae0bb8872098%26domain%3Dwww.stylist.co.uk%26origin%3Dhttps%253A%252F%252Fwww.stylist.co.uk%252Ff242e0e4278cbc4%26relation%3Dopener%26frame%3Df216fc3213a4e%26result%3D%257B%2522error_code%2522%253A4201%252C%2522error_message%2522%253A%2522User%2Bcanceled%2Bthe%2BDialog%2Bflow%2522%257D%26error_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%26e2e%3D%257B%257D&display=popup&locale=en_GB">
                Share FB
              </a>
            </li>
            <li>
              <a href="https://twitter.com/intent/tweet?text=Whatsapp%20and%20Facebook%20Messenger%3A%20how%20group%20chat%20is%20changing%20the%20dynamic%20of%20our%20friendships&url=https%3A%2F%2Fwww.stylist.co.uk%2Flong-reads%2Ffriendship-friends-whatsapp-facebook-messenger-social-media-group-chat-best-friends-psychology-advice%2F233383%3Futm_source%3Dtwitter%26utm_medium%3Dshare%26utm_campaign%3Dshare-buttons&via=stylistmagazine">
                Share Twitter
              </a>
            </li>
          </ul>
          <p>Written by <a href="https://www.stylist.co.uk/author/katie-bishop">{info._embedded.author[0].name}</a></p>
          <h3>{info.acf.standfirst}</h3>
          <p>{paragraphs[0].replace(/(<([^>]+)>)/gi, '')}</p>
        </div>
      </div>
    </div>


  )


}

export default MainPage