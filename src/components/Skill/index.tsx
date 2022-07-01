import { FC } from 'react'
import { SkillSection, SelectedSkillsWrap, StyledSkillItem, StyledGiTriangleTarget } from "./skill.styled"

const Skills: FC<{}> = () => {
  return (
    <SkillSection>
      <h2>Skills mostly used</h2>
      <SelectedSkillsWrap>
        <StyledSkillItem><StyledGiTriangleTarget />react</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />nextjs</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />typescript</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />vue</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />nodejs</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />tailwind</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />styled components</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />materialUi</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />graphQl</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />solidity</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />web3.js</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />ether.js</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />git</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />webpack</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />vite</StyledSkillItem>
        <StyledSkillItem><StyledGiTriangleTarget />vercel</StyledSkillItem>
      </SelectedSkillsWrap>
    </SkillSection>
  )
}

export default Skills;
