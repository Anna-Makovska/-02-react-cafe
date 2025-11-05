import css from "./VoteOptions.module.css"
import type { VoteOptionsProps } from "../../types/votes";


const VoteOptions = ({onVote, onReset, canReset = false} : VoteOptionsProps) => {



    return (
        <div className={css.container}>
  <button className={css.button} onClick={() => {onVote("good")}}>Good</button>
  <button className={css.button} onClick={() => {onVote("neutral")}}>Neutral</button>
  <button className={css.button} onClick={() => {onVote("bad")}}>Bad</button>
  {canReset && ( <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>)}
 
</div>

    )
}

export default VoteOptions;