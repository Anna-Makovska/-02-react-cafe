export interface Votes {
    good: number;
    neutral: number;
    bad: number;    
}

export interface VoteOptionsProps {
    onVote: (votes: keyof Votes) => void;
    onReset: () => void;
    canReset?: boolean;
}

export interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}