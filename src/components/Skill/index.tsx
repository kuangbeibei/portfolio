import { FC, useState, useEffect } from 'react'
import { client } from 'Client'
import { SkillSection, SelectedSkillsWrap, StyledSkillItem, StyledGiTriangleTarget } from "./skill.styled"

const Skills: FC<{}> = () => {
  const [skills, setSkills] = useState<Array<string>>([])
  useEffect(() => {
    const query = '*[_type=="skills"]';
    client.fetch(query).then(data => {
      const [item] = data;
      setSkills(item?.name.split(','));
    })
  }, [])


  return (
    <SkillSection>
      <h2>Skills mostly used</h2>
      <SelectedSkillsWrap>
        {
          skills.map((skill: string) => <StyledSkillItem key={skill}><StyledGiTriangleTarget />{skill}</StyledSkillItem>)
        }
      </SelectedSkillsWrap>
    </SkillSection>
  )
}

export default Skills;
