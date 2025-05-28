import React from 'react'
import './style/Home.scss'
import Hero from './components/Hero'
import backImage from '../../assets/images/houseview.jpg'

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        // overflow: 'hidden'
      }}
    >
      <div className='home_main_container'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maiores facere officiis! Tempora omnis illo mollitia, quos cumque in qui. Veritatis tempora aperiam explicabo architecto, ullam fuga, ducimus sequi laudantium ex voluptas tempore quo atque nisi placeat repellat dignissimos? Facere suscipit optio reprehenderit ad repudiandae eius minus ex vero nesciunt, eos eaque debitis repellendus est! Nemo eveniet quae eaque animi magnam placeat quos totam asperiores eum. Minus, natus, aut nihil hic voluptatem consequatur molestias quia non impedit facere, dignissimos voluptate odit. Tempore quos est atque delectus at quae aspernatur, quidem eligendi sunt ipsam officia eaque libero labore. Recusandae, itaque quidem.
      </div>

      <Hero />
    </div>
  )
}

export default Home