//IMPORTS
//-Modules
import React, { useState, useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
//-Styling
import { responsiveWidthHeights, devices } from '../../data/styling/stylingVars'
//-Context
import { ThemeContext } from '../../contexts/ThemeContext'

//STYLE
//-Components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  margin: 0 ${responsiveWidthHeights.w30px};
  @media ${devices.tablet} {
    margin: 0 ${responsiveWidthHeights.w10px};
  }
`
const Title = styled.h2`
  /* font-family: 'Graphik-Semibold'; */
  font-family: 'Space Mono';
  /* font-size: 18px; */
  font-size: 14.5px;
  color: ${ props => props.theme.mode === 'light' ? "#000" :  "#F8F9F8"};
  text-align: center;
  letter-spacing: -0.5;
  .letterContainer{
    display: inline-block;
    overflow: hidden;
    /* height: 20px; */
    /* height: 26px; */
    /* height: 24px; */
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
`
const ThemeBox = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(calc(-50% + 1px));
  width: 30px;
  height: 18px;
  border: 1px solid ${ props => props.theme.mode === 'light' ? "#000" :  "#F8F9F8"};
  .cube{
    position: absolute;
    width: 10px;
    height: 10px;
    background: ${ props => props.theme.mode === 'light' ? "#000" :  "#F8F9F8"};
    margin: 3px;
    right: auto;
    left: 0;
  }
`

//MAIN COMPONENT
const Header = () => {

  const { setTheme } = useContext(ThemeContext)
  const [ themeColorToggle , setThemeColorToggle ] = useState(false)
  const toggleCubeAnim = gsap.timeline()


  const themeColorToggleHandler = () => {
    if(themeColorToggle === false){
      toggleCubeAnim.to(".cube", 0.4, { x: 12 })
      setTheme({ mode: "dark"})
    } else {
      toggleCubeAnim.to(".cube", 0.4, { x: 0 })
      setTheme({ mode: "light"})
    }
    setThemeColorToggle(!themeColorToggle)
  }

  //Anim
  // const [toggleLogoAnim, setToggleLogoAnim] = useState(true)
  const decryptAnim = gsap.timeline({ defaults: {duration: 0.2}, reversed: true })
  const decryptAnim02 = gsap.timeline({ defaults: {duration: 0.2}, reversed: true })

  let letter01_a = useRef()
  let letter01_b = useRef()
  let letter01_c = useRef()
  let letter02_a = useRef()
  let letter02_b = useRef()
  let letter02_c = useRef()
  let letter03_a = useRef()
  let letter03_b = useRef()
  let letter03_c = useRef()
  let letter04_a = useRef()
  let letter04_b = useRef()
  let letter04_c = useRef()
  let letter05_a = useRef()
  let letter05_b = useRef()
  let letter05_c = useRef()
  let letter06_a = useRef()
  let letter06_b = useRef()
  let letter06_c = useRef()
  let letter07_a = useRef()
  let letter07_b = useRef()
  let letter07_c = useRef()
  let letter08_a = useRef()
  let letter08_b = useRef()
  let letter08_c = useRef()
  let letter09_a = useRef()
  let letter09_b = useRef()
  let letter09_c = useRef()
  let letter10_a = useRef()
  let letter10_b = useRef()
  let letter10_c = useRef()
  let letter11_a = useRef()
  let letter11_b = useRef()
  let letter11_c = useRef()
  let letter12_a = useRef()
  let letter12_b = useRef()
  let letter12_c = useRef()
  let letter13_a = useRef()
  let letter13_b = useRef()
  let letter13_c = useRef()
  let letter14_a = useRef()
  let letter14_b = useRef()
  let letter14_c = useRef()
  let letter15_a = useRef()
  let letter15_b = useRef()
  let letter15_c = useRef()
  let letter16_a = useRef()
  let letter16_b = useRef()
  let letter16_c = useRef()
  let letter17_a = useRef()
  let letter17_b = useRef()
  let letter17_c = useRef()
  let letter18_a = useRef()
  let letter18_b = useRef()
  let letter18_c = useRef()

  useEffect( () => {
    decryptAnim
    .to(letter01_a, { yPercent: -100 })
    .to(letter01_b, { yPercent: -100, delay: -0.2 })
    .to(letter02_a, { yPercent: -100, delay: -0.1 })
    .to(letter02_b, { yPercent: -100, delay: -0.2 })
    .to(letter03_a, { yPercent: -100, delay: -0.1 })
    .to(letter03_b, { yPercent: -100, delay: -0.2 })
    .to(letter04_a, { yPercent: -100, delay: -0.1 })
    .to(letter04_b, { yPercent: -100, delay: -0.2 })
    .to(letter05_a, { yPercent: -100, delay: -0.1 })
    .to(letter05_b, { yPercent: -100, delay: -0.2 })
    .to(letter06_a, { yPercent: -100, delay: -0.1 })
    .to(letter06_b, { yPercent: -100, delay: -0.2 })
    .to(letter07_a, { yPercent: -100, delay: -0.1 })
    .to(letter07_b, { yPercent: -100, delay: -0.2 })
    .to(letter08_a, { yPercent: -100, delay: -0.1 })
    .to(letter08_b, { yPercent: -100, delay: -0.2 })
    .to(letter09_a, { yPercent: -100, delay: -0.1 })
    .to(letter09_b, { yPercent: -100, delay: -0.2 })
    .to(letter10_a, { yPercent: -100, delay: -0.1 })
    .to(letter10_b, { yPercent: -100, delay: -0.2 })
    .to(letter11_a, { yPercent: -100, delay: -0.1 })
    .to(letter11_b, { yPercent: -100, delay: -0.2 })
    .to(letter12_a, { yPercent: -100, delay: -0.1 })
    .to(letter12_b, { yPercent: -100, delay: -0.2 })
    .to(letter13_a, { yPercent: -100, delay: -0.1 })
    .to(letter13_b, { yPercent: -100, delay: -0.2 })
    .to(letter14_a, { yPercent: -100, delay: -0.1 })
    .to(letter14_b, { yPercent: -100, delay: -0.2 })
    .to(letter15_a, { yPercent: -100, delay: -0.1 })
    .to(letter15_b, { yPercent: -100, delay: -0.2 })
    .to(letter16_a, { yPercent: -100, delay: -0.1 })
    .to(letter16_b, { yPercent: -100, delay: -0.2 })
    .to(letter17_a, { yPercent: -100, delay: -0.1 })
    .to(letter17_b, { yPercent: -100, delay: -0.2 })
    .to(letter18_a, { yPercent: -100, delay: -0.1 })
    .to(letter18_b, { yPercent: -100, delay: -0.2 })
  }, [decryptAnim])

  useEffect( () => {
    decryptAnim02
    .to(letter01_b, { yPercent: -200 })
    .to(letter01_c, { yPercent: -200, delay: -0.2 })
    .to(letter02_b, { yPercent: -200, delay: -0.1 })
    .to(letter02_c, { yPercent: -200, delay: -0.2 })
    .to(letter03_b, { yPercent: -200, delay: -0.1 })
    .to(letter03_c, { yPercent: -200, delay: -0.2 })
    .to(letter04_b, { yPercent: -200, delay: -0.1 })
    .to(letter04_c, { yPercent: -200, delay: -0.2 })
    .to(letter05_b, { yPercent: -200, delay: -0.1 })
    .to(letter05_c, { yPercent: -200, delay: -0.2 })
    .to(letter06_b, { yPercent: -200, delay: -0.1 })
    .to(letter06_c, { yPercent: -200, delay: -0.2 })
    .to(letter07_b, { yPercent: -200, delay: -0.1 })
    .to(letter07_c, { yPercent: -200, delay: -0.2 })
    .to(letter08_b, { yPercent: -200, delay: -0.1 })
    .to(letter08_c, { yPercent: -200, delay: -0.2 })
    .to(letter09_b, { yPercent: -200, delay: -0.1 })
    .to(letter09_c, { yPercent: -200, delay: -0.2 })
    .to(letter10_b, { yPercent: -200, delay: -0.1 })
    .to(letter10_c, { yPercent: -200, delay: -0.2 })
    .to(letter11_b, { yPercent: -200, delay: -0.1 })
    .to(letter11_c, { yPercent: -200, delay: -0.2 })
    .to(letter12_b, { yPercent: -200, delay: -0.1 })
    .to(letter12_c, { yPercent: -200, delay: -0.2 })
    .to(letter13_b, { yPercent: -200, delay: -0.1 })
    .to(letter13_c, { yPercent: -200, delay: -0.2 })
    .to(letter14_b, { yPercent: -200, delay: -0.1 })
    .to(letter14_c, { yPercent: -200, delay: -0.2 })
    .to(letter15_b, { yPercent: -200, delay: -0.1 })
    .to(letter15_c, { yPercent: -200, delay: -0.2 })
    .to(letter16_b, { yPercent: -200, delay: -0.1 })
    .to(letter16_c, { yPercent: -200, delay: -0.2 })
    .to(letter17_b, { yPercent: -200, delay: -0.1 })
    .to(letter17_c, { yPercent: -200, delay: -0.2 })
    .to(letter18_b, { yPercent: -200, delay: -0.1 })
    .to(letter18_c, { yPercent: -200, delay: -0.2 })
  }, [decryptAnim02])
  
  useEffect( () => {
    decryptAnim.play().delay(0.2)
  }, [decryptAnim])

  // const logoDecryptMouseOVerHandler = () => {
  //   if(toggleLogoAnim === true){
  //     decryptAnim.play()
  //   } else{
  //     decryptAnim.reverse()
  //   }
  //   setToggleLogoAnim(!toggleLogoAnim)
  // }

  return (
    <HeaderContainer>
      <Title onMouseOver={() => decryptAnim02.play()} onMouseOut={() => decryptAnim02.reverse()}>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter01_a = el)}>J</div>
          <div className="letterEncrypted" ref={el => (letter01_b = el)}>K</div>
          <div className="letterDecrypted" ref={el => (letter01_c = el)}>J</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted">.</div>
          <div className="letterEncrypted">.</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted">&nbsp;</div>
          <div className="letterEncrypted">&nbsp;</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter02_a = el)}>E</div>
          <div className="letterEncrypted" ref={el => (letter02_b = el)}>F</div>
          <div className="letterDecrypted" ref={el => (letter02_c = el)}>E</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter03_a = el)}>n</div>
          <div className="letterEncrypted" ref={el => (letter03_b = el)}>o</div>
          <div className="letterDecrypted" ref={el => (letter03_c = el)}>n</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter04_a = el)}>r</div>
          <div className="letterEncrypted" ref={el => (letter04_b = el)}>s</div>
          <div className="letterDecrypted" ref={el => (letter04_c = el)}>r</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter05_a = el)}>i</div>
          <div className="letterEncrypted" ref={el => (letter05_b = el)}>j</div>
          <div className="letterDecrypted" ref={el => (letter05_c = el)}>i</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter06_a = el)}>q</div>
          <div className="letterEncrypted" ref={el => (letter06_b = el)}>r</div>
          <div className="letterDecrypted" ref={el => (letter06_c = el)}>q</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter07_a = el)}>u</div>
          <div className="letterEncrypted" ref={el => (letter07_b = el)}>v</div>
          <div className="letterDecrypted" ref={el => (letter07_c = el)}>u</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter08_a = el)}>e</div>
          <div className="letterEncrypted" ref={el => (letter08_b = el)}>f</div>
          <div className="letterDecrypted" ref={el => (letter08_c = el)}>e</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted">&nbsp;</div>
          <div className="letterEncrypted">&nbsp;</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter09_a = el)}>G</div>
          <div className="letterEncrypted" ref={el => (letter09_b = el)}>H</div>
          <div className="letterDecrypted" ref={el => (letter09_c = el)}>G</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter10_a = el)}>o</div>
          <div className="letterEncrypted" ref={el => (letter10_b = el)}>p</div>
          <div className="letterDecrypted" ref={el => (letter10_c = el)}>o</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter11_a = el)}>m</div>
          <div className="letterEncrypted" ref={el => (letter11_b = el)}>n</div>
          <div className="letterDecrypted" ref={el => (letter11_c = el)}>m</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter12_a = el)}>e</div>
          <div className="letterEncrypted" ref={el => (letter12_b = el)}>f</div>
          <div className="letterDecrypted" ref={el => (letter12_c = el)}>e</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter13_a = el)}>z</div>
          <div className="letterEncrypted" ref={el => (letter13_b = el)}>a</div>
          <div className="letterDecrypted" ref={el => (letter13_c = el)}>z</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted">-</div>
          <div className="letterEncrypted">-</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter14_a = el)}>S</div>
          <div className="letterEncrypted" ref={el => (letter14_b = el)}>T</div>
          <div className="letterDecrypted" ref={el => (letter14_c = el)}>S</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter15_a = el)}>a</div>
          <div className="letterEncrypted" ref={el => (letter15_b = el)}>b</div>
          <div className="letterDecrypted" ref={el => (letter15_c = el)}>a</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter16_a = el)}>l</div>
          <div className="letterEncrypted" ref={el => (letter16_b = el)}>m</div>
          <div className="letterDecrypted" ref={el => (letter16_c = el)}>l</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter17_a = el)}>a</div>
          <div className="letterEncrypted" ref={el => (letter17_b = el)}>b</div>
          <div className="letterDecrypted" ref={el => (letter17_c = el)}>a</div>
        </div>
        <div className="letterContainer">
          <div className="letterDecrypted" ref={el => (letter18_a = el)}>s</div>
          <div className="letterEncrypted" ref={el => (letter18_b = el)}>t</div>
          <div className="letterDecrypted" ref={el => (letter18_c = el)}>s</div>
        </div>
      </Title>
      <div>
        <ThemeBox onClick={themeColorToggleHandler}>
          <div className="cube"/>
        </ThemeBox>
      </div>
    </HeaderContainer>      
  )
}
export default Header;
