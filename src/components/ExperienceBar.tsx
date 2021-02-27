import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";


export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentLevelProgress = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>XP</span>
      <div>
        <div style={{ width: `${percentLevelProgress}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentLevelProgress}%` }}>
          {`${currentExperience}/${experienceToNextLevel}`}
        </span>
      </div>
      <span>{experienceToNextLevel}</span>
    </header>
  );
}