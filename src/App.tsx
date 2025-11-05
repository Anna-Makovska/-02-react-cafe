import css from "./App.module.css"
import CafeInfo from "./components/CafeInfo/CafeInfo"
import { Notification } from "./components/Notification/Notification";
import VoteOptions from "./components/VoteOptions/VoteOptions";
import { VoteStats } from "./components/VoteStats/VoteStats";
import type { Votes } from "./types/votes";
import { useState } from "react";

function App() {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleVote = (option: keyof Votes) => {
        setVotes(votes => ({
            ...votes,
            [option]: votes[option] + 1
        }));
    };

    const resetVotes = () => {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };

    const totalVotes = votes.good + votes.neutral + votes.bad;
    const positiveRate = totalVotes === 0 ? 0 : Math.round((votes.good / totalVotes) * 100)

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
            <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
            {totalVotes === 0 && <Notification/>}
        </div>
    );
}

export default App