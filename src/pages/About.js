import React from 'react';
import AboutCom from '../components/about-page/AboutCom';
import './style.css';

function About(props) {
  return (
    <>
      <div className="title-page-about">
        <h1>About</h1>
      </div>
      <AboutCom
        title="WHO WE "
        color="ARE"
        par="Co-founded by a group of entrepreneurs and Tech Enthusiasts, creating and co-founding new enterprises off the ground by leveraging their cumulative knowledge and resources that are shared among their ventures. Badia Ventures is a high-paced tech startup, where the product is the venture, the prototype is the business model, and ‘shipping code’ means perfect and timely execution."
      />

      <AboutCom
        title="WHAT WE "
        color="DO"
        par="Think of it as a startup that builds startups. Initiation of ventures is done ‘in-house’. We’re building a team of in-house entrepreneurs and source ideas for the team to develop into commercial business opportunities. This does not mean that the innovation behind the venture should be developed in-house – for example, patents or new research from universities or corporations are often the source of the ‘idea’."
      />
      <div
        style={{
          backgroundColor: `black`,
          color: `white`,
          marginTop: `46px`,
          // marginBottom: `161px`,
          // paddingBottom: `103px`,
        }}
      >
        <AboutCom
          color1="white"
          title="Team "
          color="& RESOURCES"
          par="Daring projects are only possible by means of talented execution. By concentratinghighly skilled talents of diverse backgrounds in-house, Badia Ventures can quickly assemble multi- disciplinary teams with the expertise of seasoned professionals whenever a new venture is launched."
          par2=" ‍ Badia Ventures leverage shared assets among their companies, including knowledge, methodologies and services such as Finance, HR and Legal. This results in reduced operational costs as the result of a collaborative ecosystem of “parallel entrepreneurship”, in which lessons learned are shared and the cost of growth and scalability is distributed among the Badia Ventures’ many ventures."
        />

        <AboutCom
          color1="white"
          title="CAPITAL "
          color="& MANAGEMENT"
          par="Companies within Badia Ventures have the benefit of facilitated access to capital. Badia Ventures provide funding for theirventures either by means of a fund of their own or by enabling connections with investors (a combination of both alternatives is also quite common)."
          par2=" ‍ Badia Ventures have a wide range of operational and strategic involvement in the companies they co-found, engaging in activities such as market research, team structuring, product development, financial and legal support, fundraising and various other affairs. Ultimately, they are involved in all aspects of their endeavors on a day-to-day basis."
          par2=" ‍ Badia Ventures leverage shared assets among their companies, including knowledge, methodologies and services such as Finance, HR and Legal. This results in reduced operational costs as the result of a collaborative ecosystem of “parallel entrepreneurship”, in which lessons learned are shared and the cost of growth and scalability is distributed among the Badia Ventures’ many ventures."
        />
      </div>
    </>
  );
}

export default About;
