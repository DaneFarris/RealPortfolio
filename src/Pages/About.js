import React, { useEffect, useContext } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Video from "../Components/Video/Video";
import PageWrap from "./Page.style";
import LargeCard from "../Components/UI/LargeCard";
import CanvasContext from "../Context/CanvasContext";
const About = ({ vp, page }) => {
  // canvas vars from context
  let { canvasVars, setCanvasVars } = useContext(CanvasContext);
  let { center, zModFunc } = canvasVars;

  //this is stupid and so am I
  useEffect(() => {
    if (vp.current.scrollTop !== 0) {
      vp.current.scrollTop = 0;
    }
  }, [vp]);
  return (
    <PageWrap>
      <NavBar page={page} />
      <Video />
      <LargeCard onClick={() => zModFunc(0.1)}>
        For those who have seen the Earth from space, and for the hundreds and
        perhaps thousands more who will, the experience most certainly changes
        your perspective. The things that we share in our world are far more
        valuable than those which divide us. It suddenly struck me that that
        tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one
        eye, and my thumb blotted out the planet Earth. I didn’t feel like a
        giant. I felt very, very small. Science has not yet mastered prophecy.
        We predict too much for the next year and yet far too little for the
        next 10. We choose to go to the moon in this decade and do the other
        things, not because they are easy, but because they are hard, because
        that goal will serve to organize and measure the best of our energies
        and skills, because that challenge is one that we are willing to accept,
        one we are unwilling to postpone, and one which we intend to win. There
        can be no thought of finishing for ‘aiming for the stars.’ Both
        figuratively and literally, it is a task to occupy the generations. And
        no matter how much progress one makes, there is always the thrill of
        just beginning. As I stand out here in the wonders of the unknown at
        Hadley, I sort of realize there’s a fundamental truth to our nature, Man
        must explore . . . and this is exploration at its greatest. Never in all
        their history have men been able truly to conceive of the world as one:
        a single sphere, a globe, having the qualities of a globe, a round earth
        in which all the directions eventually meet, in which there is no center
        because every point, or none, is center — an equal earth which all men
        occupy as equals. The airman’s earth, if free men make it, will be truly
        round: a globe in practice, not in theory. To be the first to enter the
        cosmos, to engage, single-handed, in an unprecedented duel with
        nature—could one dream of anything more? There can be no thought of
        finishing for ‘aiming for the stars.’ Both figuratively and literally,
        it is a task to occupy the generations. And no matter how much progress
        one makes, there is always the thrill of just beginning. We are all
        connected; To each other, biologically. To the earth, chemically. To the
        rest of the universe atomically.
      </LargeCard>
    </PageWrap>
  );
};
export default About;
