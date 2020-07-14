//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import Heading from '../global/shared/Heading'
//-Styling
import { devices, fonts, responsiveWidthHeights } from '../../data/styling/stylingVars'


//STYLE
//-Variables
const ulTranslate = "15px"
//-Components
const SectionsOuter = styled.div`
  width: 100%;
  height: calc(100vh - 202px);
  margin-top: 30px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  .section{
    max-width: 650px;
    margin: 0 ${responsiveWidthHeights.w30px} 50px;
    @media ${devices.tablet} {
      margin: 0 auto 50px;
    }

    ul{
      transform:translateX(${ulTranslate});
      width: calc(100% - ${ulTranslate});
      li{
        font-size: ${fonts.fntSz14};
        margin-bottom: ${fonts.fntSz14};
        .bookTitle{
          font-family: ${fonts.fntSemiBold};
          font-weight: 600;
        }
        .bookSubtitle{
          font-family: ${fonts.fntRegular};
          font-weight: normal;
        }
        .bookAuthor{
          font-family: ${fonts.fntItalic};
          font-style: italic;
          font-weight: normal;
        }
      }
    }
  }
`


//MAIN COMPONENT
const Library = () => {
  return (
    <>

      <SectionsOuter>
        <div className="sectionsInner">

          <div className="section">
            <Heading headingName="Technology" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">Crypto</span>
                <span className="bookSubtitle">, How the code rebels beat the goverment- saving privacy in the digital age, </span>
                <span className="bookAuthor">Steven Levy</span>
              </li>
              <li>
                <span className="bookTitle">Computer Science Distilled</span>
                <span className="bookSubtitle">, Learn the art of solving computational problems, </span>
                <span className="bookAuthor">Wladston Ferreira Filho</span>
              </li>
              <li>
                <span className="bookTitle">Blockchain Revolution</span>
                <span className="bookSubtitle">, How the technology behind bitcoin is changing money, business, and the world, </span>
                <span className="bookAuthor">Don Tapscott</span>
                <span className="bookSubtitle"> and </span>
                <span className="bookAuthor">Alex Tapscott</span>
              </li>
              <li>
                <span className="bookTitle">The Internet Of Money</span>
                <span className="bookSubtitle">, Volume 1, </span>
                <span className="bookAuthor">Andreas M. Antonopoulos</span>
              </li>
              <li>
                <span className="bookTitle">The Fourth Industrial Revolution</span>
                <span className="bookSubtitle">, </span>
                <span className="bookAuthor">Klaus Schwab</span>
              </li>
              <li>
                <span className="bookTitle">The Shallows</span>
                <span className="bookSubtitle">, What the internet is doing to our brains, </span>
                <span className="bookAuthor">Nicholas Carr</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <Heading headingName="Design" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">100 Ideas That Changed Graphic Design</span>
                <span className="bookSubtitle">, </span>
                <span className="bookAuthor">Steven Heller</span>
              </li>
              <li>
                <span className="bookTitle">Thinking With Type</span>
                <span className="bookSubtitle">, A critical guide for designers, writers, editors, & students, </span>
                <span className="bookAuthor">Ellen Lupton</span>
              </li>
              <li>
                <span className="bookTitle">Making And Breaking The Grid</span>
                <span className="bookSubtitle">, A graphic design layout workshop, </span>
                <span className="bookAuthor">Timothy Samara</span>
              </li>
              <li>
                <span className="bookTitle">Print Liberation</span>
                <span className="bookSubtitle">, The screen printing primer, </span>
                <span className="bookAuthor">Nick Paparone</span>
              </li>
              <li>
                <span className="bookTitle">Graphic Design Rules</span>
                <span className="bookSubtitle">, 365 essential design dos and don'ts, </span>
                <span className="bookAuthor">Peter Dawson</span>
              </li>
              <li>
                <span className="bookTitle">Know Your Onions: Graphic Design</span>
                <span className="bookSubtitle">, How to think like a creative, act like a businessman and design like a god, </span>
                <span className="bookAuthor">Drew de Soto</span>
              </li>
              <li>
                <span className="bookTitle">Know Your Onions: Web Design</span>
                <span className="bookSubtitle">, Jet propel yourself into the driving seat of a top-class web designer and hurtle towards creative stardom, </span>
                <span className="bookAuthor">Drew de Soto</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <Heading headingName="Behavioural Science" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">Why We Sleep</span>
                <span className="bookSubtitle">, The new science of sleep and dreams, </span>
                <span className="bookAuthor">Matthew Walker</span>
              </li>
              <li>
                <span className="bookTitle">Drive</span>
                <span className="bookSubtitle">, The Surprising Truth About What Motivates Us, </span>
                <span className="bookAuthor">Daniel H. Pink</span>
              </li>
              <li>
                <span className="bookTitle">The Science of Fear</span>
                <span className="bookSubtitle">, How the culture of fear manipulates your brain, </span>
                <span className="bookAuthor">Daniel Gardner</span>
              </li>
              <li>
                <span className="bookTitle">Algorithms To Live By</span>
                <span className="bookSubtitle">, The computer science of human decisions, </span>
                <span className="bookAuthor">Brian Christian</span>
                <span className="bookSubtitle"> and </span>
                <span className="bookAuthor">Tom Griffiths</span>
              </li>
              <li>
                <span className="bookTitle">The Art Of Learning</span>
                <span className="bookSubtitle">, An inner journey to optimal performance, </span>
                <span className="bookAuthor">Josh Waitzkin</span>
              </li>
              <li>
                <span className="bookTitle">Never Eat Alone</span>
                <span className="bookSubtitle">, And other secrets to success, one relationship at a time, </span>
                <span className="bookAuthor">Keith Ferrazzi</span>
              </li>
              <li>
                <span className="bookTitle">The Tipping Point</span>
                <span className="bookSubtitle">, How little things can make a big difference, </span>
                <span className="bookAuthor">Malcolm Gladwell</span>
              </li>
              <li>
                <span className="bookTitle">The Power Of Habit</span>
                <span className="bookSubtitle">, Why we do what we do, and how to change, </span>
                <span className="bookAuthor">Charles Duhigg</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <Heading headingName="Business" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">Mastering The VC Game</span>
                <span className="bookSubtitle">, A venture capital insider reveals how to get from start-up to IPO on your terms, </span>
                <span className="bookAuthor">Jeffrey Bussgang</span>
              </li>
              <li>
                <span className="bookTitle">Rich Dad, Poor Dad</span>
                <span className="bookSubtitle">, What the rich teach their kids about money that the poor and middle class do not, </span>
                <span className="bookAuthor">Robert T. Kiyosaki</span>
              </li>
              <li>
                <span className="bookTitle">Start with Why</span>
                <span className="bookSubtitle">, How great leaders inspire everyone to take action, </span>
                <span className="bookAuthor">Simon Sinek</span>
              </li>
              <li>
                <span className="bookTitle">How Google Works</span>
                <span className="bookSubtitle">, </span>
                <span className="bookAuthor">Eric Schmidt</span>
                <span className="bookSubtitle"> and </span>
                <span className="bookAuthor">Jonathan Rosenberg</span>
              </li>
              <li>
                <span className="bookTitle">The One Minute Manager</span>
                <span className="bookSubtitle">, </span>
                <span className="bookAuthor">Kenneth Blanchard</span>
                <span className="bookSubtitle"> and </span>
                <span className="bookAuthor">Spencer Johnson</span>
              </li>
              <li>
                <span className="bookTitle">Zero To One</span>
                <span className="bookSubtitle">, Notes on startups, or how to build the future, </span>
                <span className="bookAuthor">Peter Thiel</span>
              </li>
              <li>
                <span className="bookTitle">The 4-Hour Workweek</span>
                <span className="bookSubtitle">, Escape 9-5, live anywhere, and join the new rich, </span>
                <span className="bookAuthor">Timothy Ferriss</span>
              </li>
              <li>
                <span className="bookTitle">The $100 Startup</span>
                <span className="bookSubtitle">, Reinvent the way you make a living, do what you love, and create a new future, </span>
                <span className="bookAuthor">Chris Guillebeau</span>
              </li>
              <li>
                <span className="bookTitle">The Lean Startup</span>
                <span className="bookSubtitle">, How today's entrepreneurs use continuous innovation to create radically successful businesses, </span>
                <span className="bookAuthor">Eric Ries</span>
              </li>
              <li>
                <span className="bookTitle">The Innovator's Dilemma</span>
                <span className="bookSubtitle">, When new technologies cause great firms to fail, </span>
                <span className="bookAuthor">Clayton M. Christensen</span>
              </li>
              <li>
                <span className="bookTitle">Getting to Yes</span>
                <span className="bookSubtitle">, Negotiating agreement without giving in, </span>
                <span className="bookAuthor">Roger Fisher</span>
              </li>
            </ul>
          </div>

          <div className="section">
            <Heading headingName="Biographies" classProp="heading" />
            <ul>
              <li>
                <span className="bookTitle">Creative Capital</span>
                <span className="bookSubtitle">, Georges Doriot and the Birth of Venture Capital, </span>
                <span className="bookAuthor">Spencer E. Ante</span>
              </li>
              <li>
                <span className="bookTitle">Elon Musk</span>
                <span className="bookSubtitle">, Tesla, SpaceX, and the Quest for a Fantastic Future, </span>
                <span className="bookAuthor">Ashlee Vance</span>
              </li>
            </ul>
          </div>



        </div>
      </SectionsOuter>
      
    </>      
  )
}
export default Library;

