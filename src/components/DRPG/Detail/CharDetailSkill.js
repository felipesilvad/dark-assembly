import React, { useState, useEffect } from 'react';
import db from '../../../firebase';
import { Image } from 'react-bootstrap';


const CharDetailSkill = ({id, type, ne, wmlv}) => {
  const skillRef = db.firestore().collection('games').doc('DRPG').collection('Skills').doc(id)
  const [skill, setSkill] = useState('');

  useEffect(() => {
    skillRef.get().then((skill) => {
      const newSkill = skill.data();
      setSkill(newSkill)
    })
  }, [])

  const skill_staff = require('../../../assets/DRPG/icons/skill/skill_staff.png');
  const skill_humanoid = require('../../../assets/DRPG/icons/skill/skill_humanoid.png');
  const skill_monster = require('../../../assets/DRPG/icons/skill/skill_monster.png');

  const pow_rank_A = require('../../../assets/DRPG/icons/skill/pow_rank_a.png');
  const pow_rank_B = require('../../../assets/DRPG/icons/skill/pow_rank_b.png');
  const pow_rank_C = require('../../../assets/DRPG/icons/skill/pow_rank_c.png');
  const pow_rank_D = require('../../../assets/DRPG/icons/skill/pow_rank_d.png');
  const pow_rank_E = require('../../../assets/DRPG/icons/skill/pow_rank_e.png');
  const pow_rank_F = require('../../../assets/DRPG/icons/skill/pow_rank_f.png');
  const pow_rank_G = require('../../../assets/DRPG/icons/skill/pow_rank_g.png');
  const pow_rank_S = require('../../../assets/DRPG/icons/skill/pow_rank_s.png');
  const pow_rank_SS = require('../../../assets/DRPG/icons/skill/pow_rank_ss.png');
  const pow_rank_plus = require('../../../assets/DRPG/icons/skill/pow_rank_plus.png');

  const range_icon_ally = require('../../../assets/DRPG/icons/skill/range_icon_ally.png');
  const range_icon_ally_all = require('../../../assets/DRPG/icons/skill/range_icon_ally_all.png');
  const range_icon_enemy = require('../../../assets/DRPG/icons/skill/range_icon_enemy.png');
  const range_icon_enemy_all = require('../../../assets/DRPG/icons/skill/range_icon_enemy_all.png');

  return (
    <div key={id} className="gray-bg e-bg" id={id} >
      <div className="d-flex justify-content-between border-b">
        <div className="d-flex skill-in">
          {(skill.type === "Unique Skill") ? (
            (type === 'humanoid') ? (
              <Image className="icon-skill" src={skill_humanoid} />
            ) : (
              <Image className="icon-skill" src={skill_monster} />
            )
          ) : ('')}
          {(skill.type === "Spell") ? (
            <Image className="icon-skill" src={skill_staff} />
          ) : ('')}
          {(skill.type === "Weapon Skill") ? (
            !!skill.weapon &&(
              <Image src={require(`../../../assets/DRPG/icons/weapons/${skill.weapon}.png`)} className="icon-range" />
            )
          ) : ('')}
          <h3 className="pt-1 pl-1">{skill.title}</h3>
        </div>
        {!ne ? (
          <div className="d-flex skill-in border-l">
            {(skill.type === "Spell") ? (
              <h6 className="pt-3 pr-2 stat-txt">Wm</h6>
            ) : (
              <h6 className="pt-3 pr-2 stat-txt">{skill.unlock}</h6>
            )}
            {(skill.type === "Spell") ? (
              <>
                <Image src={require(`../../../assets/DRPG/icons/weapons/Staff.png`)} className="icon-range" />
                <h6 className="pt-3 pr-2 stat-txt">Lv</h6>
              </>
            ) : (
              !!skill.weapon &&(
                <>
                  <Image src={require(`../../../assets/DRPG/icons/weapons/${skill.weapon}.png`)} className="icon-range" />
                  <h6 className="pt-3 pr-2 stat-txt">Lv</h6>
                </>
              )
            )}
            {(skill.type === "Spell") ? (
              <h3 className="pt-1 pl-0 pr-2">{wmlv}</h3>
            ) : (
              <h3 className="pt-1 pl-0 pr-2">{skill.unlockInt}</h3>
            )}
          </div>
        ) : ('')}
      </div>
      <div className="d-flex border-b">
        <div className="d-flex skill-in pt-2 border-r">
          {!!skill.pwr && (
            <>
              {(skill.pwr === "G") ? (<Image className="icon-rank" src={pow_rank_G} />) : ('')}
              {(skill.pwr === "G+") ? (<><Image className="icon-rank" src={pow_rank_G} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "F") ? (<Image className="icon-rank" src={pow_rank_F} />) : ('')}
              {(skill.pwr === "F+") ? (<><Image className="icon-rank" src={pow_rank_F} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "E") ? (<Image className="icon-rank" src={pow_rank_E} />) : ('')}
              {(skill.pwr === "E+") ? (<><Image className="icon-rank" src={pow_rank_E} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "D") ? (<Image className="icon-rank" src={pow_rank_D} />) : ('')}
              {(skill.pwr === "D+") ? (<><Image className="icon-rank" src={pow_rank_D} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "C") ? (<Image className="icon-rank" src={pow_rank_C} />) : ('')}
              {(skill.pwr === "C+") ? (<><Image className="icon-rank" src={pow_rank_C} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "B") ? (<Image className="icon-rank" src={pow_rank_B} />) : ('')}
              {(skill.pwr === "B+") ? (<><Image className="icon-rank" src={pow_rank_B} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "A") ? (<Image className="icon-rank" src={pow_rank_A} />) : ('')}
              {(skill.pwr === "A+") ? (<><Image className="icon-rank" src={pow_rank_A} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "S") ? (<Image className="icon-rank" src={pow_rank_S} />) : ('')}
              {(skill.pwr === "S+") ? (<><Image className="icon-rank" src={pow_rank_S} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
              {(skill.pwr === "SS") ? (<Image className="icon-rank" src={pow_rank_SS} />) : ('')}
              {(skill.pwr === "SS+") ? (<><Image className="icon-rank" src={pow_rank_SS} /><Image className="icon-rank-plus" src={pow_rank_plus} /></>) : ('')}
            </>
          )}
        </div>
        <div className="d-flex skill-in border-r">
          <h6 className="pt-3 pr-2 stat-txt">Element</h6>
          {(skill.element === "N/A") ? (
            <h3 class="pt-1">N/A</h3>
          ) : (
            !!skill.element && (
              <Image src={require(`../../../assets/DRPG/icons/${skill.element}.png`)} className="icon-range" />
            )
          )}
        </div>
        <div className="d-flex skill-in">
          <h6 className="pt-3 stat-txt">Target</h6>
          {!!skill.target && (
            <>
              {(skill.target === "One Enemy") ? (
                <><Image className="icon-range" src={range_icon_enemy} /> <h3 className="pt-3 pl-0 pr-2 main-e-color e-type text-capitalize">One</h3></>
              ) : ('')}
              {(skill.target === "All Enemies") ? (
                <><Image className="icon-range" src={range_icon_enemy_all} /> <h3 className="pt-3 pl-0 pr-2 main-e-color e-type text-capitalize">All</h3></>
              ) : ('')}
              {(skill.target === "One Ally") ? (
                <><Image className="icon-range" src={range_icon_ally} /> <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">One</h3></>
              ) : ('')}
              {(skill.target === "All Allies") ? (
                <><Image className="icon-range" src={range_icon_ally_all} /> <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">All</h3></>
              ) : ('')}
              {(skill.target === "Self") ? (
                <h3 className="pt-3 pl-0 pr-2 sub-e-color e-type text-capitalize">Self</h3>
              ) : ('')}
            </>
          )}
        </div>
      </div>
      <div className="d-flex ">
        {!!skill.stat && (
          <div className="d-flex skill-in border-r">
            <h6 className="pt-3 pr-2 stat-txt">Stat</h6>
            <h3 className={`pl-0 pr-2 ${skill.stat}-color e-type`}>{skill.stat}</h3>
          </div>
        )}
        <div className="d-flex skill-in border-r">
          <h6 className="pt-3 pr-2 stat-txt">SP</h6>
          <h3 className="pt-1">{skill.sp}</h3>
        </div>
        <div className="d-flex skill-in">
          <h6 className="pt-3 pr-2 stat-txt">Effect</h6>
          {!!skill.effect ? (
            <h4 className="pt-1 pl-0 pr-2">
              {(skill.cup == true) ? (
                <>
                  {"[Consecutive Use Prohibited]"} <br/>
                </>
              ) : ('')}
              {skill.effect}{skill.effectInt}{skill.effectIntType}
              {!!skill.effect2 && (' & ')}
              {skill.effect2}{skill.effectInt2}{skill.effectIntType2}
              {!!skill.effect3 && (' & ')}
              {skill.effect3}{skill.effectInt3}{skill.effectIntType3}
            </h4>
          ) : (<h4 className="pt-1 pl-0 pr-2">-</h4>)}
        </div>
      </div>
    </div>
  )
}

export default CharDetailSkill;